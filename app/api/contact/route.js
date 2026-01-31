import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const body = await request.json();
        // ✅ Extract new fields: age, doctorName
        const { name, age, phone, email, date, reason, doctorName } = body;

        // 1. Save to MongoDB
        const appointment = await prisma.appointment.create({
            data: {
                name,
                age,                // ✅ Saved
                phone,
                email,
                date,
                reason,
                doctor: doctorName, // ✅ Saved (Mapped to 'doctor' in schema)
            },
        });

        // 2. Setup Email Transporter (Gmail)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 3. Email to ADMIN (You)
        const adminMail = {
            from: process.env.EMAIL_USER,
            to: 'aashraynursing@gmail.com',
            subject: `New Appointment: ${name} with ${doctorName}`, // ✅ Subject updated
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #05668d;">New Appointment Request</h2>
                    <p><strong>Doctor Requested:</strong> <span style="color: #00a896;">${doctorName}</span></p>
                    <hr />
                    <p><strong>Patient Name:</strong> ${name}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Date Requested:</strong> ${date}</p>
                    <p><strong>Reason:</strong> ${reason}</p>
                    <br/>
                    <p style="font-size: 12px; color: #666;">Saved to MongoDB ID: ${appointment.id}</p>
                </div>
            `,
        };

        // 4. Email to PATIENT (Automated Reply)
        const patientMail = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Appointment Request Received - Aashray Hospital',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #05668d;">Thank You, ${name}!</h2>
                    <p>We have received your appointment request for <strong>${doctorName}</strong> on <strong>${date}</strong>.</p>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                         <p><strong>Reason:</strong> ${reason}</p>
                         <p><strong>Phone:</strong> ${phone}</p>
                    </div>

                    <p>Our team will review the doctor's schedule and contact you shortly to confirm your slot.</p>
                    <br/>
                    <p style="color: #00a896; font-weight: bold;">Aashray Superspeciality Hospital Team</p>
                </div>
            `,
        };

        // Send both emails in parallel
        await Promise.all([
            transporter.sendMail(adminMail),
            transporter.sendMail(patientMail)
        ]);

        return NextResponse.json({ success: true, data: appointment }, { status: 200 });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, error: "Failed to process appointment" }, { status: 500 });
    }
}