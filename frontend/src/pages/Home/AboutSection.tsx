const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vite'] },
  { category: 'Backend', items: ['Express.js', 'Node.js', 'REST API', 'JWT Auth'] },
  { category: 'Database', items: ['PostgreSQL', 'Supabase'] },
  { category: 'Tools', items: ['Git', 'Bruno', 'Docker', 'Claude API'] },
];

const AboutSection = () => {
  return (
    <section id="about" style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#7C6FF7', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
        // about
      </p>
      <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#E2E2E2', marginBottom: '1.5rem' }}>
        Siapa gw?
      </h2>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#888', lineHeight: 1.9, marginBottom: '3rem', maxWidth: '600px' }}>
        Fresh grad Informatika dari Universitas Buddhi Dharma (GPA 3.51). Sekarang kerja di IT Support
        sambil aktif belajar full-stack web dev secara mandiri setiap hari. Punya passion di
        backend engineering dan AI integration.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
        {skills.map((group) => (
          <div key={group.category} style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '10px', padding: '1.25rem' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#7C6FF7', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              {group.category}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {group.items.map((item) => (
                <span key={item} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#C0C0C0' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
