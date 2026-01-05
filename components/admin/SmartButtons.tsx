import React, { useState } from 'react';
import { Sparkles, Loader2, ImagePlus } from 'lucide-react';
import { generateContent, generateImage } from '../../lib/gemini';
import { useData } from '../../context/DataContext';

interface SmartTextButtonProps {
    prompt: string;
    onGenerate: (text: string) => void;
    label?: string;
    className?: string;
    disabled?: boolean;
}

export const SmartTextButton: React.FC<SmartTextButtonProps> = ({ prompt, onGenerate, label = "Smart Generate", className = "", disabled = false }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        if (!prompt) return alert("Please provide a prompt context.");
        setLoading(true);
        try {
            const text = await generateContent(prompt);
            onGenerate(text);
        } catch (error) {
            console.error(error);
            alert(`Failed to generate content: ${error instanceof Error ? error.message : "Unknown error"}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={loading || disabled}
            className={`flex items-center gap-2 text-xs font-medium transition-colors ${className} ${disabled ? 'text-neutral-600 cursor-not-allowed' : 'text-purple-400 hover:text-purple-300'}`}
            title={disabled ? "Please enter required fields first" : label}
        >
            {loading ? <Loader2 className="animate-spin" size={14} /> : <Sparkles size={14} />}
            {loading ? "Generating..." : label}
        </button>
    );
};

interface SmartImageButtonProps {
    prompt: string;
    bucket: string;
    onImageGenerated: (url: string) => void;
    label?: string;
    disabled?: boolean;
}

export const SmartImageButton: React.FC<SmartImageButtonProps> = ({ prompt, bucket, onImageGenerated, label = "Generate AI Image", disabled = false }) => {
    const { uploadImage } = useData();
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        if (!prompt) return alert("Please provide a description for the image.");
        setLoading(true);
        try {
            // 1. Generate Image (Blob)
            const imageBlob = await generateImage(prompt);

            // 2. Convert to File
            const fileName = `ai-gen-${Date.now()}.png`;
            const file = new File([imageBlob], fileName, { type: 'image/png' });

            // 3. Upload to Supabase
            const url = await uploadImage(file, bucket);

            // 4. Callback
            onImageGenerated(url);
        } catch (error) {
            console.error(error);
            alert(`Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={loading || disabled}
            className={`flex items-center gap-2 border px-3 py-1.5 rounded text-xs transition-all ${disabled
                    ? 'bg-neutral-800 border-neutral-700 text-neutral-500 cursor-not-allowed'
                    : 'bg-purple-600/20 hover:bg-purple-600/30 border-purple-500/30 text-purple-300'
                }`}
            title={disabled ? "Please enter required fields first" : label}
        >
            {loading ? <Loader2 className="animate-spin" size={14} /> : <ImagePlus size={14} />}
            {loading ? "Creating Magic..." : label}
        </button>
    );
};
