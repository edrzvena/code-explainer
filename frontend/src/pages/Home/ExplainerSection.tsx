import ReactMarkdown from 'react-markdown';
import { useExplainerStore } from '../../store/explainer.store';
import type { SupportedLanguage } from '../../types/explainer.types';

const LANGUAGES: SupportedLanguage[] = ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Other'];

const ExplainerSection = () => {
  const { code, language, explanation, isLoading, error, setCode, setLanguage, explain, reset } = useExplainerStore();

  return (
    <section id="explainer" className="max-w-225 mx-auto px-8 py-24">
      <p className="font-mono text-[0.78rem] text-[#7C6FF7] tracking-[0.12em] uppercase mb-4">
        // ai feature
      </p>
      <h2 className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#E2E2E2] mb-3">
        Code Explainer
      </h2>
      <p className="font-sans text-[0.95rem] text-[#666666] mb-8">
        Paste syntax code, Claude AI bakal jelasin line by line dalam bahasa Indonesia.
      </p>

      {/* Language selector */}
      <div className="flex gap-2 flex-wrap mb-4">
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`font-mono text-[0.78rem] px-4 py-1.5 rounded-[20px] border transition-all duration-150 cursor-pointer ${
              language === lang
                ? 'border-[#7C6FF7] bg-[#7C6FF7]/15 text-[#7C6FF7]'
                : 'border-[#2A2A2A] bg-transparent text-[#666666]'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Code input */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        maxLength={1000} // <-- buat nge-limit
        placeholder={`// Paste syntax code...`}
        className="w-full min-h-45 font-mono text-[0.85rem] p-4 bg-[#111111] border border-[#2A2A2A] rounded-[10px] text-[#C0C0C0] resize-y box-border outline-none leading-[1.7] focus:border-[#7C6FF7] blur:border-[#2A2A2A]"
      />

      {/* Actions */}
      <div className="flex gap-3 mt-4 justify-end">
        {(code || explanation) && (
          <button
            onClick={reset}
            className="font-sans text-[0.88rem] px-5 py-2.5 bg-transparent border border-[#2A2A2A] rounded-th-8 rounded-lg text-[#666666] cursor-pointer"
          >
            Reset
          </button>
        )}
        <button
          onClick={explain}
          disabled={isLoading || !code.trim()}
          className={`font-sans text-[0.88rem] font-semibold px-6 py-2.5 rounded-lg border-none transition-colors duration-200 ${
            isLoading || !code.trim()
              ? 'bg-[#2A2A2A] text-[#555555] cursor-not-allowed'
              : 'bg-[#7C6FF7] text-white cursor-pointer'
          }`}
        >
          {isLoading ? 'Claude lagi baca...' : '✦ Jelasin kode ini'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 p-4 bg-[#DC3232]/8 border border-[#DC3232]/20 rounded-lg">
          <p className="font-sans text-[0.88rem] text-[#f87171] m-0">{error}</p>
        </div>
      )}

      {/* Result */}
      {explanation && (
        <div className="mt-6 bg-[#111111] border border-[#2A2A2A] rounded-[10px] p-6">
          <p className="font-mono text-[0.72rem] text-[#7C6FF7] uppercase tracking-[0.1rem] mb-4">
            ✦ Penjelasan dari Claude AI
          </p>
          <div className="font-sans text-[0.9rem] text-[#C0C0C0] leading-[1.85]">
            <ReactMarkdown>{explanation}</ReactMarkdown>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExplainerSection;