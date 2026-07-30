import React, { useState, useRef, useEffect } from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

// ─── 💌 Tab 1: Surat Content ───
function LetterTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.96, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.45, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      background: 'var(--pink-whisper)', padding: '20px 16px', borderRadius: 20,
      border: '1px solid rgba(212,69,108,0.12)', lineHeight: 1.7,
      fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--berry)',
      maxHeight: '45vh', overflowY: 'auto',
      boxShadow: '0 8px 32px rgba(212,69,108,0.06), inset 0 0 20px rgba(255,255,255,0.7)',
    }}>
      {/* Photo inside letter */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        float: 'right', width: 85, height: 85, marginLeft: 12, marginBottom: 8,
        borderRadius: 14, overflow: 'hidden', border: '3px solid #fff',
        boxShadow: '0 4px 14px rgba(212,69,108,0.15)',
        transform: 'rotate(3deg)',
      }}>
        <img src="/gambar 2.jpeg" alt="Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { e.target.src = '/bestie1.jpg'; }} />
      </div>

      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14 }}>
        <b>Selamat ulang tahun, Wulan.</b>
      </p>

      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14 }}>
        Aku tidak pandai merangkai kata, tapi aku ingin kamu tahu —
        kehadiranmu di hidupku adalah hal terbaik yang pernah terjadi.
        Setiap hari bersamamu terasa lebih bermakna dari yang bisa aku jelaskan.
      </p>

      <p ref={(el) => itemsRef.current.push(el)} style={{
        marginBottom: 20,
        fontFamily: 'var(--font-display)',
        fontSize: '1.15rem',
        fontStyle: 'italic',
        color: 'var(--berry)',
        lineHeight: 1.6,
        textAlign: 'center',
        padding: '10px 0',
        letterSpacing: '0.01em',
      }}>
        "Kamu bukan cuma seseorang di hidupku. Kamu adalah alasan kenapa aku ingin jadi versi terbaik dari diriku."
      </p>

      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14 }}>
        Semoga di tahun ini kamu mendapatkan semua kebahagiaan yang kamu layak terima.
        Dan aku berjanji, aku akan selalu ada — di hari-hari indah maupun di hari-hari yang berat.
      </p>

      <p ref={(el) => itemsRef.current.push(el)} style={{
        textAlign: 'right', fontWeight: 600, color: 'var(--pink-deep)',
        marginTop: 20, fontSize: '0.88rem', clear: 'both',
      }}>
        Selalu mencintaimu,<br />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>— kekasihmu 🌹</span>
      </p>
    </div>
  );
}

// ─── ✨ Tab 2: Impian Bersama Content ───
function ImpianTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 18 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, y: 25, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.14, duration: 0.55, ease: 'back.out(1.4)' },
      "-=0.25"
    );
  }, []);

  const dreams = [
    {
      icon: '🌱',
      badge: 'IMPIAN 01',
      title: 'Tumbuh Bersama',
      text: 'Aku ingin kita terus melangkah dan belajar bersama. Melewati setiap proses hidup, merayakan setiap pencapaian kecil, dan saling mendukung di setiap keadaan.',
      gradient: 'linear-gradient(135deg, rgba(212,69,108,0.12), rgba(232,213,245,0.25))',
    },
    {
      icon: '🌅',
      badge: 'IMPIAN 02',
      title: 'Banyak Kenangan Baru',
      text: 'Aku ingin mendatangi tempat-tempat baru bersamamu, mengabadikan lebih banyak momen indah, dan tertawa lepas tanpa beban di sampingmu.',
      gradient: 'linear-gradient(135deg, rgba(248,164,190,0.15), rgba(255,232,238,0.3))',
    },
    {
      icon: '🏡',
      badge: 'IMPIAN 03',
      title: 'Rumah Tempat Kembali',
      text: 'Aku ingin selalu menjadi tempat terbaikmu untuk pulang. Apapun yang terjadi di luar sana, aku ingin kamu selalu merasa aman dan tenang bersamaku.',
      gradient: 'linear-gradient(135deg, rgba(212,69,108,0.1), rgba(255,245,248,0.4))',
    },
  ];

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(150deg, #ffffff 0%, var(--pink-whisper) 100%)',
      borderRadius: 22, border: '1px solid rgba(212,69,108,0.15)',
      padding: '22px 18px', display: 'flex', flexDirection: 'column', gap: 14,
      boxShadow: '0 10px 32px rgba(212,69,108,0.08), inset 0 0 20px rgba(255,255,255,0.7)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 4 }}>
        <Sparkles size={20} color="var(--gold-accent)" style={{ marginBottom: 4 }} />
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--pink-deep)',
          lineHeight: 1.2
        }}>Impian Bersama 💫</h4>
        <p style={{
          fontFamily: 'var(--font-cute)', fontSize: '0.78rem', color: 'var(--rose-gold)',
          fontWeight: 600, marginTop: 2
        }}>3 harapan sederhana untuk melangkah denganku</p>
      </div>

      {dreams.map((item, i) => (
        <div
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          style={{
            background: '#ffffff',
            borderRadius: 18,
            padding: '16px 16px',
            border: '1.5px solid rgba(212,69,108,0.12)',
            boxShadow: '0 4px 18px rgba(212,69,108,0.06)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
            cursor: 'pointer',
          }}
          onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
          onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          {/* Subtle Accent Glow */}
          <div style={{
            position: 'absolute', top: -15, right: -15, width: 70, height: 70,
            borderRadius: '50%', background: item.gradient, filter: 'blur(10px)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            {/* Animated Icon Badge */}
            <div style={{
              width: 44, height: 44, flexShrink: 0, borderRadius: 14,
              background: item.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(212,69,108,0.2)', fontSize: '1.3rem',
              boxShadow: '0 4px 12px rgba(212,69,108,0.12)'
            }}>
              {item.icon}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase',
                letterSpacing: 1.2, color: 'var(--pink-deep)', opacity: 0.8,
                marginBottom: 2
              }}>
                {item.badge}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-display)', color: 'var(--berry)',
                fontSize: '1.2rem', marginBottom: 4, lineHeight: 1.25,
              }}>{item.title}</h4>
              <p style={{ fontSize: '0.79rem', color: 'var(--berry-light)', lineHeight: 1.55, fontWeight: 400 }}>
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 🎁 Tab 3: Doa & Harapan Content ───
function WishesTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.5, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(145deg, #ffffff, var(--pink-whisper))',
      padding: '24px 20px', borderRadius: 20,
      border: '1px solid rgba(212,69,108,0.15)',
      boxShadow: '0 8px 32px rgba(212,69,108,0.08), inset 0 0 20px rgba(255,255,255,0.7)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Sparkles size={20} color="var(--gold-accent)" style={{ marginBottom: 6 }} />
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--pink-deep)',
          lineHeight: 1.2
        }}>Harapan Untukmu ✨</h4>
      </div>

      {/* Main Quote */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        position: 'relative', padding: '16px 20px', borderRadius: 16, marginBottom: 20,
        background: 'rgba(212,69,108,0.03)', border: '1px dashed rgba(212,69,108,0.2)',
        textAlign: 'center',
      }}>
        <span style={{
          position: 'absolute', top: -10, left: 16, fontSize: '1.5rem', 
          color: 'var(--pink-soft)', fontFamily: 'serif', lineHeight: 1
        }}>“</span>
        <p style={{
          fontFamily: 'var(--font-cute)', fontSize: '0.95rem',
          color: 'var(--berry)', lineHeight: 1.6, fontWeight: 600, fontStyle: 'italic'
        }}>
          Semoga setiap langkahmu selalu dipenuhi kebahagiaan, dan aku bersyukur bisa menjadi bagian dari perjalanan hidupmu.
        </p>
        <span style={{
          position: 'absolute', bottom: -20, right: 16, fontSize: '1.5rem', 
          color: 'var(--pink-soft)', fontFamily: 'serif', lineHeight: 1
        }}>”</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          <span>Semoga di usia yang baru ini, kamu <b>makin bahagia</b> dan makin bersinar dari dalam 🤍</span>,
          <span>Tetap jadi <b>Wulan yang selalu bikin aku jatuh cinta setiap harinya</b> — kamu ga perlu berubah jadi siapapun 🌸</span>,
          <span><b>Apapun yang kamu impikan</b> — aku akan selalu ada di sampingmu, mendukungmu, dan mendoakan yang terbaik untukmu 🤍</span>,
          <span>Kamu adalah <b>alasan aku percaya</b> bahwa hal-hal indah memang ada di dunia ini 💗</span>
        ].map((item, i) => (
          <div key={i} ref={(el) => itemsRef.current.push(el)} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '10px 14px', background: '#fff', borderRadius: 12,
            boxShadow: '0 2px 10px rgba(212,69,108,0.04)'
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, var(--pink-soft), var(--pink-mid))',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-display)',
              marginTop: 2
            }}>{i + 1}</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--berry)', lineHeight: 1.5, flex: 1 }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 📜 Main LoveLetter Component ───
