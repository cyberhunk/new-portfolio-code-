import React, { useState, useEffect } from 'react';
import './LoadingScreen.scss';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onLoadingComplete();
                    }, 500); // Wait a bit before hiding loading screen
                    return 100;
                }
                return prev + 1;
            });
        }, 30); // Adjust speed as needed (30ms = ~3 seconds total)

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <h1 className="welcome-text">Welcome to my Profile</h1>
                <div className="loading-bar-container">
                    <div className="loading-bar">
                        <div
                            className="loading-progress"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="loading-percentage">{progress}%</div>
                </div>
                <div className="loading-text">Loading...</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
