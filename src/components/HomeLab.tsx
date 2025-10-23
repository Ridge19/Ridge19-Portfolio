import React, { useCallback, useEffect, useState } from 'react';
import rpiMonitor from '../assets/images/homelab/RPI-Monitor.png';
import portainer from '../assets/images/homelab/portainer.png';
import pihole from '../assets/images/homelab/Pi-Hole.png';

const images = [
  { src: rpiMonitor, alt: 'Raspberry Pi monitor' },
  { src: portainer, alt: 'Portainer UI' },
  { src: pihole, alt: 'Pi-hole dashboard' },
];

const HomeLab: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openAt = (index: number) => setCurrentIndex(index);
  const close = () => setCurrentIndex(null);

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => {
      if (i === null) return null;
      return (i - 1 + images.length) % images.length;
    });
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => {
      if (i === null) return null;
      return (i + 1) % images.length;
    });
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (currentIndex === null) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  }, [currentIndex, showNext, showPrev]);

  useEffect(() => {
    if (currentIndex !== null) {
      window.addEventListener('keydown', onKeyDown);
      // prevent background scroll while open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentIndex, onKeyDown]);

  return (
    <div id="homelab" className="home-lab">
      <h2>Home Lab</h2>
      <p>Raspberry Pi running multiple services (all dockerised) and accessible remotely via Tailscale.</p>
      <div className="lab-tech">
        <span className="project-type-tag">Home Lab</span>
        <span className="tech-tag">Raspberry Pi</span>
        <span className="tech-tag">Pi-hole</span>
        <span className="tech-tag">Samba</span>
        <span className="tech-tag">Nginx Proxy Manager</span>
        <span className="tech-tag">Tailscale</span>
        <span className="tech-tag">Docker</span>
      </div>

      <div className="home-lab-gallery">
        <div className="gallery-single" onClick={() => openAt(0)} role="button" aria-label={`Open home lab gallery (1 of ${images.length})`}>
          <img src={images[0].src} alt={images[0].alt} className="zoom" />
          <div className="gallery-count">{images.length} images</div>
        </div>
      </div>

      {currentIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); close(); }} aria-label="Close">×</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrev(); }} aria-label="Previous image">‹</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <div className="lightbox-caption">{images[currentIndex].alt} ({currentIndex + 1}/{images.length})</div>
          </div>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); showNext(); }} aria-label="Next image">›</button>
        </div>
      )}
    </div>
  );
};

export default HomeLab;
