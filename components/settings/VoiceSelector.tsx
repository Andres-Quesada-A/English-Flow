'use client';

import { useEffect, useState } from 'react';
import { SpeakerIcon } from '@/components/icons';
import {
  getEnglishVoices,
  getSelectedVoiceURI,
  setSelectedVoiceURI,
  speakText,
} from '@/lib/utils/phonetics';

/**
 * Global text-to-speech voice picker. The choice is persisted in localStorage
 * and applied everywhere via speakText().
 */
export function VoiceSelector() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    const load = () => {
      setVoices(getEnglishVoices());
      setSelected(getSelectedVoiceURI() ?? '');
    };
    load();
    // Voices load asynchronously in most browsers.
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = load;
      return () => {
        window.speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

  const handleChange = (uri: string) => {
    setSelected(uri);
    setSelectedVoiceURI(uri || null);
    // Give immediate feedback with the newly chosen voice.
    speakText('Hello, this is your selected voice.');
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <SpeakerIcon size={20} className="text-text-muted shrink-0" />
        <div className="min-w-0">
          <p className="font-medium text-text-primary">Voz de pronunciación</p>
          <p className="text-sm text-text-secondary">
            {voices.length > 0
              ? 'Se aplica en todo el vocabulario'
              : 'No se detectaron voces en inglés en este dispositivo'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <select
          value={selected}
          onChange={(e) => handleChange(e.target.value)}
          disabled={voices.length === 0}
          className="max-w-[9rem] sm:max-w-[14rem] truncate rounded-lg border border-border bg-surface text-text-primary text-sm px-2 py-1.5 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
          aria-label="Seleccionar voz de pronunciación"
        >
          <option value="">Predeterminada del sistema</option>
          {voices.map((v) => (
            <option key={v.voiceURI} value={v.voiceURI}>
              {v.name} ({v.lang})
            </option>
          ))}
        </select>
        <button
          onClick={() => speakText('Hello, this is your selected voice.')}
          className="p-1.5 rounded-full text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
          aria-label="Probar voz"
        >
          <SpeakerIcon size={16} />
        </button>
      </div>
    </div>
  );
}
