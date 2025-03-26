'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import Lenis from 'lenis';
import gsap from 'gsap';
import { fragmentShader, vertexShader } from "./Shader";

export default function WavyMesh({ canvasSize, meshScale }) {
    const mesh = useRef();
    const material = useRef();
    const lenis = useRef(null);
    const scrollData = useRef({ y: 0, velocity: 0, direction: 0 });
  
    useEffect(() => {
      lenis.current = new Lenis({
        smooth: true,
        duration: 1.2,
      });
      lenis.current.on('scroll', (e) => {
        scrollData.current.y = window.scrollY;
        scrollData.current.velocity = e.velocity;
      });
  
      function scrollRaf(time) {
        lenis.current.raf(time);
        requestAnimationFrame(scrollRaf);
      }
      requestAnimationFrame(scrollRaf);
  
      return () => lenis.current.destroy();
    }, []);
  
    useFrame(({ clock }) => {
      if (material.current) {
        const scrollVelocity = scrollData.current.velocity;
        let targetDirection = scrollVelocity !== 0
          ? Math.sign(scrollVelocity) * Math.min(Math.abs(scrollVelocity) * 2, 1.5)
          : 0;
        scrollData.current.direction = THREE.MathUtils.lerp(
          scrollData.current.direction,
          targetDirection,
          0.05
        );
        material.current.uniforms.uTime.value = clock.getElapsedTime();
        material.current.uniforms.uScrollDir.value = scrollData.current.direction;
      }
  
      // Dynamically update the mesh scale
      if (mesh.current) {
        mesh.current.scale.set(meshScale, 1, 1);
      }
    });
  
    const uniforms = useMemo(() => ({
      uTime: { value: 0 },
      uScrollDir: { value: 0 },
      uTextureSize: { value: new THREE.Vector2(1024, 1024) },
      uQuadSize: { value: new THREE.Vector2(canvasSize.width * 7, canvasSize.height) },
    }), [canvasSize]);
  
    return (
      <mesh ref={mesh} position={[0, 0, 0]}>
        <planeGeometry args={[canvasSize.width * 8 / canvasSize.height, 7, 500, 500]} />
        <shaderMaterial
          ref={material}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    );
  }
  