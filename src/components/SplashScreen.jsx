import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function SplashScreen({ onStart }) {
  const containerRef = useRef(null);
  const photoRef = useRef(null);
  const overlayRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const btnRef = useRef(null);
  const lucu1Ref = useRef(null);
  const lucu2Ref = useRef(null);
  const sparklesRef = useRef([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const tl = gsap.timeline({ delay: 0.3 });

    // Photo zoom in slowly
    tl.fromTo(photoRef.current,
      { scale: 1.3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' }
    );

    // Overlay fade
    tl.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power1.in' },
      0.3
    );

    // Lucu images slide up and bounce
    tl.fromTo(lucu1Ref.current,
      { opacity: 0, y: 100, rotation: -20 },
      { opacity: 1, y: 0, rotation: -12, duration: 1.2, ease: 'elastic.out(1, 0.6)' },
      0.6
    );
    tl.fromTo(lucu2Ref.current,
      { opacity: 0, y: 100, rotation: 20 },
      { opacity: 1, y: 0, rotation: 12, duration: 1.2, ease: 'elastic.out(1, 0.6)' },
      0.8
    );

    // Line 1: letter by letter
    tl.fromTo(line1Ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      1.0
    );

    // Line 2
    tl.fromTo(line2Ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      1.6
    );

    // Line 3 (emoji)
    tl.fromTo(line3Ref.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)' },
      2.2
    );

    // Sparkles float in
    sparklesRef.current.forEach((el, i) => {
      if (el) {
        tl.fromTo(el,
          { opacity: 0, scale: 0, rotation: -90 },
          {
            opacity: 0.7, scale: 1, rotation: 0,
            duration: 0.6, ease: 'back.out(2)',
          },
          1.4 + i * 0.15
        );
        // Continuous float
        gsap.to(el, {
          y: `${-8 + Math.random() * 16}`,
          x: `${-5 + Math.random() * 10}`,
          duration: 2 + Math.random() * 2,
          repeat: -1, yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        });
      }
    });

    // Button
    tl.fromTo(btnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      2.8
    );
  }, []);

  const handleStart = () => {
    const tl = gsap.timeline();
    tl.to(containerRef.current, {
      scale: 1.05, opacity: 0,
      duration: 0.5, ease: 'power2.in',
      onComplete: onStart,
    });
  };

  const sparkleData = [
    { emoji: '✨', top: '12%', left: '8%', size: '1.4rem' },
    { emoji: '💕', top: '18%', right: '12%', size: '1.2rem' },
    { emoji: '🌸', top: '35%', left: '5%', size: '1.1rem' },
    { emoji: '⭐', top: '28%', right: '6%', size: '1rem' },
    { emoji: '💗', bottom: '32%', left: '10%', size: '1.3rem' },
    { emoji: '✿', bottom: '28%', right: '8%', size: '1.1rem' },
    { emoji: '🩷', top: '50%', left: '3%', size: '1rem' },
    { emoji: '♡', top: '45%', right: '4%', size: '1.2rem' },
  ];

  return (
    <div ref={containerRef} style={{
      position: 'relative', width: '100%', minHeight: '100dvh',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', overflow: 'hidden',
    }}>
      {/* Background Photo */}
      <img
        ref={photoRef}
        src="/gambar5.jpeg"
        alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0,
        }}
        onError={(e) => { e.target.src = '/bestie1.jpg'; }}
      />

      {/* Dark Gradient Overlay */}
      <div ref={overlayRef} style={{
        position: 'absolute', inset: 0, opacity: 0,
        background: 'linear-gradient(180deg, rgba(61,21,40,0.5) 0%, rgba(61,21,40,0.75) 50%, rgba(26,10,16,0.85) 100%)',
      }} />

      {/* Lucu Characters */}
      <img ref={lucu1Ref} src="/lucu1 no bg.png" alt="Lucu 1" style={{
        position: 'absolute', bottom: '15%', left: '-5%', width: 140, 
        zIndex: 2, pointerEvents: 'none', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
      }} />
      <img ref={lucu2Ref} src="/lucu 2 no bg.png" alt="Lucu 2" style={{
        position: 'absolute', bottom: '25%', right: '-5%', width: 130, 
        zIndex: 2, pointerEvents: 'none', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
      }} />

      {/* Floating Sparkles */}
      {sparkleData.map((s, i) => (
        <span
          key={i}
          ref={(el) => (sparklesRef.current[i] = el)}
          style={{
            position: 'absolute', fontSize: s.size, opacity: 0,
            top: s.top, left: s.left, right: s.right, bottom: s.bottom,
            pointerEvents: 'none', zIndex: 2,
            filter: 'drop-shadow(0 0 6px rgba(255,200,220,0.5))',
          }}
        >{s.emoji}</span>
      ))}

      {/* Center Text Content */}
      <div style={{
        position: 'relative', zIndex: 3, textAlign: 'center',
        padding: '0 30px', maxWidth: 340,
      }}>
        <p ref={line1Ref} style={{
          fontFamily: 'var(--font-cute)', fontSize: '0.9rem', fontWeight: 600,
          color: 'rgba(255,240,245,0.8)', letterSpacing: '2px', textTransform: 'uppercase',
          marginBottom: 8, opacity: 0,
        }}>
          Hai Mell, ada sesuatu...
        </p>

        <h1 ref={line2Ref} style={{
          fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: '#fff',
          lineHeight: 1.15, marginBottom: 10, opacity: 0,
          textShadow: '0 4px 20px rgba(212,69,108,0.5)',
        }}>
          Happy 18th Birthday, Melodi! 👑
        </h1>

        <p ref={line3Ref} style={{
          fontSize: '2rem', marginBottom: 36, opacity: 0,
        }}>
          🎂💕✨
        </p>

        <button
          ref={btnRef}
          onClick={handleStart}
          style={{
            opacity: 0, padding: '16px 36px', borderRadius: 60, border: 'none',
            background: 'linear-gradient(135deg, var(--pink-deep), var(--pink-mid))',
            color: '#fff', fontFamily: 'var(--font-cute)', fontSize: '1rem',
            fontWeight: 700, cursor: 'pointer', letterSpacing: '0.5px',
            boxShadow: '0 8px 30px rgba(212,69,108,0.5), 0 0 60px rgba(212,69,108,0.2)',
            transition: 'transform 0.2s ease',
          }}
          onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
          onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Buka Sekarang 💌
        </button>
      </div>
    </div>
  );
}
