
import React, { useState, useEffect } from 'react';
import './IntroScene.css';

const IntroScene = ({ onFinish }: { onFinish: () => void }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seenIntro = localStorage.getItem('hasSeenIntro');
    if (!seenIntro) {
      setShow(true);
    } else {
      onFinish();
    }
  }, [onFinish]);

  const handleBegin = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setShow(false);
    onFinish();
  };

  if (!show) return null;

  return (
    <div className="intro-scene background-misty text-white flex flex-col justify-center items-center p-8">
      <div className="mist" />
      <div className="max-w-2xl text-center z-10">
        <h1 className="text-4xl font-bold mb-6">The Realm of Auras</h1>
        <p className="mb-4">In a realm shaped by essence, only the chosen may wield the power of auras.</p>
        <p className="mb-4">Each roll reaches into the unknown — fortune, fate, or ruin awaits.</p>
        <p className="mb-6">The gauntlets await. The Codex is empty. Your legacy has yet to be written.</p>
        <button onClick={handleBegin} className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded text-lg">
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};

export default IntroScene;
