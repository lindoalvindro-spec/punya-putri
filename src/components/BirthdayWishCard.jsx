import React, { useRef, useEffect } from 'react';
import { Download, RotateCcw, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';

export default function BirthdayWishCard({ onRestart }) {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    // Main card entry (slow slide up and elegant fade)
    tl.fromTo(cardRef.current,
      { opacity: 0, y: 50, rotation: 2 },
      { opacity: 1, y: 0, rotation: 0, duration: 1, ease: 'power3.out' }
    );
    
    // Staggered reveal of internal content
    tl.fromTo('.reveal-el', 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out' },
      "-=0.4"
    );

    // Subtle glowing frame pulse
    tl.fromTo(frameRef.current,
      { boxShadow: '0 10px 30px rgba(212,69,108,0.05)' },
      { boxShadow: '0 20px 50px rgba(212,69,108,0.15)', duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1 },
      0.5
    );

    // Confetti pop
    setTimeout(() => {
      confetti({
        particleCount: 80, spread: 100, origin: { y: 0.55 },
        colors: ['#d4456c', '#f06292', '#f8a4be', '#ffffff', '#ffd700'],
        gravity: 0.7, scalar: 0.9,
      });
    }, 1000);
  }, []);

  return (
    <div className="stage stage--scroll">
      <div ref={cardRef} style={{
        width: '100%', maxWidth: 380, opacity: 0, position: 'relative',
      }}>
        {/* Main Elegant Card Frame */}
        <div ref={frameRef} style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #fcf7f9 100%)',
          borderRadius: 24, padding: '14px',
          border: '1px solid rgba(212,69,108,0.1)',
          position: 'relative', marginBottom: 24
        }}>
          {/* Inner Border (Classic Invitation Style) */}
          <div style={{
            border: '1px solid rgba(212,69,108,0.15)', borderRadius: 16,
            padding: '36px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden'
          }}>
            
            {/* Top Decoration */}
            <div className="reveal-el" style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
              <Sparkles size={20} color="var(--gold-accent)" />
            </div>

            {/* Circular Photo Container */}
            <div className="reveal-el" style={{
              width: 150, height: 150, margin: '0 auto 24px', borderRadius: '50%',
              overflow: 'hidden', border: '5px solid #fff',
              boxShadow: '0 12px 32px rgba(212,69,108,0.15)'
            }}>
              <img src="/gambar5.jpeg" alt="Modi & Ritsukikk" style={{
                width: '100%', height: '100%', objectFit: 'cover'
              }} onError={(e) => { e.target.src = '/bestie2.jpg'; }} />
            </div>

            {/* Typography Section */}
            <h3 className="reveal-el" style={{
              fontFamily: 'var(--font-cute)', fontSize: '0.85rem', color: 'var(--rose-gold)',
              letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 8, fontWeight: 700
            }}>
              Happy 18th Birthday
            </h3>
            <h1 className="reveal-el" style={{
              fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'var(--berry)',
              lineHeight: 1, marginBottom: 24
            }}>
              Melodi
            </h1>

            {/* Delicate Divider */}
            <div className="reveal-el" style={{
              width: 50, height: 1, background: 'var(--pink-deep)', margin: '0 auto 24px', opacity: 0.25
            }} />

            {/* Core Message */}
            <p className="reveal-el" style={{
              fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--berry-light)',
              lineHeight: 1.7, marginBottom: 30, fontStyle: 'italic', padding: '0 10px'
            }}>
              "Semoga langkahmu selalu ditemani takdir yang bersahabat dan harapan yang tak pernah lelah berjalan. Tetaplah menjadi melodi penenang di hiruk pikuk hidup gua ya."
            </p>

            {/* Sign Off */}
            <div className="reveal-el" style={{ marginBottom: 30 }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--rose-gold)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>
                With all my love
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--pink-deep)' }}>
                ritsukikk 🤍
              </p>
            </div>

            {/* Promise Badge */}
            <div className="reveal-el" style={{
              display: 'inline-block', padding: '8px 18px', borderRadius: 20,
              background: 'rgba(212,69,108,0.04)', border: '1px solid rgba(212,69,108,0.1)',
              fontSize: '0.7rem', color: 'var(--pink-deep)', fontWeight: 700, letterSpacing: 1
            }}>
              JANJI KULIAH DI UI BARENG! ✨
            </div>
            
            {/* Floral Decor (Top Left Corner) */}
            <img src="/Untitled - July 29, 2026 at 22.02.49.png" alt="Decor" style={{
              position: 'absolute', top: -20, left: -10, width: 100,
              transform: 'rotate(-15deg)', opacity: 0.85, pointerEvents: 'none',
              filter: 'drop-shadow(0 4px 12px rgba(212,69,108,0.15))'
            }} onError={(e) => e.target.style.display = 'none'} />
          </div>
        </div>

        {/* Bottom Actions */}
        <div style={{
          textAlign: 'center', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 12, paddingBottom: 20
        }}>
          <p style={{
            fontSize: '0.75rem', color: 'var(--rose-gold)', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <Download size={14} /> Screenshot kartu ini & simpan ya!
          </p>

          <button className="btn-ghost" onClick={onRestart} style={{ 
            marginTop: 4, padding: '10px 20px', background: 'rgba(255,255,255,0.6)',
            borderRadius: 20, color: 'var(--berry)'
          }}>
            <RotateCcw size={14} /> Ulangi Kejutan dari Awal
          </button>
        </div>
      </div>
    </div>
  );
}
