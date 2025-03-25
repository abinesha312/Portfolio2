// src/theme.js
export const theme = {
    colors: {
        primary: '#8A2BE2',        // Vibrant purple
        secondary: '#D4AF37',      // Shining gold
        background: '#0A0A1A',     // Very dark blue/black
        backgroundLight: '#1A1A2F', // Slightly lighter background
        text: '#FFFFFF',           // White text
        textMuted: '#AAAACC',      // Muted text
        accent: '#FF5555',         // Optional accent color
    },
    gradients: {
        purpleGold: 'linear-gradient(135deg, #8A2BE2 0%, #D4AF37 100%)',
        purpleDark: 'linear-gradient(135deg, #8A2BE2 0%, #4A1080 100%)',
    },
    shadows: {
        glow: '0 0 15px rgba(138, 43, 226, 0.5)',
        goldGlow: '0 0 10px rgba(212, 175, 55, 0.7)',
    }
};