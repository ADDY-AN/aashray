"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function StethoscopeModel() {
    const { scene } = useGLTF("/stethoscope.glb");
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.3;
            ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            // Scale: Keep 0.1 as it looks correct, camera move will fix the clipping
            scale={0.018}
            // Position: Centered vertically (Y=0)
            position={[0, 0, 0]}
            rotation={[0.5, 0, 0]}
        />
    );
}

export function HeroScene() {
    return (
        // ✅ FIX: Removed 'min-h-[500px]' so it fits the parent box exactly
        <div className="w-full h-full">
            <Canvas
                // ✅ FIX: Moved camera Z back to 13 to see the COMPLETE model
                camera={{ position: [0, 0, 13], fov: 35 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#00d2ba" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />
                <pointLight position={[0, 0, -5]} intensity={5} color="#00d2ba" distance={10} />

                <Suspense fallback={null}>
                    <Float
                        speed={2}
                        rotationIntensity={0.2}
                        floatIntensity={0.5}
                        floatingRange={[-0.1, 0.1]}
                    >
                        <StethoscopeModel />
                    </Float>
                    <Environment preset="city" />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
}

useGLTF.preload("/stethoscope.glb");