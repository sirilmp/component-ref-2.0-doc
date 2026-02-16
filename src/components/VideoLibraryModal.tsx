
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Clock, ChevronRight } from 'lucide-react';
import libraryData from '../data/video-library.json';
import VideoModal from './VideoModal';

interface VideoLibraryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const VideoLibraryModal = ({ isOpen, onClose }: VideoLibraryModalProps) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(libraryData.videos[0]);

    // Close video when library modal closes (if controlled externally)
    useEffect(() => {
        if (!isOpen) {
            setIsVideoOpen(false);
            // Reset to first video on open or close? Let's reset on close.
            // setSelectedVideo(libraryData.videos[0]); 
        }
    }, [isOpen]);

    const handlePlayVideo = () => {
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
    };

    return createPortal(
        <>
            <AnimatePresence>
                {isOpen && !isVideoOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row h-[80vh] max-h-[700px]"
                        >
                            {/* Left Side: Sidebar List */}
                            <div className="w-full md:w-1/3 border-r border-white/5 bg-zinc-900/30 flex flex-col">
                                <div className="p-6 border-b border-white/5">
                                    <h2 className="text-xl font-bold text-white">{libraryData.libraryTitle}</h2>
                                    <p className="text-sm text-zinc-400 mt-1">{libraryData.libraryDescription}</p>
                                </div>
                                <div className="flex-1 overflow-y-auto p-2 space-y-1 scrolbar-thin">
                                    {libraryData.videos.map((video) => (
                                        <button
                                            key={video.id}
                                            onClick={() => setSelectedVideo(video)}
                                            className={`w-full text-left p-3 rounded-lg transition-all border group relative flex items-start gap-3
                                                ${selectedVideo.id === video.id
                                                    ? 'bg-white/10 border-white/10 shadow-inner'
                                                    : 'hover:bg-white/5 border-transparent hover:border-white/5 text-zinc-400 hover:text-white'
                                                }`}
                                        >
                                            <div className="mt-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                <Play size={10} className={selectedVideo.id === video.id ? "fill-white text-white" : "fill-zinc-400 text-zinc-400 group-hover:fill-white group-hover:text-white"} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-sm font-medium leading-tight mb-1 ${selectedVideo.id === video.id ? 'text-white' : ''}`}>
                                                    {video.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-xs opacity-60">
                                                    <Clock size={10} />
                                                    <span>{video.duration}</span>
                                                </div>
                                            </div>
                                            {selectedVideo.id === video.id && (
                                                <motion.div layoutId="activeInd" className="absolute right-3 top-1/2 -translate-y-1/2">
                                                    <ChevronRight size={14} className="text-white/50" />
                                                </motion.div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Preview & Content */}
                            <div className="w-full md:w-2/3 flex flex-col h-full bg-zinc-950/50 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white backdrop-blur-md border border-white/5 transition-all z-20"
                                >
                                    <X size={20} />
                                </button>

                                {/* Video Preview Area */}
                                <div
                                    className="flex-1 bg-black relative group cursor-pointer overflow-hidden"
                                    onClick={handlePlayVideo}
                                >
                                    {/* Thumbnail Image or Placeholder */}
                                    {selectedVideo.thumbnailUrl ? (
                                        <div className="absolute inset-0">
                                            <img
                                                src={selectedVideo.thumbnailUrl}
                                                alt={selectedVideo.title}
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-transparent"></div>
                                        </div>
                                    )}

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                                            <Play size={32} className="fill-white text-white ml-2" />
                                        </div>
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* Content Area below preview */}
                                <div className="p-8 border-t border-white/5 bg-zinc-900/20 h-[250px] flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-white mb-3">{selectedVideo.title}</h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">{selectedVideo.description}</p>
                                    <div className="mt-6 flex items-center gap-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                                            <Clock size={12} /> {selectedVideo.duration}
                                        </span>
                                        <button
                                            onClick={handlePlayVideo}
                                            className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                                        >
                                            Watch Tutorial <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* The Actual Video Player */}
            <VideoModal
                isOpen={isVideoOpen}
                onClose={handleCloseVideo}
                videoUrl={selectedVideo.videoUrl}
            />
        </>,
        document.body
    );
};

export default VideoLibraryModal;
