"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { PresentationControls, Environment, Float, ContactShadows, RoundedBox } from "@react-three/drei"
import type { Group } from "three"

function Model() {
  const deviceRef = useRef<Group>()

  useFrame((state) => {
    if (deviceRef.current) {
      const t = state.clock.getElapsedTime()
      deviceRef.current.rotation.x = Math.cos(t / 4) / 8
      deviceRef.current.rotation.y = Math.sin(t / 4) / 8
      deviceRef.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
      deviceRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    }
  })

  return (
    <group ref={deviceRef}>
      {/* Main body */}
      <RoundedBox args={[2, 4, 0.3]} radius={0.2} smoothness={4}>
        <meshStandardMaterial color="#9333ea" roughness={0.2} metalness={0.8} />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox args={[1.6, 2, 0.05]} position={[0, 0.8, 0.18]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="black" roughness={0.2} metalness={0.5} />
      </RoundedBox>

      {/* D-pad base */}
      <RoundedBox args={[1.2, 1.2, 0.05]} position={[0, -1, 0.18]} radius={0.6} smoothness={4}>
        <meshStandardMaterial color="black" roughness={0.2} metalness={0.5} />
      </RoundedBox>

      {/* D-pad buttons */}
      {[
        [0, 0.3, 0], // up
        [0.3, 0, 0], // right
        [0, -0.3, 0], // down
        [-0.3, 0, 0], // left
      ].map((position, index) => (
        <RoundedBox
          key={index}
          args={[0.25, 0.25, 0.05]}
          position={[position[0], position[1] - 1, 0.24]}
          radius={0.05}
          smoothness={4}
        >
          <meshStandardMaterial color="#9333ea" roughness={0.2} metalness={0.8} />
        </RoundedBox>
      ))}

      {/* Center button */}
      <RoundedBox args={[0.25, 0.25, 0.05]} position={[0, -1, 0.24]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#9333ea" roughness={0.2} metalness={0.8} />
      </RoundedBox>
    </group>
  )
}

export default function DeviceModel() {
  return (
    <>
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Float rotationIntensity={0.4}>
          <Model />
        </Float>
      </PresentationControls>
      <Environment preset="city" />
      <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
    </>
  )
}