export default function LoveLetter({ onNext }) {
  const [opened, setOpened] = useState(false);
  const [tab, setTab] = useState('letter');
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const sealRef = useRef(null);

  useEffect(() => {
    if (!opened) {
      gsap.fromTo(envelopeRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.4)' }
      );
    } else {
      if (letterRef.current) {
        gsap.fromTo(letterRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.3)' }
        );
      }
    }
  }, [opened]);

  const open = () => {
    if (opened) return;
    const tl = gsap.timeline();
    tl.to(sealRef.current, { scale: 1.3, opacity: 0, duration: 0.3, ease: 'power2.in' });
    tl.to(envelopeRef.current, { y: 60, opacity: 0, scale: 0.9, duration: 0.4, ease: 'power2.in',
      onComplete: () => setOpened(true)
    });
  };

  const tabs = [
    { id: 'letter', label: '💌 Surat' },
    { id: 'reasons', label: '✨ Impian' },
    { id: 'wishes', label: '🎁 Doa' },
  ];

  return (
    <div className="stage">
      {/* === Sealed Envelope === */}
      {!opened && (
        <div ref={envelopeRef} onClick={open} className="glass" style={{
          width: '100%', maxWidth: '340px', padding: '40px 24px', textAlign: 'center',
          cursor: 'pointer', opacity: 0, position: 'relative',
          background: 'linear-gradient(160deg, #fff5f8 0%, #ffe8ee 100%)',
          border: '1.5px solid rgba(212,69,108,0.25)',
          boxShadow: '0 16px 48px rgba(212,69,108,0.18)',
        }}>
          {/* Postage Stamp */}
          <div style={{
            position: 'absolute', top: 14, right: 14, width: 36, height: 42,
            border: '2px dashed var(--pink-soft)', borderRadius: 5,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', opacity: 0.7,
          }}>🎂</div>

          {/* Floral Decoration */}
          <img src="/bunga1.png" alt="Flower" style={{
            position: 'absolute', bottom: -20, right: -20, width: 110,
            transform: 'rotate(-15deg)', zIndex: 10, pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 12px rgba(212,69,108,0.3))'
          }} onError={(e) => e.target.style.display = 'none'} />

          {/* Wax Seal */}
          <div ref={sealRef} className="anim-breathe" style={{
            width: 68, height: 68, borderRadius: '50%', margin: '0 auto 20px',
            background: 'radial-gradient(circle at 40% 35%, #e84d6e 0%, #a1112c 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 24px rgba(212,69,108,0.45), inset 0 -2px 6px rgba(0,0,0,0.2)',
            border: '3px solid rgba(255,183,197,0.6)',
          }}>
            <Heart size={32} fill="#fff" color="#fff" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--berry)', marginBottom: 6,
          }}>Surat Rahasia Untuk Wulan</h2>
          <p style={{
            fontFamily: 'var(--font-cute)', fontSize: '0.82rem', color: 'var(--pink-deep)', fontWeight: 600,
          }}>Untuk Wulan tersayang 💖</p>

          <div style={{
            marginTop: 24, fontSize: '0.75rem', fontWeight: 700,
            background: 'rgba(212,69,108,0.08)', color: 'var(--pink-deep)',
            padding: '8px 16px', borderRadius: 20, display: 'inline-block',
          }}>
            👆 Ketuk untuk membuka
          </div>
        </div>
      )}

      {/* === Opened Letter === */}
      {opened && (
        <div ref={letterRef} className="glass" style={{
          width: '100%', maxWidth: '380px', padding: '26px 20px', opacity: 0,
          background: 'linear-gradient(180deg, #ffffff 0%, #fff5f8 100%)',
          border: '1.5px solid rgba(212,69,108,0.2)',
          boxShadow: '0 16px 48px rgba(212,69,108,0.15)',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--pink-deep)',
              lineHeight: 1.15, marginBottom: 4,
            }}>Selamat Ulang Tahun, Wulan.</h1>
            <p style={{
              fontFamily: 'var(--font-cute)', fontSize: '0.78rem', color: 'var(--rose-gold)', fontWeight: 600,
            }}>dari seseorang yang selalu merindukanmu 🤍</p>
          </div>

          {/* Tabs Navigation */}
          <div style={{
            display: 'flex', background: 'rgba(252,228,236,0.5)', padding: 3,
            borderRadius: 14, marginBottom: 16, gap: 2,
          }}>
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                flex: 1, padding: '9px 4px', borderRadius: 11, border: 'none',
                background: tab === t.id ? 'linear-gradient(135deg, var(--pink-deep), var(--pink-mid))' : 'transparent',
                color: tab === t.id ? '#fff' : 'var(--berry-light)',
                fontFamily: 'var(--font-cute)', fontSize: '0.74rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}>{t.label}</button>
            ))}
          </div>

          {/* Render Tab with Individual GSAP Motion */}
          {tab === 'letter' && <LetterTab />}
          {tab === 'reasons' && <ImpianTab />}
          {tab === 'wishes' && <WishesTab />}

          {/* CTA Button */}
          <button className="btn-primary" onClick={onNext} style={{ width: '100%', marginTop: 20 }}>
            Lanjut Tiup Lilin! 🎂 <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
