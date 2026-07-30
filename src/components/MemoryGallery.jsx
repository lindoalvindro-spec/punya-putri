import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function MemoryGallery({ onNext }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const containerRef = useRef(null);

  const photos = [
    '/gambar 2.jpeg',
    '/gambar 3.jpeg',
    '/gambar 4.jpeg',
    '/gambar 5.jpeg',
    '/gambar 6.jpeg',
    '/gambar 7.jpeg',
    '/gambar1.jpeg',
  ];

  useEffect(() => {
    // Elegant entrance animation
    const tl = gsap.timeline();
    tl.fromTo('.gallery-header', 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
    tl.fromTo('.gallery-frame', 
      { opacity: 0, scale: 0.98, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' },
      "-=0.4"
    );
    tl.fromTo('.gallery-controls',
      { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.2"
    );
  }, []);

  useEffect(() => {
    // Cinematic photo transition (Blur & Scale reveal)
    const photoEl = document.getElementById('gallery-photo');
    if (photoEl) {
      gsap.fromTo(photoEl,
        { opacity: 0, scale: 1.08, filter: 'blur(8px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' }
      );
      
      // Continuous slow zoom (Ken Burns)
      gsap.to(photoEl, {
        scale: 1.03,
        duration: 4.5,
        ease: 'none',
        delay: 1.5
      });
    }
  }, [idx]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % photos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stage stage--scroll" ref={containerRef}>
      {/* Flower Chain Decoration */}
      <img src="/Untitled - July 29, 2026 at 22.00.53.png" alt="Decoration" style={{
        width: '100%', maxWidth: 280, maxHeight: 160, objectFit: 'contain', 
        marginBottom: 4, marginTop: -20, opacity: 0.9, pointerEvents: 'none',
        filter: 'drop-shadow(0 4px 12px rgba(212,69,108,0.2))'
      }} onError={(e) => e.target.style.display = 'none'} />

      {/* Title */}
      <div className="gallery-header" style={{ textAlign: 'center', marginBottom: 26, width: '100%', maxWidth: 380, position: 'relative', zIndex: 2 }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '2.1rem', color: 'var(--pink-deep)',
          lineHeight: 1.15, marginBottom: 6, letterSpacing: '-0.5px'
        }}>Kenangan Kita ✨</h1>
        <p style={{
          fontFamily: 'var(--font-cute)', fontSize: '0.85rem', color: 'var(--rose-gold)', fontWeight: 600,
        }}>Setiap momen berharga bersamamu.</p>
      </div>

      {/* ─── Cinematic Photo Frame ─── */}
      <div className="gallery-frame" style={{
        width: '100%', maxWidth: 360, padding: 14, marginBottom: 28,
        background: '#ffffff', borderRadius: 24,
        boxShadow: '0 20px 50px rgba(212,69,108,0.12), 0 2px 10px rgba(212,69,108,0.04)',
      }}>
        <div style={{
          position: 'relative', width: '100%', aspectRatio: '3/4', 
          borderRadius: 16, overflow: 'hidden', background: 'var(--pink-whisper)',
        }}>
          <img
            id="gallery-photo"
            key={idx}
            src={photos[idx]}
            alt="Memory"
            style={{ 
              width: '100%', height: '100%', objectFit: 'cover',
              transformOrigin: 'center center'
            }}
            onError={(e) => { e.target.src = '/bestie1.jpg'; }}
          />
        </div>
      </div>

      {/* Gallery Controls (Dots) */}
      <div className="gallery-controls" style={{
        display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 30
      }}>
        {photos.map((_, i) => (
          <div key={i} onClick={() => setIdx(i)} style={{
            width: i === idx ? 24 : 8, height: 8, borderRadius: 4,
            background: i === idx ? 'var(--pink-deep)' : 'rgba(212,69,108,0.2)',
            transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)', cursor: 'pointer',
          }} />
        ))}
      </div>

      {/* Video Card (Kept minimal) */}
      <div className="gallery-controls mem-card" onClick={() => setVideoOpen(true)} style={{
        width: '100%', maxWidth: 360,
        background: 'linear-gradient(135deg, var(--pink-deep), var(--pink-mid))',
        padding: '18px 20px', borderRadius: 20, marginBottom: 24,
        boxShadow: '0 12px 32px rgba(212,69,108,0.25)', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
            Bonus 🎥
          </div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#fff', marginTop: 2 }}>
            Video Highlight
          </h4>
        </div>
        <div style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <Play size={20} fill="#fff" color="#fff" style={{ marginLeft: 3 }} />
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div onClick={() => setVideoOpen(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(26,10,16,0.95)', backdropFilter: 'blur(10px)',
          zIndex: 1000, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', padding: 20,
        }}>
          <div className="glass" onClick={(e) => e.stopPropagation()} style={{
            width: '90%', maxWidth: 380, padding: 20, textAlign: 'center', background: '#fff', borderRadius: 24
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--berry)', marginBottom: 14 }}>
              Video Player 🎥
            </h3>
            <div style={{
              width: '100%', borderRadius: 16, overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(212,69,108,0.2)'
            }}>
              <video 
                src="/WhatsApp Video 2026-07-29 at 17.38.52.mp4" 
                controls 
                autoPlay 
                playsInline
                style={{ width: '100%', display: 'block', maxHeight: '60vh', objectFit: 'contain', background: '#000' }}
              />
            </div>
            <button className="btn-ghost" onClick={() => setVideoOpen(false)} style={{ marginTop: 16, width: '100%' }}>
              Tutup Video
            </button>
          </div>
        </div>
      )}

      {/* Next: Birthday Wish Card */}
      <button className="gallery-controls btn-primary" onClick={onNext} style={{ width: '100%', maxWidth: 360 }}>
        Lanjut ke Kartu Ucapan 🎴 <ArrowRight size={16} />
      </button>
    </div>
  );
}
