
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Glassmorphism Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-4xl aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/20"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-black transition-colors z-20 cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        {/* Video Container */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
                            {videoUrl ? (
                                <video
                                    src={videoUrl}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-4 text-zinc-400">
                                    <div className="w-20 h-20 rounded-full bg-zinc-200 flex items-center justify-center">
                                        <Play size={40} className="text-zinc-400 fill-zinc-400" />
                                    </div>
                                    <p className="font-medium">Video Coming Soon</p>
                                </div>
                            )}
                        </div>

                        {/* White bottom bar or logo if needed */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default VideoModal;
