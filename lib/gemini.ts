import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
// Note: In Vite, env vars are exposed via import.meta.env
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY || '');

// --- TEXT GENERATION ---
export const generateContent = async (prompt: string): Promise<string> => {
    if (!API_KEY) throw new Error('Missing VITE_GEMINI_API_KEY');

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini Text Gen Error:", error);
        throw error;
    }
};

// --- IMAGE GENERATION ---
// Using Gemini 2.0 Flash Exp which supports native image generation
export const generateImage = async (prompt: string): Promise<Blob> => {
    if (!API_KEY) throw new Error('Missing VITE_GEMINI_API_KEY');

    try {
        // Note: As of early 2026/late 2025, Gemini 2.0 Flash supports image generation.
        // If strict Imagen 3 is required, use 'imagen-3.0-generate-001' but it requires whitelist.
        // 'gemini-2.0-flash-exp' is often more accessible.

        // User requested detailed model: gemini-3-pro-image-preview
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        responseModalities: ["IMAGE"]
                    }
                })
            }
        );

        if (!response.ok) {
            const text = await response.text();
            console.warn(`Gemini 3 failed (${response.status}): ${text}. Falling back...`);

            // Fallback to older Imagen 2 if Gemini 3 fails 
            // (This is a robust fallback strategy)
            const fallbackResponse = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/image-generation-001:predict?key=${API_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        instances: [{ prompt: prompt }],
                        parameters: { sampleCount: 1 }
                    })
                }
            );

            if (fallbackResponse.ok) {
                const data = await fallbackResponse.json();
                const base64Image = data.predictions?.[0]?.bytesBase64Encoded;
                if (base64Image) {
                    return base64ToBlob(base64Image);
                }
            }

            // If both fail, throw original error
            throw new Error(`Gemini 3 & Fallback Failed. Gemini 3 Error: ${text}`);
        }

        const data = await response.json();
        // Gemini 2.0 structure for images is slightly different (inlineData or similar)
        // Adjusting parsing based on standard Gemini 2.0 payload
        const part = data.candidates?.[0]?.content?.parts?.[0];
        if (!part || !part.inlineData) {
            console.error("Unexpected Gemini response:", data);
            throw new Error('No image data returned from Gemini 2.0');
        }

        return base64ToBlob(part.inlineData.data);

    } catch (error) {
        console.error("Gemini Image Gen Error:", error);
        throw error;
    }
};

const base64ToBlob = (base64: string) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'image/png' });
};
