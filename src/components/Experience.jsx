import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import videoSource from '../assets/videokampkuso.mp4';

const Experience = () => {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false); // Start false, let auto-play set it to true

    // Track when section is 50% visible
    const isInView = useInView(sectionRef, { amount: 0.5 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isInView) {
            video.play().catch(e => console.log("Auto-play blocked:", e));
        } else {
            video.pause();
        }
    }, [isInView]); // Reacts ONLY to visibility changes

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    const toggleFullscreen = () => {
        const video = videoRef.current;
        if (!video) return;

        if (!document.fullscreenElement) {
            video.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <section ref={sectionRef} className="hero-section !p-0 !items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>

            {/* BACKGROUND VIDEO */}
            <motion.div className="hero-bg-wrapper">
                {/* Reduced overlay opacity since there is no text to read, just video focus */}
                <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.2)' }} />
                <video
                    ref={videoRef}
                    src={videoSource}
                    className="hero-image"
                    muted
                    loop
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                />
            </motion.div>

            {/* CONTENT - CENTERED BUTTONS */}
            <div className="container hero-content h-full flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row gap-6 items-center justify-center w-full"
                >
                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        className="btn-impact btn-ghost h-20 min-w-[300px] px-8 border-white/40 hover:bg-white/10 backdrop-blur-sm text-lg flex items-center justify-center gap-4"
                    >
                        {isPlaying ? (
                            <>
                                <div className="w-8 h-8 flex items-center justify-center flex-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                    </svg>
                                </div>
                                <span>PAUZIRAJ VIDEO</span>
                            </>
                        ) : (
                            <>
                                <div className="w-8 h-8 flex items-center justify-center flex-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                    </svg>
                                </div>
                                <span>POKRENI VIDEO</span>
                            </>
                        )}
                    </button>

                    {/* Fullscreen Button */}
                    <button
                        onClick={toggleFullscreen}
                        className="btn-impact btn-ghost h-20 min-w-[300px] px-8 border-white/40 hover:bg-white/10 backdrop-blur-sm text-lg flex items-center justify-center gap-4"
                    >
                        <div className="w-8 h-8 flex items-center justify-center flex-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                            </svg>
                        </div>
                        <span>PUNI ZASLON</span>
                    </button>
                </motion.div>
            </div>

        </section>
    );
};

export default Experience;
