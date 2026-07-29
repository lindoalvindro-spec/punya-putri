import React, { useState, useRef, useEffect } from 'react';
import { Flame, Camera } from 'lucide-react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';

export default function BirthdayCake({ onShowGallery }) {
  const [lit, setLit] = useState(true);
  const cardRef = useRef(null);
  const flamesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.4)' }
    );
  }, []);

  const blow = () => {
    if (!lit) return;

    // Animate each flame out
    flamesRef.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          scale: 0, opacity: 0, y: -10,
          duration: 0.3, delay: i * 0.1, ease: 'power2.in',
        });
      }
    });

    setTimeout(() => {
      setLit(false);
      // Fireworks burst
      const end = Date.now() + 1200;
      const colors = ['#d4456c', '#f06292', '#f8a4be', '#e8d5f5', '#d4a574', '#ffffff'];
      (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }, 400);
  };

  return (
    <div className="stage">
      <div ref={cardRef} className="glass" style={{
        width: '100%', maxWidth: '360px', padding: '30px 22px', textAlign: 'center', opacity: 0,
        background: 'linear-gradient(170deg, #fff8fa 0%, #ffe8ee 100%)',
        border: '1.5px solid rgba(212,69,108,0.2)',
        boxShadow: '0 16px 48px rgba(212,69,108,0.18)',
      }}>
        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--berry)', marginBottom: 4,
        }}>Make a Wish, Mell! ✨</h2>
        <p style={{
          fontFamily: 'var(--font-cute)', fontSize: '0.8rem', color: 'var(--pink-deep)',
          fontWeight: 600, marginBottom: 28, opacity: 0.85,
        }}>
          {lit ? 'Ketuk lilin untuk memadamkannya 🕯️' : 'Wish kamu pasti terwujud! 🎉'}
        </p>

        {/* === Cake Illustration === */}
        <div style={{
          position: 'relative', width: 240, height: 210, margin: '0 auto 28px',
        }}>
          {/* Candles with Flames */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 28,
            position: 'absolute', top: 0, width: '100%', zIndex: 5,
          }}>
            {[0, 1, 2].map((i) => (
              <div key={i} onClick={blow} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                cursor: lit ? 'pointer' : 'default',
              }}>
                {/* Flame */}
                <div ref={(el) => (flamesRef.current[i] = el)} style={{
                  height: 32, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                }}>
                  {lit ? (
                    <div className="anim-breathe" style={{
                      color: '#FF9800', filter: 'drop-shadow(0 0 8px #FFC107) drop-shadow(0 0 16px #FF980088)',
                    }}>
                      <Flame size={26} fill="#FFC107" />
                    </div>
                  ) : (
                    <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>💨</span>
                  )}
                </div>
                {/* Stick */}
                <div style={{
                  width: 7, height: 34, borderRadius: 4,
                  background: `linear-gradient(180deg, ${['#f06292', '#d4456c', '#f8a4be'][i]} 0%, #fff 100%)`,
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }} />
              </div>
            ))}
          </div>

          {/* Top Tier */}
          <div style={{
            position: 'absolute', top: 62, left: '50%', transform: 'translateX(-50%)',
            width: 165, height: 50, borderRadius: '18px 18px 8px 8px',
            background: 'linear-gradient(180deg, var(--pink-soft) 0%, var(--pink-mid) 100%)',
            boxShadow: 'inset 0 4px 10px rgba(255,255,255,0.5), 0 4px 14px rgba(212,69,108,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.85rem', letterSpacing: 6,
          }}>🍓🍓🍓</div>

          {/* Frosting drips */}
          <div style={{ position: 'absolute', top: 103, left: '50%', transform: 'translateX(-50%)', width: 165, display: 'flex', justifyContent: 'space-around' }}>
            {[18, 24, 16, 22, 20, 18, 24].map((h, i) => (
              <div key={i} style={{
                width: 10, height: h, borderRadius: '0 0 6px 6px',
                background: 'linear-gradient(180deg, var(--pink-mid), var(--pink-soft))',
                opacity: 0.7,
              }} />
            ))}
          </div>

          {/* Bottom Tier */}
          <div style={{
            position: 'absolute', top: 106, left: '50%', transform: 'translateX(-50%)',
            width: 210, height: 68, borderRadius: '22px 22px 14px 14px',
            background: 'linear-gradient(180deg, #fff0f5 0%, #ffe4e8 100%)',
            border: '2.5px solid var(--pink-soft)',
            boxShadow: '0 8px 24px rgba(212,69,108,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--pink-deep)',
            }}>Happy Birthday! 💕</span>
          </div>

          {/* Plate */}
          <div style={{
            position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: 240, height: 14, borderRadius: '0 0 50% 50% / 0 0 100% 100%',
            background: 'linear-gradient(180deg, #f5f0ee, #ece5e2)',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
          }} />
        </div>

        {/* CTA */}
        {lit ? (
          <button className="btn-primary" onClick={blow} style={{ width: '100%' }}>
            <Flame size={16} /> Tiup Lilin Sekarang!
          </button>
        ) : (
          <button className="btn-primary" onClick={onShowGallery} style={{ width: '100%' }}>
            Lihat Galeri Kenangan <Camera size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
