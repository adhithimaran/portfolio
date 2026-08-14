import { Environment, Float } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Shape() {
  const mesh = useRef<Mesh>(null)
  const { viewport } = useThree()
  const offsetX = viewport.width < 6 ? 0.72 : 1.1
  useFrame((_, delta) => {
    if (mesh.current) { mesh.current.rotation.x += delta * 0.16; mesh.current.rotation.y += delta * 0.24 }
  })
  return <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}><mesh ref={mesh} position={[offsetX, 0.4, 0]}><icosahedronGeometry args={[1.45, 2]} /><meshStandardMaterial color="#2B3EF0" metalness={0.25} roughness={0.38} /></mesh></Float>
}

export function HeroScene() {
  return <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }} dpr={[1, 1.5]}><ambientLight intensity={0.45} /><directionalLight position={[3, 4, 5]} intensity={2.5} /><Shape /><Environment preset="city" /></Canvas>
}
