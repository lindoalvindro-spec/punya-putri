import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc, X } from 'lucide-react';

export default function SpotifyPlayer() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const audioRef = useRef(null);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(e => console.log('Audio play error:', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  // Handle mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  const toggle = () => setPlaying(!playing);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      if (total) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (e) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newProgress = clickX / rect.width;
      audioRef.current.currentTime = newProgress * duration;
    }
  };

  const replay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (!playing) setPlaying(true);
    }
  };

  return (
    <div style={{
      position: 'fixed', bottom: 14, left: '50%', transform: 'translateX(-50%)',
      zIndex: 999, width: '90%', maxWidth: 410,
    }}>
      {/* Actual Audio Element */}
      <audio
        ref={audioRef}
        src="/Pasilyo_spotdown.org.mp3"
        preload="none"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setPlaying(false)}
      />

      {/* ── Mini Pill ── */}
      {!expanded && (
        <div onClick={() => setExpanded(true)} style={{
          padding: '10px 14px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 12,
          background: 'rgba(255,248,250,0.94)', backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(212,69,108,0.2)', borderRadius: 50,
          boxShadow: '0 8px 28px rgba(212,69,108,0.2)', cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, overflow: 'hidden', flex: 1 }}>
            {/* Vinyl mini */}
            <div className={`anim-spin ${!playing ? 'anim-spin-paused' : ''}`} style={{
              width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
              background: 'radial-gradient(circle, #1a0a10 32%, #333 33%, #1a0a10 56%, var(--pink-deep) 58%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            }}>
              <div style={{ width: 9, height: 9, background: 'var(--cream)', borderRadius: '50%' }} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{
                fontFamily: 'var(--font-cute)', fontSize: '0.82rem', fontWeight: 700,
                color: 'var(--berry)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>Pasilyo</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--pink-deep)', fontWeight: 600 }}>
                {playing ? '🎵 Now Playing' : '▶ Tap to Play'}
              </div>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); toggle(); }} style={{
            width: 34, height: 34, borderRadius: '50%', border: 'none', flexShrink: 0,
            background: 'linear-gradient(135deg, var(--pink-deep), var(--pink-mid))',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 3px 12px rgba(212,69,108,0.3)',
          }}>
            {playing ? <Pause size={15} /> : <Play size={15} style={{ marginLeft: 2 }} />}
          </button>
        </div>
      )}

      {/* ── Expanded Card ── */}
      {expanded && (
        <div style={{
          padding: '20px 18px',
          background: 'linear-gradient(155deg, rgba(255,248,250,0.97), rgba(255,232,238,0.98))',
          backdropFilter: 'blur(20px)', border: '1.5px solid rgba(212,69,108,0.2)',
          boxShadow: '0 16px 48px rgba(212,69,108,0.25)', borderRadius: 26,
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5,
              fontSize: '0.7rem', color: '#1DB954', fontWeight: 700, letterSpacing: 0.5,
            }}>
              <Disc size={14} /> MUSIC PLAYER
            </div>
            <button onClick={() => setExpanded(false)} style={{
              background: 'none', border: 'none', color: 'var(--pink-deep)',
              cursor: 'pointer', padding: 4,
            }}>
              <X size={18} />
            </button>
          </div>

          {/* Vinyl + Album Cover */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            margin: '10px 0 20px', position: 'relative', height: 140,
          }}>
            {/* Vinyl */}
            <div className={`anim-spin ${!playing ? 'anim-spin-paused' : ''}`} style={{
              width: 120, height: 120, borderRadius: '50%', position: 'absolute',
              left: playing ? '58%' : '50%', transform: 'translateX(-50%)',
              transition: 'left 0.5s cubic-bezier(0.175,0.885,0.32,1.275)',
              background: 'radial-gradient(circle, #1a0a10 28%, #2a1520 29%, #1a0a10 52%, var(--pink-deep) 54%)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)', zIndex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {/* Grooves */}
              <div style={{ width: 90, height: 90, border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', position: 'absolute' }} />
              <div style={{ width: 60, height: 60, border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', position: 'absolute' }} />
              <div style={{
                width: 34, height: 34, background: 'var(--cream)', borderRadius: '50%',
                border: '2px solid var(--pink-mid)', zIndex: 2,
              }} />
            </div>

            {/* Album Sleeve */}
            <div style={{
              width: 120, height: 120, borderRadius: 14, position: 'absolute',
              left: playing ? '32%' : '50%', transform: 'translateX(-50%)',
              transition: 'left 0.5s cubic-bezier(0.175,0.885,0.32,1.275)',
              zIndex: 2, overflow: 'hidden', border: '2px solid #fff',
              boxShadow: '0 8px 24px rgba(212,69,108,0.2)',
            }}>
              <img src="/pasilyo.webp" alt="Album" style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} onError={(e) => {
                e.target.src = '/bestie1.jpg';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #ff9a9e, #fecfef)';
              }} />
            </div>
          </div>

          {/* Song Info */}
          <div style={{ textAlign: 'center', marginBottom: 14 }}>
            <h4 style={{
              fontFamily: 'var(--font-cute)', fontSize: '1.2rem', color: 'var(--berry)', fontWeight: 800,
            }}>Pasilyo</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--pink-deep)', fontWeight: 600, marginTop: 4 }}>
              SunKissed Lola
            </p>
          </div>

          {/* Progress */}
          <div style={{ marginBottom: 14 }}>
            <div 
              onClick={handleSeek}
              style={{
                height: 6, background: 'rgba(212,69,108,0.12)', borderRadius: 10, 
                overflow: 'hidden', cursor: 'pointer', position: 'relative'
              }}
            >
              <div style={{
                width: `${progress}%`, height: '100%', borderRadius: 10,
                background: 'linear-gradient(90deg, var(--pink-deep), var(--pink-mid))',
                transition: 'width 0.1s linear',
              }} />
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: '0.7rem', color: 'var(--rose-gold)', marginTop: 6, fontWeight: 600
            }}>
              <span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
            <button onClick={() => setMuted(!muted)} style={{
              background: 'none', border: 'none', color: 'var(--pink-deep)', cursor: 'pointer', padding: 4,
            }}>
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button onClick={toggle} style={{
              width: 54, height: 54, borderRadius: '50%', border: 'none',
              background: 'linear-gradient(135deg, var(--pink-deep), #b03054)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 6px 20px rgba(212,69,108,0.4)',
            }}>
              {playing ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: 3 }} />}
            </button>
            <button onClick={replay} style={{
              background: 'none', border: 'none', color: 'var(--pink-deep)',
              cursor: 'pointer', fontFamily: 'var(--font-cute)', fontSize: '0.8rem', fontWeight: 700,
            }}>
              Replay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
