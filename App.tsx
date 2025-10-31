
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideData, SlideTemplate, ThreeColumnItem, ComparisonColumn, CardListItem } from './types';

// Helper to parse and highlight keywords in footer text
const renderFooterSpans = (text: string = "") => {
  const parts = text.split(/\s+/);
  return (
    <>
      {parts.map((part, index) => {
        if (['ANALYSIS.', 'ANALYSIS', 'CREATION.', 'CREATION'].includes(part.toUpperCase())) {
          return <span key={index} className="font-medium text-accent-blue">{part} </span>;
        }
        return <span key={index}>{part} </span>;
      })}
    </>
  );
};


// --- Slide Templates ---

const TitleSlide: React.FC<{ slide: SlideData; slideIndex?: number }> = ({ slide, slideIndex }) => (
  <div className="flex flex-col items-center justify-center text-center">
    {slideIndex === 0 && (
      <img
        src="https://www.moe.gov.sg/-/media/images/school-logos/post-secondary/ngee-ann-polytechnic.jpg?h=353&w=1274&hash=C05014A86C88B66446A2D9D4CF9FC62F"
        alt="Ngee Ann Polytechnic Logo"
        className="h-20 w-auto mb-12"
      />
    )}
    <h1 className="text-8xl font-medium m-0 text-text-primary">{slide.title}</h1>
    <h2 className="text-5xl font-normal text-accent-blue mt-4">{slide.subtitle}</h2>
    <p className="text-3xl text-text-secondary mt-2">{slide.chineseSubtitle}</p>
  </div>
);

const ThreeColumnIconSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-medium text-text-primary">{slide.title}</h1>
      <h2 className="text-3xl font-normal text-text-secondary mb-20">{slide.chineseTitle}</h2>
    </div>
    <div className="w-full max-w-7xl grid grid-cols-3 gap-x-8">
      {(slide.columns as ThreeColumnItem[])?.map((col, index) => (
        <div key={index} className="text-center flex flex-col items-center">
          <span className="material-icons-outlined text-7xl mb-4" style={{ color: col.iconColor || '#5f6368' }}>
            {col.icon}
          </span>
          <h3 className="text-2xl font-medium text-text-primary">{col.title}</h3>
          <p className="text-xl text-text-secondary mt-2">{col.chineseTitle}</p>
        </div>
      ))}
    </div>
  </div>
);

const ComparisonSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-medium text-text-primary">{slide.title}</h1>
      <h2 className="text-3xl font-normal text-text-secondary mb-12">{slide.chineseTitle}</h2>
    </div>
    <div className="w-full max-w-6xl grid grid-cols-2 gap-x-8 self-center">
      {(slide.columns as ComparisonColumn[])?.map((col, index) => (
        <div key={index} className={`flex flex-col text-center items-center p-8 rounded-2xl border ${index === 1 ? 'border-accent-blue' : 'border-border-light'} bg-white`}>
          <span className="material-icons-outlined text-6xl mb-4" style={{ color: col.iconColor }}>{col.icon}</span>
          <h3 className="text-3xl font-medium text-text-primary">{col.title}</h3>
          <p className="text-xl text-text-secondary mt-1">{col.chineseTitle}</p>
          <p className="text-2xl font-medium text-text-primary my-6">{col.text}</p>
          <p className="text-xl text-text-secondary">{col.chineseText}</p>
          <div className="bg-gray-100 rounded-lg p-4 mt-6 w-full">
            <p className="text-xl font-normal text-text-primary italic">"{col.example}"</p>
            <p className="text-lg text-text-secondary mt-1">"{col.chineseExample}"</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DiagramSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-medium text-text-primary">{slide.title}</h1>
        <h2 className="text-3xl font-normal text-text-secondary mb-16">{slide.chineseTitle}</h2>

        <div className="flex items-center justify-center space-x-8 text-3xl text-text-primary">
            <div className="flex flex-col items-center">
                <span className="material-icons-outlined text-8xl text-text-secondary">person</span>
                <p className="font-medium mt-2">You</p>
                <p className="text-2xl text-text-secondary">您</p>
            </div>
            <p className="text-6xl text-text-secondary">+</p>
            <div className="flex flex-col items-center">
                <span className="material-icons-outlined text-8xl text-accent-blue">auto_awesome</span>
                <p className="font-medium mt-2">Gen AI</p>
                <p className="text-2xl text-text-secondary">生成式 AI</p>
            </div>
            <p className="text-6xl text-text-secondary">=</p>
            <div className="bg-white border border-border-light rounded-2xl p-8 shadow-sm">
                <ul className="text-left space-y-4">
                    <li className="flex items-center">
                        <span className="material-icons-outlined text-5xl text-accent-yellow mr-4">lightbulb</span>
                        <div>
                            <p className="font-medium">New Ideas</p>
                            <p className="text-2xl text-text-secondary">新点子</p>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons-outlined text-5xl text-accent-green mr-4">trending_up</span>
                        <div>
                            <p className="font-medium">Better Work</p>
                            <p className="text-2xl text-text-secondary">更高效的工作</p>
                        </div>
                    </li>
                     <li className="flex items-center">
                        <span className="material-icons-outlined text-5xl text-accent-red mr-4">rocket_launch</span>
                        <div>
                            <p className="font-medium">Faster Results</p>
                            <p className="text-2xl text-text-secondary">更快的结果</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

const CardListSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-1/4 flex flex-col items-center text-center pr-16">
      <span className="material-icons-outlined text-9xl mb-4" style={{ color: slide.iconColor }}>{slide.icon}</span>
      <h1 className="text-5xl font-medium text-text-primary">{slide.title}</h1>
      <h2 className="text-3xl font-normal text-text-secondary">{slide.chineseTitle}</h2>
    </div>
    <div className="w-3/4 flex flex-col space-y-6">
      {(slide.cardItems as CardListItem[])?.map((item, index) => (
        <div key={index} className="bg-white border border-border-light rounded-2xl p-6 shadow-sm flex items-start">
          <div className="w-1/4">
            <h3 className="text-2xl font-medium text-accent-blue">{item.title}</h3>
            <p className="text-xl text-text-secondary">{item.chineseTitle}</p>
          </div>
          <div className="w-3/4 pl-6 border-l border-border-light">
            <p className="text-2xl text-text-primary">{item.text}</p>
            <p className="text-xl text-text-secondary mt-1">{item.chineseText}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Slide Renderer ---

const SlideComponent: React.FC<{ slide: SlideData; isActive: boolean; slideIndex: number }> = ({ slide, isActive, slideIndex }) => {
  const baseClasses = "absolute w-full h-full p-12 box-border flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out";
  const activeClasses = isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none";
  const hasFooter = slide.footer || slide.chineseFooter;

  const renderSlideContent = () => {
    switch (slide.template) {
      case SlideTemplate.Title: return <TitleSlide slide={slide} slideIndex={slideIndex} />;
      case SlideTemplate.ThreeColumnIcon: return <ThreeColumnIconSlide slide={slide} />;
      case SlideTemplate.Comparison: return <ComparisonSlide slide={slide} />;
      case SlideTemplate.Diagram: return <DiagramSlide slide={slide} />;
      case SlideTemplate.CardList: return <CardListSlide slide={slide} />;
      default: return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <div className={`w-full h-full flex flex-col items-center justify-center ${hasFooter ? 'pb-20' : ''}`}>
        {renderSlideContent()}
      </div>
      {hasFooter && (
        <footer className="absolute bottom-10 w-full text-center">
          <p className="text-2xl text-text-secondary">{renderFooterSpans(slide.footer)}</p>
          <p className="text-xl text-text-secondary mt-1">{slide.chineseFooter}</p>
        </footer>
      )}
    </div>
  );
};

// --- App Component ---

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight' || event.key === ' ') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  
  // Tailwind CSS Color Configuration
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'text-primary': '#3c4043',
              'text-secondary': '#5f6368',
              'accent-blue': '#4285F4',
              'accent-green': '#34A853',
              'accent-red': '#EA4335',
              'accent-yellow': '#FBBC05',
              'border-light': '#E0E0E0',
            }
          }
        }
      }
    `;
    document.head.appendChild(script);
  }, []);


  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#f8f9fa]">
      {SLIDES.map((slide, index) => (
        <SlideComponent key={index} slide={slide} isActive={index === currentSlide} slideIndex={index} />
      ))}
      
      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 rounded-full w-12 h-12 flex items-center justify-center text-text-secondary hover:bg-gray-200 transition-colors">
        <span className="material-icons-outlined text-4xl">arrow_back</span>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 rounded-full w-12 h-12 flex items-center justify-center text-text-secondary hover:bg-gray-200 transition-colors">
        <span className="material-icons-outlined text-4xl">arrow_forward</span>
      </button>

      {/* Pagination */}
      <div className="absolute bottom-4 right-6 z-20 text-lg text-text-secondary bg-gray-100 px-3 py-1 rounded-full">
        {currentSlide + 1} / {SLIDES.length}
      </div>
    </div>
  );
};

export default App;
