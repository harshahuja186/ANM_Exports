"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const BirthdayPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [revealPhotos, setRevealPhotos] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  // Crazy effects
  const [explosion, setExplosion] = useState(false);
  const [screenShake, setScreenShake] = useState(false);
  const [fireworks, setFireworks] = useState([]);
  const [balloons, setBalloons] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [flashEffect, setFlashEffect] = useState(false);

  useEffect(() => {
    // Trigger animations
    setTimeout(() => setShowMessage(true), 500);
    setTimeout(() => setShowConfetti(true), 1000);

    // Generate initial confetti
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      color: ["#FF6B9D", "#C44569", "#FFC312", "#EE5A6F", "#FC427B"][
        Math.floor(Math.random() * 5)
      ],
    }));
    setConfettiPieces(pieces);
  }, []);

  const handleSurpriseClick = () => {
    // MASSIVE EXPLOSION SEQUENCE! 💥

    // 1. Flash effect
    setFlashEffect(true);
    setTimeout(() => setFlashEffect(false), 200);

    // 2. Screen shake
    setScreenShake(true);
    setTimeout(() => setScreenShake(false), 600);

    // 3. Explosion confetti burst (300 pieces!)
    setExplosion(true);
    const explosionPieces = Array.from({ length: 300 }, (_, i) => ({
      id: `explosion-${i}`,
      left: 50 + (Math.random() - 0.5) * 20,
      top: 50,
      angle: (i * 360) / 300,
      speed: 2 + Math.random() * 3,
      color: [
        "#FF6B9D",
        "#C44569",
        "#FFC312",
        "#EE5A6F",
        "#FC427B",
        "#9B59B6",
        "#3498DB",
      ][Math.floor(Math.random() * 7)],
    }));
    setConfettiPieces([...confettiPieces, ...explosionPieces]);

    // 4. Fireworks
    setTimeout(() => {
      const fireworksArray = Array.from({ length: 8 }, (_, i) => ({
        id: `firework-${i}`,
        left: 20 + i * 10,
        bottom: 20 + Math.random() * 30,
        delay: i * 0.2,
      }));
      setFireworks(fireworksArray);
    }, 300);

    // 5. Sparkles everywhere
    const sparklesArray = Array.from({ length: 50 }, (_, i) => ({
      id: `sparkle-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 1,
      size: 10 + Math.random() * 20,
    }));
    setSparkles(sparklesArray);

    // 6. Balloons floating up
    setTimeout(() => {
      const balloonsArray = Array.from({ length: 15 }, (_, i) => ({
        id: `balloon-${i}`,
        left: 10 + i * 6,
        delay: i * 0.1,
        color: ["#FF6B9D", "#C44569", "#FFC312", "#9B59B6", "#3498DB"][i % 5],
      }));
      setBalloons(balloonsArray);
    }, 400);

    // 7. Reveal photos dramatically
    setTimeout(() => setRevealPhotos(true), 800);

    // 8. Show final surprise message
    setTimeout(() => setShowSurprise(true), 2500);

    // 9. Clear some effects after animation
    setTimeout(() => {
      setExplosion(false);
      setSparkles([]);
    }, 3000);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center p-4 overflow-hidden relative ${
        screenShake ? "animate-shake" : ""
      }`}
    >
      {/* FLASH EFFECT */}
      {flashEffect && (
        <div className="fixed inset-0 bg-white z-50 animate-flash" />
      )}

      {/* Regular Confetti */}
      {showConfetti &&
        confettiPieces.slice(0, 50).map((piece) => (
          <div
            key={piece.id}
            className="absolute w-2 h-2 rounded-full animate-fall"
            style={{
              left: `${piece.left}%`,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              top: "-20px",
            }}
          />
        ))}

      {/* EXPLOSION CONFETTI */}
      {explosion &&
        confettiPieces.slice(50).map((piece) => (
          <div
            key={piece.id}
            className="absolute w-3 h-3 rounded-full animate-explode"
            style={{
              left: `${piece.left}%`,
              top: `${piece.top}%`,
              backgroundColor: piece.color,
              "--angle": `${piece.angle}deg`,
              "--speed": piece.speed,
            }}
          />
        ))}

      {/* FIREWORKS */}
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute animate-firework"
          style={{
            left: `${firework.left}%`,
            bottom: `${firework.bottom}%`,
            animationDelay: `${firework.delay}s`,
          }}
        >
          <div className="text-6xl">🎆</div>
        </div>
      ))}

      {/* SPARKLES */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            fontSize: `${sparkle.size}px`,
          }}
        >
          ✨
        </div>
      ))}

      {/* BALLOONS */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 animate-float-up text-5xl"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
          }}
        >
          🎈
        </div>
      ))}

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Main content */}
      <div
        className={`max-w-5xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 transform transition-all duration-1000 ${
          showMessage ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Header with animated text */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 animate-bounce-slow">
            Simran! 🎉
          </h2>
        </div>

        {/* Birthday cake animation */}
        <div className="flex justify-center mb-8">
          <div className="text-8xl animate-pulse">🎂</div>
        </div>

        {/* Birthday message */}
        <div className="space-y-6 text-center text-gray-700 mb-10">
          <p
            className="text-xl md:text-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Wishing you a day filled with love, laughter, and endless joy! 🌟
          </p>

          <p
            className="text-lg md:text-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            May this special day bring you all the happiness you deserve and the
            year ahead be filled with amazing adventures! 🎈
          </p>
        </div>

        {/* Special surprise button - Shows BEFORE photos */}
        {!revealPhotos && (
          <div
            className="text-center mb-8 animate-fade-in-up"
            style={{ animationDelay: "1.5s" }}
          >
            <button
              onClick={handleSurpriseClick}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow relative overflow-hidden group"
            >
              <span className="relative z-10">
                Click for a Special Surprise! 🎁
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>
          </div>
        )}

        {/* Photo Gallery Section - Polaroid Style - Shows AFTER button click */}
        {revealPhotos && (
          <div className="mb-10 animate-dramatic-entrance">
            <h3 className="text-3xl font-bold text-center mb-8 text-purple-600 animate-zoom-in">
              Capturing Beautiful Moments 📸
            </h3>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* Photo 1 - Polaroid style */}
              <div className="polaroid rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-left">
                <div className="relative w-64 h-80 bg-white p-4 shadow-xl">
                  <div className="relative w-full h-56 bg-gray-200 mb-4 overflow-hidden">
                    <Image
                      src="/sim1.png"
                      alt="Memory 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center font-handwriting text-lg text-gray-700">
                    Great times! ✨
                  </p>
                </div>
              </div>

              {/* Photo 3 - Polaroid style */}
              <div
                className="polaroid rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative w-64 h-80 bg-white p-4 shadow-xl">
                  <div className="relative w-full h-56 bg-gray-200 mb-4 overflow-hidden">
                    <Image
                      src="/sim4.png"
                      alt="Memory 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center font-handwriting text-lg text-gray-700">
                    Cherished moments! ❤️
                  </p>
                </div>
              </div>

              {/* Photo 2 - Polaroid style */}
              <div
                className="polaroid rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="relative w-64 h-80 bg-white p-4 shadow-xl">
                  <div className="relative w-full h-56 bg-gray-200 mb-4 overflow-hidden">
                    <Image
                      src="/sim2.png"
                      alt="Memory 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center font-handwriting text-lg text-gray-700">
                    Unforgettable! 💫
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Surprise message - Shows AFTER photos */}
        {showSurprise && (
          <div className="text-center space-y-6 mb-8 animate-zoom-in">
            <div className="text-6xl mb-4">🎊🎉🎊</div>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              You're absolutely amazing, Simran!
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Thank you for being such a wonderful friend! Here's to more
              incredible memories together! 🌟
            </p>
            <div className="flex justify-center gap-4 text-4xl">
              <span className="animate-bounce" style={{ animationDelay: "0s" }}>
                🥳
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                💝
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                🎂
              </span>
            </div>
          </div>
        )}

        {/* Final message */}
        <div
          className="pt-6 text-center animate-fade-in-up"
          style={{ animationDelay: "1.5s" }}
        >
          <p className="text-2xl font-semibold text-purple-600 mb-4">
            Here's to another wonderful year! 🥳
          </p>
          <p className="text-lg text-gray-600">
            Hope your birthday is as special as you are! ✨
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-6 mt-10 text-5xl">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>
            🎁
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            🎊
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            🎉
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
            🎈
          </span>
        </div>

        {/* Footer message */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 italic">
            Made with 💝 just for you!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes explode {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(
                calc(cos(var(--angle)) * calc(var(--speed) * 100vh)),
                calc(sin(var(--angle)) * calc(var(--speed) * 100vh))
              )
              rotate(720deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-10px) rotate(-1deg);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(10px) rotate(1deg);
          }
        }

        @keyframes flash {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes firework {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) scale(2);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(20deg);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes dramatic-entrance {
          0% {
            opacity: 0;
            transform: scale(0.3) rotateY(90deg);
          }
          50% {
            transform: scale(1.1) rotateY(-10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-200px) rotate(-45deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(-3deg) scale(1);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(200px) rotate(45deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(3deg) scale(1);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(200px) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-explode {
          animation: explode 2s ease-out forwards;
        }

        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }

        .animate-flash {
          animation: flash 0.2s ease-out;
        }

        .animate-firework {
          animation: firework 1.5s ease-out forwards;
        }

        .animate-sparkle {
          animation: sparkle 1s ease-out forwards;
        }

        .animate-float-up {
          animation: float-up 4s ease-out forwards;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-zoom-in {
          animation: zoom-in 0.6s ease-out forwards;
        }

        .animate-dramatic-entrance {
          animation: dramatic-entrance 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .polaroid {
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
        }

        .font-handwriting {
          font-family: "Brush Script MT", cursive;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default BirthdayPage;
