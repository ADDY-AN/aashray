import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, email, date, reason } = body;

        // 1. Save to MongoDB
        const appointment = await prisma.appointment.create({
            data: {
                name,
                phone,
                email,
                date,
                reason,
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
            to: 'adityakumar0408@gmail.com', // REPLACE with your receiving email
            subject: `New Appointment: ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #05668d;">New Appointment Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Reason:</strong> ${reason}</p>
                    <br/>
                    <p style="font-size: 12px; color: #666;">Saved to MongoDB ID: ${appointment.id}</p>
                </div>
            `,
        };

        // 4. Email to PATIENT (Automated Reply)
        const patientMail = {
            from: process.env.EMAIL_USER,
            to: email, // Sends to the email the user typed
            subject: 'Appointment Received - Aashray Hospital',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
                    <h2 style="color: #00a896;">Thank You, ${name}!</h2>
                    <p>We have received your appointment request for <strong>${date}</strong>.</p>
                    <p>Our team will review your request and contact you at <strong>${phone}</strong> shortly to confirm the time.</p>
                    <br/>
                    <p>Regards,<br/><strong>Aashray Superspeciality Hospital</strong></p>
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