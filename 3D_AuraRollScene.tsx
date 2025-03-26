
// This is a starter 3rd-person 3D aura roller scene using React Three Fiber

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sphere, Stars } from '@react-three/drei';

function AuraOrb({ rarityColor }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={mesh} position={[0, 1, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial emissive={rarityColor} color={rarityColor} />
    </mesh>
  );
}

function Player() {
  return (
    <mesh position={[0, 0.5, -3]}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="#666" />
    </mesh>
  );
}

function AuraRollScene() {
  const [rolled, setRolled] = useState(false);
  const rarityColor = rolled ? '#ff69b4' : '#ffffff'; // Pink glow if rolled

  return (
    <div style={{ height: '100vh' }}>
      <Canvas shadows>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PerspectiveCamera makeDefault position={[0, 2, 6]} />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
        <Stars />
        <Player />
        {rolled && <AuraOrb rarityColor={rarityColor} />}
      </Canvas>
      <button onClick={() => setRolled(true)} style={{
        position: 'absolute', top: 20, left: 20, padding: '10px 20px', fontSize: '1.2rem'
      }}>
        ROLL AURA
      </button>
    </div>
  );
}

export default AuraRollScene;
