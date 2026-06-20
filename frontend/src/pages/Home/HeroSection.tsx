const HeroSection = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 2rem' }}>
      <div style={{ maxWidth: '720px' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#7C6FF7', letterSpacing: '0.12em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
          &gt; Hello, World —
        </p>
        <h1 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, color: '#E2E2E2', lineHeight: 1.15, marginBottom: '1.5rem' }}>
          Gw Pedro,<br />
          <span style={{ color: '#7C6FF7' }}>Full-Stack</span> Developer<br />
          yang lagi ngebangun hal keren.
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', color: '#888', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '540px' }}>
          Fresh grad Informatics Engineering. Suka ngulik Express, React, dan sekarang AI integration.
          Scroll ke bawah buat lihat salah satu fitur portofolio gw — Code Explainer powered by Claude AI.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#explainer" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, padding: '0.75rem 1.75rem', background: '#7C6FF7', color: '#fff', borderRadius: '8px', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Coba Code Explainer ↓
          </a>
          <a href="#projects" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 500, padding: '0.75rem 1.75rem', background: 'transparent', color: '#E2E2E2', border: '1px solid #2A2A2A', borderRadius: '8px', textDecoration: 'none', transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#7C6FF7')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#2A2A2A')}>
            Lihat Proyek
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
