"use client"; // Ensures this component runs only on the client
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../../public/models/Model";

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 10 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />

            <Suspense fallback={null}>
                <mesh scale={[3, 3, 3]} rotation={[0, Math.PI, 0]}>
                    <Model />
                </mesh>
            </Suspense>
            <Environment preset="studio" />
            {/* Enables orbit controls with auto-rotate */}
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
    );
}
