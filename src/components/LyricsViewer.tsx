
import React, { useState } from 'react';
import { WordMeaning } from './WordMeaning';

interface Word {
  text: string;
  meaning?: string;
}

interface LyricsViewerProps {
  lyrics: Word[][];
}

const LyricsViewer = ({ lyrics }: LyricsViewerProps) => {
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleWordClick = (word: Word, event: React.MouseEvent) => {
    if (word.meaning) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      setPopoverPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
      setSelectedWord(word);
    }
  };

  const closePopover = () => {
    setSelectedWord(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Interactive Lyrics
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Click on any highlighted word to see its meaning
        </p>
        
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-6">
          {lyrics.map((line, lineIndex) => (
            <div key={lineIndex} className="text-xl leading-relaxed">
              {line.map((word, wordIndex) => (
                <span key={wordIndex}>
                  {word.meaning ? (
                    <button
                      onClick={(e) => handleWordClick(word, e)}
                      className="text-primary font-semibold hover:bg-primary/10 hover:text-primary/80 rounded px-1 py-0.5 transition-all duration-200 cursor-pointer underline decoration-dotted underline-offset-4"
                    >
                      {word.text}
                    </button>
                  ) : (
                    <span className="text-foreground">{word.text}</span>
                  )}
                  {wordIndex < line.length - 1 && ' '}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {selectedWord && (
        <WordMeaning
          word={selectedWord}
          position={popoverPosition}
          onClose={closePopover}
        />
      )}
    </div>
  );
};

export default LyricsViewer;
