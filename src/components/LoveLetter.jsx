import React, { useState, useRef, useEffect } from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

function WishesTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current, 
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current,
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
          Semoga langkahmu selalu ditemani takdir yang bersahabat dan harapan yang tak pernah lelah berjalan.
        </p>
        <span style={{
          position: 'absolute', bottom: -20, right: 16, fontSize: '1.5rem', 
          color: 'var(--pink-soft)', fontFamily: 'serif', lineHeight: 1
        }}>”</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          <span>Setelah 18 tahun ini, lu harus <b>lebih bahagia</b> yaa!! 🥳</span>,
          <span>Tetep jadi <b>Melodi penenang</b> di hiruk pikuk hidup orang-orang yang sayang sama lu 🎵</span>,
          <span><b>JANJI kita kuliah di UI bareng</b> — ga ada alasan batal! 🤍</span>,
          <span>Kapanpun lu butuh gua, <b>langsung hubungin aja</b>. Gua selalu ada buat lu, Mel 💕</span>
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
    { id: 'reasons', label: '✨ 3 Hal' },
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
          }}>Surat Rahasia Untuk Mell</h2>
          <p style={{
            fontFamily: 'var(--font-cute)', fontSize: '0.82rem', color: 'var(--pink-deep)', fontWeight: 600,
          }}>From: ritsukikk ✨</p>

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
            }}>Happy B-Day Modiii! 🎉</h1>
            <p style={{
              fontFamily: 'var(--font-cute)', fontSize: '0.78rem', color: 'var(--rose-gold)', fontWeight: 600,
            }}>sayangku, cintakuu, cantikkuu 😍🤍</p>
          </div>

          {/* Tabs */}
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

          {/* Tab: Surat */}
          {tab === 'letter' && (
            <div style={{
              background: 'var(--pink-whisper)', padding: '18px 16px', borderRadius: 18,
              border: '1px solid rgba(212,69,108,0.1)', lineHeight: 1.7,
              fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--berry)',
              maxHeight: '45vh', overflowY: 'auto',
            }}>
              {/* Photo inside letter */}
              <div style={{
                float: 'right', width: 85, height: 85, marginLeft: 12, marginBottom: 8,
                borderRadius: 14, overflow: 'hidden', border: '3px solid #fff',
                boxShadow: '0 4px 14px rgba(212,69,108,0.15)',
                transform: 'rotate(3deg)',
              }}>
                <img src="/gambar4.jpeg" alt="Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/bestie1.jpg'; }} />
              </div>

              <p style={{ marginBottom: 10 }}><b>HAPPY B DAYY MODIII SAYANGKU, CINTAKUU, CANTIKKUU 😍🤍</b></p>

              <p style={{ marginBottom: 10 }}>
                Aduh my princess udah makin tua, nanti gua manggilnya bukan princess
                (udah lama ga manggil gini, sibuk pacaran sih lu 😤) tapi <b>MY QUEEN</b>.
              </p>

              <p style={{ marginBottom: 10 }}>
                Makasii ya udah selalu dengerin gua yapping dan lu selalu ngasih respon yang baikkk banget 🥺
              </p>

              <p style={{ marginBottom: 10 }}>
                Mel... mungkin suatu saat gua ga selamanya bisa di samping lu, mungkin nanti juga gua ga bakal tau
                fase apa yang lagi lu lewatin. Tapi kapanpun lu butuh gua.... langsung hubungin aja ya mell??
                <b> JANJI YAAA!</b>
              </p>

              <p style={{
                marginBottom: 10, fontStyle: 'italic', color: 'var(--pink-deep)', fontWeight: 600,
                padding: '8px 12px', background: 'rgba(212,69,108,0.06)', borderRadius: 10, borderLeft: '3px solid var(--pink-deep)',
              }}>
                "Even when the world is not on your side, I will always be on your side."
              </p>

              <p style={{ marginBottom: 10 }}>
                Ga kerasa kita udah jadi agit yaa, tahun depan udah kuliah dehh....
              </p>

              <p style={{ marginBottom: 10 }}>
                Makasih yaa mel?? Selama ini kehadiran lu bener-bener kayak jadi <b>secercah cahaya</b> di hidup gua
                (aduh nangis deh ngetiknya 🥹), lu ga pernah ngejudge gua tapi kalo gua salah juga lu pasti
                ngingetin, gua harap kedepannya kita tetep bisa saling komunikasi yaa?? Tetep maen bareng yaa??
              </p>

              <p style={{ marginBottom: 10, fontSize: '0.82rem', color: 'var(--berry-light)' }}>
                (PLS GUA GATAU GIMANA CARANYA IDUP TANPA LU SEKARANG.. 😭)
              </p>

              <p style={{ marginBottom: 10 }}>
                Mel, lu itu kayaknya jawaban dari doa-doa gua pas kecil dehh AHAHA
                (as anak tunggal yg gapunya temen maen, kakak) tapi di lu semuanya ada.
                Mungkin lu juga <b>hadiah dari Allah</b> ya buat gua?? 💕
              </p>

              <p style={{ marginBottom: 10 }}>
                Makasih ya mell udah lahir di dunia ini dan milih gua sebagai salah satu orang terdekat lu
                (bener ga? apa gua yg kepedean 😂), kalo bisa milih kayaknya di setiap kesempatan
                gua bakal selalu milih lu mel, <b>lu bener-bener berharga buat gua</b>.
              </p>

              <p style={{ marginBottom: 10 }}>
                So pleasee setelah ulang tahun lu yang ke-18 ini lu harus lebih bahagia yaa??
                Tetep jadi <b>Melodi yang selalu jadi melodi penenang</b> di hiruk pikuk hidup gua ya..?
              </p>

              <p style={{
                marginBottom: 10, fontStyle: 'italic', color: 'var(--pink-deep)', fontWeight: 600, fontSize: '0.82rem',
              }}>
                And please don't ever become a stranger who's laugh I could recognize anywhere...
              </p>

              <p style={{ marginBottom: 10, fontWeight: 700, color: 'var(--pink-deep)' }}>
                POKOKNYA JANJI YAA KITA KULIAH DI UI BARENG 🤍
              </p>

              <p style={{
                textAlign: 'right', fontWeight: 700, color: 'var(--pink-deep)',
                marginTop: 16, fontSize: '0.9rem', clear: 'both',
              }}>
                Love u modii 💗<br />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>— ritsukikk</span>
              </p>
            </div>
          )}

          {/* Tab: 3 Hal Terbaik */}
          {tab === 'reasons' && (
            <div style={{
              background: 'var(--pink-whisper)', borderRadius: 20,
              border: '1px solid rgba(212,69,108,0.15)',
              padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 16,
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5)',
            }}>
              {[
                {
                  icon: '🎧',
                  title: 'Pendengar Terbaik',
                  text: 'Lu selalu dengerin gua yapping dan selalu ngasih respon yang baikkk banget. Ga pernah nge-judge, tapi kalo gua salah lu pasti ngingetin.',
                },
                {
                  icon: '✨',
                  title: 'Cahaya di Hidup Gua',
                  text: 'Kehadiran lu bener-bener kayak jadi secercah cahaya di hidup gua. Lu bikin hari-hari gua jadi lebih berwarna dan bermakna.',
                },
                {
                  icon: '🤲',
                  title: 'Jawaban Doa Gua',
                  text: 'Lu kayak jawaban dari doa gua pas kecil. As anak tunggal, di lu semuanya ada. Lu bener-bener hadiah dari Allah buat gua.',
                },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36, flexShrink: 0, borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(212,69,108,0.1), rgba(232,213,245,0.2))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid rgba(212,69,108,0.2)', fontSize: '1.1rem',
                      boxShadow: '0 2px 8px rgba(212,69,108,0.08)'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-display)', color: 'var(--pink-deep)',
                        fontSize: '1.25rem', marginBottom: 4, lineHeight: 1.1,
                      }}>{item.title}</h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--berry)', lineHeight: 1.55 }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                  {i < 2 && (
                    <div style={{
                      height: 1, width: '70%', margin: '14px auto 0',
                      background: 'linear-gradient(90deg, transparent, rgba(212,69,108,0.15), transparent)'
                    }} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab: Doa & Harapan */}
          {tab === 'wishes' && <WishesTab />}

          {/* CTA */}
          <button className="btn-primary" onClick={onNext} style={{ width: '100%', marginTop: 20 }}>
            Lanjut Tiup Lilin! 🎂 <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
