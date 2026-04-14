import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 320;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 6;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x2a9d8f,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleScroll = () => { scrollY = window.scrollY; };
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    let t = 0;
    let animationFrameId: number;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      t += 0.008;
      
      const heroHeight = window.innerHeight;
      const sp = Math.min(scrollY / heroHeight, 1);
      const chaos = 1 - sp;

      const posArr = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        if (chaos > 0.2) {
          posArr[i * 3] += vel[i * 3] * (1 + chaos * 3);
          posArr[i * 3 + 1] += vel[i * 3 + 1] * (1 + chaos * 3);
          posArr[i * 3 + 2] += vel[i * 3 + 2];
          
          if (Math.abs(posArr[i * 3]) > 7) { vel[i * 3] *= -1; }
          if (Math.abs(posArr[i * 3 + 1]) > 4) { vel[i * 3 + 1] *= -1; }
        } else {
          const angle = t * 0.3 + (i / COUNT) * Math.PI * 2;
          const r = 0.8 + (i % 5) * 0.4;
          const tx = Math.cos(angle) * r * ((i % 3) - 1) * 1.5;
          const ty = Math.sin(angle) * r * 0.6;
          posArr[i * 3] += (tx - posArr[i * 3]) * 0.02;
          posArr[i * 3 + 1] += (ty - posArr[i * 3 + 1]) * 0.02;
        }
      }
      geo.attributes.position.needsUpdate = true;

      const r = 0.16 + chaos * 0.6;
      const g = 0.61 - chaos * 0.4;
      const b = 0.56 - chaos * 0.2;
      mat.color.setRGB(r, g, b);
      mat.opacity = 0.35 + chaos * 0.35;
      mat.size = 0.045 - chaos * 0.02 + (1 - chaos) * 0.02;

      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 1.0 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-1 pointer-events-none"
    />
  );
}
