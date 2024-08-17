import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Image, Text, Box } from "@mantine/core";
import aboutHill1 from "../assets/about/about_hill_1.svg";
import aboutHill2 from "../assets/about/about_hill_2.svg";
import aboutHill3 from "../assets/about/about_hill_3.svg";
import aboutHill4 from "../assets/about/about_hill_4.svg";
import aboutRoad from "../assets/about/about_road.svg";

type ScreenSize = 'small' | 'medium' | 'large';

function About() {
    const [gradientProgress, setGradientProgress] = useState(100);
    const [screenSize, setScreenSize] = useState<ScreenSize>('large');
    const parallaxRef = useRef<HTMLDivElement>(null);
    const hill1Ref = useRef<HTMLImageElement>(null);
    const hill2Ref = useRef<HTMLImageElement>(null);
    const hill3Ref = useRef<HTMLImageElement>(null);
    const hill4Ref = useRef<HTMLImageElement>(null);
    const roadRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setScreenSize('large');
            } else if (window.innerWidth >= 768) {
                setScreenSize('medium');
            } else {
                setScreenSize('small');
            }
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);

        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "2500 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setGradientProgress(100 - Math.ceil(self.progress * 100));
                    },
                },
            });

            tl.to(hill1Ref.current, { y: "40%", ease: "none" }, 0);
            tl.to(hill2Ref.current, { y: "30%", ease: "none" }, 0);
            tl.to(hill3Ref.current, { y: "-30%", ease: "none" }, 0);
            tl.to(hill4Ref.current, { y: "-75%", ease: "none" }, 0);
            tl.to(roadRef.current, { y: "-70%", ease: "none" }, 0);
            tl.to(contentRef.current, { y: "-175%", opacity: 1, ease: "none" }, 0);
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            ctx.revert();
        };
    }, []);

    const getHillStyles = (screenSize: ScreenSize) => ({
        hill1: {
            bottom: screenSize === 'large' ? '2%' : screenSize === 'medium' ? '1%' : '0%',
            left: '-5%',
            width: '110%'
        },
        hill2: {
            bottom: screenSize === 'large' ? '-6%' : screenSize === 'medium' ? '-4%' : '-2%',
            left: screenSize === 'large' ? '15%' : screenSize === 'medium' ? '12%' : '8%',
            width: '110%'
        },
        hill3: {
            bottom: screenSize === 'large' ? '2%' : screenSize === 'medium' ? '1%' : '0%',
            left: '-5%',
            width: '110%'
        },
        hill4: {
            bottom: '0%',
            left: '-5%',
            width: '110%'
        },
        road: {
            bottom: screenSize === 'large' ? '-18%' : screenSize === 'medium' ? '-12%' : '-6%',
            left: '-5%',
            width: '110%'
        },
        content: {
            top: screenSize === 'large' ? '100%' : screenSize === 'medium' ? '95%' : '90%'
        }
    });

    const hillStyles = getHillStyles(screenSize);

    return (
        <Box ref={parallaxRef} style={{ 
            height: '100vh', 
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(#FFF, #C7FFF6 ${gradientProgress}%)`
        }}>
            <Image 
                ref={hill1Ref} 
                src={aboutHill1} 
                alt="Hill 1" 
                style={{ 
                    position: 'absolute', 
                    zIndex: 1, 
                    ...hillStyles.hill1
                }} 
            />
            <Image 
                ref={hill2Ref} 
                src={aboutHill2} 
                alt="Hill 2" 
                style={{ 
                    position: 'absolute', 
                    zIndex: 2, 
                    ...hillStyles.hill2
                }} 
            />
            <Image 
                ref={hill3Ref} 
                src={aboutHill3} 
                alt="Hill 3" 
                style={{ 
                    position: 'absolute', 
                    zIndex: 3, 
                    ...hillStyles.hill3
                }} 
            />
            <Image 
                ref={hill4Ref} 
                src={aboutHill4} 
                alt="Hill 4" 
                style={{ 
                    position: 'absolute', 
                    zIndex: 4, 
                    ...hillStyles.hill4
                }} 
            />

            <Box 
                ref={contentRef} 
                style={{
                    position: 'absolute',
                    ...hillStyles.content,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 5,
                    opacity: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
                    padding: '20px',
                    borderRadius: '10px',
                    width: '90%',
                    maxWidth: '600px'
                }}
            >
                <Text className="header_text" style={{ color: 'white', marginBottom: '20px', fontSize: 'clamp(24px, 5vw, 36px)' }}>
                    About VandyHacks
                </Text>
                <Text className="body_text" style={{ color: 'white', margin: '0 auto', fontSize: 'clamp(14px, 3vw, 18px)' }}>
                    VandyHacks is Vanderbilt's premiere hackathon, bringing together students from across the country for 36 hours of coding, learning, and innovation. Join us for workshops, networking, and the chance to turn your ideas into reality!
                </Text>
            </Box>
            <Image 
                ref={roadRef} 
                src={aboutRoad} 
                alt="Road" 
                style={{ 
                    position: 'absolute', 
                    zIndex: 6, 
                    ...hillStyles.road
                }} 
            />
        </Box>
    );
}

export default About;