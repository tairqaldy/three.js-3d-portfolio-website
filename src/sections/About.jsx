import React, { useRef, useEffect, Suspense, useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { Canvas } from '@react-three/fiber'
import Lightbulb from '../components/Lightbulb'
import RubicsCube from '../components/RubicsCube'
import Tree from '../components/Tree'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('tairqaldy@gmail.com')
        
        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

  const globeRef = useRef()

  useEffect(() => {
    if (globeRef.current) {
      // Set initial camera position to zoom in on Eindhoven
      globeRef.current.pointOfView({ lat: 51.44164, lng: 5.46972, altitude: 1.2 }, 10000)
    }
  }, [])

  return (
    <section className ="c-space my-12 xl:mb-6 2xl:mb-4" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full min-h-screen">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full h-[276px] h-fit object-contain" />

                    <div>
                        <p className='grid-headtext'>Hi, I'm Tair</p>
                        <p className='grid-subtext'>I’m a <span className='text-white font-medium'>Software Engineer</span> with <span className='text-white font-medium'>5 years</span> of experience, who turns ideas into real products. From AI-powered consulting tools to interactive web apps, I focus on building tech that creates real value and improves user experience.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container purpose-grid'>
                    <div className='flex flex-col justify-between h-full'>
                        {/* Header with code aesthetic */}
                        <div>
                            <div className='flex items-center gap-2 mb-6'>
                                <span className='text-green-500 font-mono text-sm'>{'> '}</span>
                                <p className='grid-headtext mb-0'>Code with Purpose</p>
                            </div>
                            
                            {/* Main content with creative layout */}
                            <div className='space-y-6'>
                                <p className='text-base text-[#afb0b6] leading-relaxed'>
                                    For me, coding is more than solving bugs or building features
                                </p>
                                
                                {/* Large emphasis text */}
                                <div className='purpose-emphasis-block'>
                                    <p className='text-3xl sm:text-4xl font-bold text-white leading-tight'>
                                        it's a way to<br />
                                        <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent'>
                                            bring value
                                        </span>
                                    </p>
                                </div>

                                <p className='text-base text-[#afb0b6] leading-relaxed'>
                                    I love turning blank screens into products, but what really drives me is seeing my work make:
                                </p>

                                {/* Interactive cards with 3D models */}
                                <div className='grid grid-cols-3 gap-2 sm:gap-3'>
                                    <div className='purpose-card'>
                                        <div className='h-16 sm:h-20 w-full'>
                                            <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight intensity={1} />
                                                    <directionalLight position={[5, 5, 5]} intensity={1} />
                                                    <Lightbulb position={[0, 0, 0]} />
                                                </Suspense>
                                            </Canvas>
                                        </div>
                                        <p className='text-xs sm:text-sm text-white font-medium'>ideas</p>
                                        <p className='text-xs text-[#afb0b6]'>real</p>
                                    </div>
                                    <div className='purpose-card'>
                                        <div className='h-16 sm:h-20 w-full'>
                                            <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight intensity={1} />
                                                    <directionalLight position={[5, 5, 5]} intensity={1} />
                                                    <RubicsCube position={[0, 0, 0]} />
                                                </Suspense>
                                            </Canvas>
                                        </div>
                                        <p className='text-xs sm:text-sm text-white font-medium'>processes</p>
                                        <p className='text-xs text-[#afb0b6]'>smoother</p>
                                    </div>
                                    <div className='purpose-card'>
                                        <div className='h-16 sm:h-20 w-full'>
                                            <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight intensity={1.5} />
                                                    <directionalLight position={[5, 5, 5]} intensity={2} />
                                                    <directionalLight position={[-5, -5, -5]} intensity={0.5} />
                                                    <Tree position={[0, 0, 0]} scale={1} />
                                                </Suspense>
                                            </Canvas>
                                        </div>
                                        <p className='text-xs sm:text-sm text-white font-medium'>lives</p>
                                        <p className='text-xs text-[#afb0b6]'>easier</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom statement */}
                        <div className='mt-6 pt-6 border-t border-black-300'>
                            <p className='text-sm text-[#afb0b6] font-mono'>
                                <span className='text-gray-300'>const</span> result = <span className='text-gray-400'>code</span> + <span className='text-gray-500'>purpose</span>;
                            </p>
                            <p className='text-lg sm:text-xl font-semibold text-white mt-2'>
                                // <span className='bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent'>impact</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[260px] h-fit flex justify-center items-center'>
                        <Globe 
                        ref={globeRef}
                        height={260} 
                        width={260} 
                        backgroundColor='rgba(0, 0, 0, 0)'
                        backgroundImageOpacity={0.5} 
                        showAtmosphere 
                        showGraticules 
                        globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg' 
                        bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                        labelsData={[{
                            lat:  51.44164, lng: 5.46972, 
                            text: "I'm Here!",
                            color: 'white',
                            size: 1000,
                        }, 
                        {
                            lat: 51.169392, lng: 71.449074,
                            text: "I'm from Here!",
                            color: 'white',
                            size: 1000,
                        }
                        ]}
                    />
                    </div>
                    <div>
                        <p className='grid-headtext'>I work remotely across most timezones.</p>
                        <p className='grid-subtext'>I'm from Astana, Kazakhstan and based in Eindhoven, Netherlands, with remote work available.</p>
                        <Button name="Contact me" href="#contact" isBeam containerClass="w-full mt-6" />
                    </div>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3 h-fit'>
                <div className='grid-container'>
                    <div>
                        <p className='text-xl font-semibold mb-2 text-white font-generalsans'>Tech Stack</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        {/* Languages */}
                        <div>
                            <h4 className='text-white font-semibold mb-2 text-xs'>Languages</h4>
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='tech-badge'>JavaScript (ES6+)</span>
                                <span className='tech-badge'>TypeScript</span>
                                <span className='tech-badge'>Python</span>
                            </div>
                        </div>

                        {/* Frontend */}
                        <div>
                            <h4 className='text-white font-semibold mb-1 text-xs'>Frontend</h4>
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='tech-badge'>React</span>
                                <span className='tech-badge'>Next.js</span>
                                <span className='tech-badge'>Expo</span>
                                <span className='tech-badge'>HTML/CSS</span>
                                <span className='tech-badge'>Tailwind CSS</span>
                                <span className='tech-badge'>Three.js</span>
                                <span className='tech-badge'>React Three Fiber</span>
                                <span className='tech-badge'>Tailwind CSS</span>
                                <span className='tech-badge'>Material UI</span>
                                <span className='tech-badge'>Shadcn UI</span>
                                <span className='tech-badge'>V0</span>
                            </div>
                        </div>

                        {/* Backend */}
                        <div>
                            <h4 className='text-white font-semibold mb-1 text-xs'>Backend</h4>
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='tech-badge'>Node.js</span>
                                <span className='tech-badge'>Firebase</span>
                                <span className='tech-badge'>Supabase</span>
                                <span className='tech-badge'>Google Cloud</span>
                                <span className='tech-badge'>REST APIs</span>
                                <span className='tech-badge'>WebSockets</span>
                                <span className='tech-badge'>APIs</span>
                                <span className='tech-badge'>MySql</span>

                            </div>
                        </div>

                        {/* AI & Automation */}
                        <div>
                            <h4 className='text-white font-semibold mb-1 text-xs'>AI & Automation</h4>
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='tech-badge'>AI Integration</span>
                                <span className='tech-badge'>n8n</span>
                                <span className='tech-badge'>Prompt Engineering</span>
                                <span className='tech-badge'>Telegram Bots</span>
                                <span className='tech-badge'>AI Chatbots</span>
                            </div>
                        </div>

                        {/* DevOps */}
                        <div>
                            <h4 className='text-white font-semibold mb-1 text-xs'>DevOps & Tools</h4>   
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='tech-badge'>Git/GitHub</span>
                                <span className='tech-badge'>Docker</span>
                                <span className='tech-badge'>Vercel</span>
                                <span className='tech-badge'>hoster.kz</span>
                                <span className='tech-badge'>ps.kz</span>
                                <span className='tech-badge'>GitLab</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact Me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                            <p className='lg:text-2xl md:text-xl font-medium text-grey_gradient text-white'>taircaldy.yt@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About