import React, { useRef } from 'react'
import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Tree = (props) => {
  const treeRef = useRef()
  
  // Gentle rotation and sway
  useFrame((state) => {
    if (treeRef.current) {
      treeRef.current.rotation.y = state.clock.elapsedTime * 0.3
      // Subtle sway like wind
      treeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
    }
  })

  return (
    <Float floatIntensity={0.5} speed={1.5}>
      <group ref={treeRef} {...props}>
        {/* Tree trunk - brown */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 0.6, 8]} />
          <meshStandardMaterial
            color="#8B4513"
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>

        {/* Bottom foliage layer - dark green */}
        <mesh position={[0, 0.1, 0]}>
          <coneGeometry args={[0.35, 0.5, 8]} />
          <meshStandardMaterial
            color="#2D5016"
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>

        {/* Middle foliage layer - medium green */}
        <mesh position={[0, 0.35, 0]}>
          <coneGeometry args={[0.3, 0.45, 8]} />
          <meshStandardMaterial
            color="#3D7026"
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>

        {/* Top foliage layer - bright green */}
        <mesh position={[0, 0.6, 0]}>
          <coneGeometry args={[0.22, 0.4, 8]} />
          <meshStandardMaterial
            color="#4A9936"
            emissive="#2D5016"
            emissiveIntensity={0.1}
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>

        {/* Tree top - small cone */}
        <mesh position={[0, 0.85, 0]}>
          <coneGeometry args={[0.12, 0.25, 6]} />
          <meshStandardMaterial
            color="#5BAA46"
            emissive="#3D7026"
            emissiveIntensity={0.2}
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>

        {/* Subtle green ambient light around tree */}
        <pointLight position={[0, 0.5, 0]} intensity={0.3} color="#4A9936" distance={1.5} />
      </group>
    </Float>
  )
}

export default Tree;

