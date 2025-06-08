
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface Word {
  text: string;
  meaning?: string;
}

interface WordMeaningProps {
  word: Word;
  position: { x: number; y: number };
  onClose: () => void;
}

export const WordMeaning = ({ word, position, onClose }: WordMeaningProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      ref={popoverRef}
      className="fixed z-50 bg-card border border-border rounded-lg shadow-xl p-4 max-w-xs animate-in fade-in-0 zoom-in-95"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%)'
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-primary text-lg">{word.text}</h3>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={16} />
        </button>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {word.meaning}
      </p>
    </div>
  );
};
