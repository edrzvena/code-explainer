import ReactMarkdown from 'react-markdown';
import { useExplainerStore } from '../../store/explainer.store';
import type { SupportedLanguage } from '../../types/explainer.types';

const LANGUAGES: SupportedLanguage[] = ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Other'];

const ExplainerSection = () => {
  const { code, language, explanation, isLoading, error, setCode, setLanguage, explain, reset } = useExplainerStore();

  return (
    <section id="explainer" style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#7C6FF7', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
        // ai feature
      </p>
      <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#E2E2E2', marginBottom: '0.75rem' }}>
        Code Explainer
      </h2>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#666', marginBottom: '2rem' }}>
        Paste kode lo, Claude AI bakal jelasin line by line dalam bahasa Indonesia.
      </p>

      {/* Language selector */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {LANGUAGES.map((lang) => (
          <button key={lang} onClick={() => setLanguage(lang)}
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', padding: '0.4rem 1rem', borderRadius: '20px', border: `1px solid ${language === lang ? '#7C6FF7' : '#2A2A2A'}`, background: language === lang ? 'rgba(124,111,247,0.15)' : 'transparent', color: language === lang ? '#7C6FF7' : '#666', cursor: 'pointer', transition: 'all 0.15s' }}>
            {lang}
          </button>
        ))}
      </div>

      {/* Code input */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`// Paste kode ${language} lo di sini...`}
        style={{ width: '100%', minHeight: '180px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', padding: '1rem', background: '#111', border: '1px solid #2A2A2A', borderRadius: '10px', color: '#C0C0C0', resize: 'vertical', boxSizing: 'border-box', outline: 'none', lineHeight: 1.7 }}
        onFocus={e => (e.currentTarget.style.borderColor = '#7C6FF7')}
        onBlur={e => (e.currentTarget.style.borderColor = '#2A2A2A')}
      />

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', justifyContent: 'flex-end' }}>
        {(code || explanation) && (
          <button onClick={reset}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', padding: '0.65rem 1.25rem', background: 'transparent', border: '1px solid #2A2A2A', borderRadius: '8px', color: '#666', cursor: 'pointer' }}>
            Reset
          </button>
        )}
        <button onClick={explain} disabled={isLoading || !code.trim()}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', fontWeight: 600, padding: '0.65rem 1.5rem', background: isLoading || !code.trim() ? '#2A2A2A' : '#7C6FF7', color: isLoading || !code.trim() ? '#555' : '#fff', border: 'none', borderRadius: '8px', cursor: isLoading || !code.trim() ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}>
          {isLoading ? 'Claude lagi baca...' : '✦ Jelasin kode ini'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(220,50,50,0.08)', border: '1px solid rgba(220,50,50,0.2)', borderRadius: '8px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#f87171', margin: 0 }}>{error}</p>
        </div>
      )}

      {/* Result */}
      {explanation && (
        <div style={{ marginTop: '1.5rem', background: '#111', border: '1px solid #2A2A2A', borderRadius: '10px', padding: '1.5rem' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#7C6FF7', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            ✦ Penjelasan dari Claude AI
          </p>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#C0C0C0', lineHeight: 1.85 }}>
            <ReactMarkdown>{explanation}</ReactMarkdown>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExplainerSection;
