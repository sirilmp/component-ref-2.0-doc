
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const controlsTimeoutRef = useRef<any>(null);

    useEffect(() => {
        if (isOpen) {
            setIsPlaying(false);
            setShowControls(true);
        } else {
            setIsPlaying(false);
            setProgress(0);
        }
    }, [isOpen]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const seekTime = (parseFloat(e.target.value) / 100) * duration;
        if (videoRef.current) {
            videoRef.current.currentTime = seekTime;
            setProgress(parseFloat(e.target.value));
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            videoRef.current.muted = newVolume === 0;
            setIsMuted(newVolume === 0);
        }
    };

    const toggleFullscreen = () => {
        const container = document.getElementById('video-container');
        if (!isFullscreen) {
            if (container?.requestFullscreen) {
                container.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) setShowControls(false);
        }, 2500);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
                    onMouseMove={handleMouseMove}
                >
                    {/* Glassmorphism Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        id="video-container"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl md:rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] z-10 border border-white/10 group"
                    >
                        {/* Video Element */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {videoUrl ? (
                                <video
                                    ref={videoRef}
                                    src={videoUrl}
                                    onTimeUpdate={handleTimeUpdate}
                                    onLoadedMetadata={handleLoadedMetadata}
                                    onClick={togglePlay}
                                    className="w-full h-full object-contain cursor-pointer"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-4 text-zinc-500">
                                    <Play size={48} className="opacity-20 translate-x-1" />
                                    <p className="font-medium tracking-tight">Preview unavailable</p>
                                </div>
                            )}
                        </div>

                        {/* Custom Overlay for Controls */}
                        <AnimatePresence>
                            {showControls && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-4 md:p-8"
                                >
                                    {/* Top Bar */}
                                    <div className="flex justify-end items-end">
                                        <button
                                            onClick={onClose}
                                            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition-all cursor-pointer active:scale-90"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    {/* Center Play Button (only visible when paused or on hover) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: isPlaying ? 0 : 1, scale: isPlaying ? 0.8 : 1 }}
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    >
                                        <button
                                            onClick={togglePlay}
                                            className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white scale-110 shadow-2xl pointer-events-auto hover:bg-white/20 transition-colors"
                                        >
                                            {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                                        </button>
                                    </motion.div>

                                    {/* Bottom Controls Bar */}
                                    <div className="space-y-4 md:space-y-6">
                                        {/* Progress Bar */}
                                        <div className="relative group/progress h-1 hover:h-1.5 transition-all">
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={progress}
                                                onChange={handleSeek}
                                                className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                                            />
                                            <div className="absolute inset-0 bg-white/20 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={false}
                                                    animate={{ width: `${progress}%` }}
                                                    className="h-full bg-blue-500 rounded-full relative"
                                                >
                                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Controls Row */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 md:gap-8">
                                                {/* Play/Pause */}
                                                <button onClick={togglePlay} className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                                                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                                                </button>

                                                {/* Volume */}
                                                <div className="flex items-center gap-3 group/volume">
                                                    <button onClick={toggleMute} className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                                                        {(isMuted || volume === 0) ? <VolumeX size={22} /> : <Volume2 size={22} />}
                                                    </button>
                                                    <div className="w-0 group-hover/volume:w-20 overflow-hidden transition-all duration-300">
                                                        <input
                                                            type="range"
                                                            min="0"
                                                            max="1"
                                                            step="0.01"
                                                            value={isMuted ? 0 : volume}
                                                            onChange={handleVolumeChange}
                                                            className="w-full accent-blue-500 cursor-pointer"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Time Indicator */}
                                                <div className="text-[13px] font-mono text-white/70 tracking-tight">
                                                    <span>{formatTime(videoRef.current?.currentTime || 0)}</span>
                                                    <span className="mx-1.5 opacity-30">/</span>
                                                    <span className="opacity-50">{formatTime(duration)}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <button onClick={toggleFullscreen} className="text-white hover:text-blue-400 transition-colors cursor-pointer p-1">
                                                    {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default VideoModal;
