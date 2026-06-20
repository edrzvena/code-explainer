const projects = [
  {
    title: 'IDX Stock Tracker v2',
    description: 'Full-stack Express + TypeScript backend dengan 6 model data saham IDX. CRUD lengkap, business logic validation, centralized error handling.',
    tags: ['Express', 'TypeScript', 'REST API'],
    link: 'https://github.com/edrzvena',
  },
  {
    title: 'Kasir-nya (POS App)',
    description: 'Multi-store POS app dengan React + Supabase. Fitur RBAC, store isolation, dashboard KPI, receipt printing, dan export Excel/CSV.',
    tags: ['React', 'Supabase', 'PostgreSQL'],
    link: 'https://github.com/edrzvena',
  },
  {
    title: 'Text Emotion Analyzer',
    description: 'Analisis emosi teks menggunakan NRC Emotion Lexicon dengan 10 kategori emosi Plutchik. Full preprocessing pipeline.',
    tags: ['JavaScript', 'NLP', 'NRC Lexicon'],
    link: 'https://github.com/edrzvena',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#7C6FF7', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
        // projects
      </p>
      <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#E2E2E2', marginBottom: '3rem' }}>
        Yang udah gw bangun
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        {projects.map((project) => (
          <a key={project.title} href={project.link} target="_blank" rel="noreferrer"
            style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '10px', padding: '1.5rem', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#7C6FF7'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', fontWeight: 600, color: '#E2E2E2', marginBottom: '0.75rem' }}>
              {project.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#777', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#7C6FF7', background: 'rgba(124,111,247,0.1)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
