import React, { useRef } from 'react'
import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const RubicsCube = (props) => {
  const groupRef = useRef()

  // Add rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.3
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  const cubeColors = [
    '#FF0000', // Red
    '#00FF00', // Green  
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FFA500', // Orange
    '#FFFFFF', // White
  ]

  return (
    <Float floatIntensity={1} speed={1.5}>
      <group ref={groupRef} {...props}>
        {/* Bigger 3x3x3 Rubik's cube */}
        <group scale={1.2}>
          {[-0.55, 0, 0.55].map((x, i) => 
            [-0.55, 0, 0.55].map((y, j) =>
              [-0.55, 0, 0.55].map((z, k) => (
                <mesh key={`${i}-${j}-${k}`} position={[x, y, z]}>
                  <boxGeometry args={[0.5, 0.5, 0.5]} />
                  <meshStandardMaterial 
                    color={cubeColors[(i + j + k) % cubeColors.length]}
                    metalness={0.2}
                    roughness={0.3}
                  />
                </mesh>
              ))
            )
          )}
          {/* Add black separators between cubes for more realism */}
          <lineSegments>
            <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1.65, 1.65, 1.65)]} />
            <lineBasicMaterial attach="material" color="#000000" linewidth={2} />
          </lineSegments>
        </group>
      </group>
    </Float>
  )
}

export default RubicsCube;