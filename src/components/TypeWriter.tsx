import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  onComplete?: () => void;
  completeDelay?: number;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({ 
  texts, 
  speed = 100,
  onComplete,
  completeDelay = 0
}) => {
  const [displayTexts, setDisplayTexts] = useState<string[]>(Array(texts.length).fill(''));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      
      if (currentCharIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayTexts(prev => {
            const newTexts = [...prev];
            newTexts[currentTextIndex] = currentText.slice(0, currentCharIndex + 1);
            return newTexts;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      } else {
        // 当前文本完成，移动到下一个文本
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    } else if (onComplete && currentTextIndex === texts.length) {
      // 添加延迟执行
      const completeTimer = setTimeout(() => {
        onComplete();
      }, completeDelay);

      return () => clearTimeout(completeTimer);
    }
  }, [currentTextIndex, currentCharIndex, texts, speed, onComplete, completeDelay]);

  return (
    <div className="flex flex-col items-center w-full">
      {displayTexts.map((text, index) => (
        <div key={index} className="relative flex items-center">
          <span className="whitespace-pre-line">{text}</span>
          {(index === currentTextIndex || 
            (index === texts.length - 1 && currentTextIndex >= texts.length)) && (
            <div className="w-[2px] h-[52px] bg-[#52FF63] ml-1 inline-block animate-blink"></div>
          )}
        </div>
      ))}
    </div>
  );
}; 