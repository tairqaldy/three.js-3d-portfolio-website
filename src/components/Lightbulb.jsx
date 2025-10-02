import React from 'react'
import { Float } from '@react-three/drei'

const Lightbulb = (props) => {
  return (
    <Float floatIntensity={2} speed={2}>
      <group {...props} scale={1.2}>
        {/* Main bulb glass - bigger and more detailed */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhysicalMaterial 
            color="#FFFACD"
            emissive="#FFD700" 
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Inner glow sphere */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial 
            color="#FFF5BA"
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Filament */}
        <mesh position={[0, 0.3, 0]}>
          <torusGeometry args={[0.12, 0.02, 8, 16]} />
          <meshStandardMaterial 
            color="#FFB900"
            emissive="#FF8C00"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Metal base - more detailed */}
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.18, 0.24, 0.4, 24]} />
          <meshStandardMaterial 
            color="#C0C0C0" 
            metalness={1.5} 
            roughness={0.2} 
          />
        </mesh>

        {/* Base bottom */}
        <mesh position={[0, -0.38, 0]}>
          <cylinderGeometry args={[0.24, 0.2, 0.18, 24]} />
          <meshStandardMaterial 
            color="#808080" 
            metalness={0.7} 
            roughness={0.3} 
          />
        </mesh>

        {/* Bright point light */}
        <pointLight 
          position={[0, 0.3, 0]} 
          intensity={2} 
          distance={3} 
          color="#FFEB3B" 
          decay={2}
        />
      </group>
    </Float>
  )
}

export default Lightbulb;