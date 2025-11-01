import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideData, SlideTemplate, ThreeColumnItem, ComparisonColumn, CardListItem, InfographicSection, InfographicApplication, WorkflowStep, AgendaColumn } from './types';

// Helper to parse and highlight keywords in footer text
const renderFooterSpans = (text: string = "") => {
  const parts = text.split(/\s+/);
  return (
    <>
      {parts.map((part, index) => {
        const upperCasePart = part.toUpperCase().replace('.', '');
        if (['ANALYSIS', 'CREATION'].includes(upperCasePart)) {
          return <span key={index} className="font-semibold text-primary">{part} </span>;
        }
        return <span key={index}>{part} </span>;
      })}
    </>
  );
};

// Helper to highlight the last phrase of a challenge question
const HighlightLastPhrase: React.FC<{ text?: string; separator?: string }> = ({ text = "", separator = '...' }) => {
    const parts = text.split(separator);
    if (parts.length < 2) {
        return <>{text}</>;
    }
    return (
        <>
            {parts[0]}{separator}
            <span className="text-primary">{parts[1]}</span>
        </>
    );
};

// --- Slide Templates ---

const TitleSlide: React.FC<{ slide: SlideData; slideIndex?: number }> = ({ slide, slideIndex }) => {
    const isFirstSlide = slideIndex === 0;
    
    // Split title for word-by-word animation
    const titleWords = slide.title?.split(' ') || [];

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-8">
            <div className="flex flex-col items-center justify-center">
                {isFirstSlide && (
                    <img
                        src="https://i.imgur.com/bioCfZA.png"
                        alt="Ngee Ann Polytechnic Logo"
                        className="h-24 w-auto mb-16 fade-in"
                        style={{ animationDelay: '1.2s' }}
                    />
                )}
                <h1 className="text-8xl md:text-9xl font-bold m-0 text-foreground tracking-tighter">
                  {isFirstSlide ? titleWords.map((word, index) => (
                      <span key={index} className="token-generate inline-block" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                          {word}&nbsp;
                      </span>
                  )) : slide.title}
                </h1>
                <h2 className={`text-5xl md:text-6xl font-medium text-primary mt-6 ${isFirstSlide ? 'fade-in' : ''}`} style={{animationDelay: isFirstSlide ? '0.2s' : '0s'}}>
                    {slide.subtitle}
                </h2>
                <p className={`text-2xl md:text-3xl text-muted-foreground mt-3 ${isFirstSlide ? 'fade-in' : ''}`} style={{animationDelay: isFirstSlide ? '1.4s' : '0s'}}>
                    {slide.chineseSubtitle}
                </p>
            </div>
            {isFirstSlide && (slide.footer || slide.chineseFooter) && (
                <div className="absolute bottom-8 text-center w-full">
                    {slide.footer && <p className="text-xl text-muted-foreground fade-in" style={{ animationDelay: '1.6s' }}>{slide.footer}</p>}
                    {slide.chineseFooter && <p className={`text-lg text-muted-foreground/80 fade-in ${slide.footer ? 'mt-1' : ''}`} style={{ animationDelay: '1.7s' }}>{slide.chineseFooter}</p>}
                </div>
            )}
        </div>
    );
};

const ThreeColumnIconSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col items-center justify-center p-8">
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">{slide.title}</h1>
      <h2 className="text-3xl md:text-4xl font-medium text-muted-foreground mt-2">{slide.chineseTitle}</h2>
    </div>
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
      {(slide.columns as ThreeColumnItem[])?.map((col, index) => (
        <div key={index} className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <span className="material-icons-outlined text-7xl mb-6" style={{ color: col.iconColor || '#3b82f6' }}>
            {col.icon}
          </span>
          <h3 className="text-2xl font-semibold text-card-foreground leading-snug">{col.title}</h3>
          <p className="text-xl text-muted-foreground mt-2 leading-snug">{col.chineseTitle}</p>
        </div>
      ))}
    </div>
  </div>
);


const ComparisonSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col items-center justify-center p-8">
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">{slide.title}</h1>
      <h2 className="text-3xl md:text-4xl font-medium text-muted-foreground mt-2">{slide.chineseTitle}</h2>
    </div>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 self-center">
      {(slide.columns as ComparisonColumn[])?.map((col, index) => (
        <div key={index} className={`flex flex-col text-center items-center p-8 rounded-2xl border-2 ${index === 1 ? 'border-primary bg-blue-50/50' : 'border-border bg-card'}`}>
          <span className="material-icons-outlined text-7xl mb-4" style={{ color: col.iconColor }}>{col.icon}</span>
          <h3 className="text-4xl font-semibold text-foreground">{col.title}</h3>
          <p className="text-2xl text-muted-foreground mt-1">{col.chineseTitle}</p>
          <p className="text-3xl font-medium text-foreground my-8">{col.text}</p>
          <p className="text-2xl text-muted-foreground">{col.chineseText}</p>
          <div className="bg-muted rounded-lg p-6 mt-auto w-full">
            <p className="text-2xl font-medium text-foreground italic">"{col.example}"</p>
            <p className="text-xl text-muted-foreground mt-1">"{col.chineseExample}"</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DiagramSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">{slide.title}</h1>
        <h2 className="text-3xl md:text-4xl font-medium text-muted-foreground mb-16">{slide.chineseTitle}</h2>

        <div className="flex items-center justify-center space-x-8 md:space-x-12 text-3xl md:text-4xl text-foreground">
            <div className="flex flex-col items-center">
                <span className="material-icons-outlined text-8xl md:text-9xl text-muted-foreground">person</span>
                <p className="font-semibold mt-2">You</p>
                <p className="text-2xl md:text-3xl text-muted-foreground">您</p>
            </div>
            <p className="text-6xl md:text-7xl text-muted-foreground font-light">+</p>
            <div className="flex flex-col items-center">
                <span className="material-icons-outlined text-8xl md:text-9xl text-primary">auto_awesome</span>
                <p className="font-semibold mt-2">Gen AI</p>
                <p className="text-2xl md:text-3xl text-muted-foreground">生成式 AI</p>
            </div>
            <p className="text-6xl md:text-7xl text-muted-foreground font-light">=</p>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <ul className="text-left space-y-4">
                    <li className="flex items-center">
                        <span className="material-icons-outlined text-5xl md:text-6xl text-accent-yellow mr-4">lightbulb</span>
                        <div>
                            <p className="font-semibold">New Ideas</p>
                            <p className="text-2xl md:text-3xl text-muted-foreground">新点子</p>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons-outlined text-5xl md:text-6xl text-accent-green mr-4">trending_up</span>
                        <div>
                            <p className="font-semibold">Better Work</p>
                            <p className="text-2xl md:text-3xl text-muted-foreground">更高效的工作</p>
                        </div>
                    </li>
                     <li className="flex items-center">
                        <span className="material-icons-outlined text-5xl md:text-6xl text-accent-red mr-4">rocket_launch</span>
                        <div>
                            <p className="font-semibold">Faster Results</p>
                            <p className="text-2xl md:text-3xl text-muted-foreground">更快的结果</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

const ChallengeSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 fade-in">
    <span className="material-icons-outlined text-[10rem] mb-12" style={{ color: slide.iconColor || '#3b82f6' }}>
      {slide.icon}
    </span>
    <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
      <HighlightLastPhrase text={slide.title} />
    </h1>
    <h2 className="text-3xl md:text-5xl font-medium text-muted-foreground mt-6">
      <HighlightLastPhrase text={slide.chineseTitle} />
    </h2>
  </div>
);

const CardListSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex items-center justify-center p-12">
    <div className="w-1/3 flex flex-col items-center text-center pr-12">
      <span className="material-icons-outlined text-[9rem] leading-none mb-4" style={{ color: slide.iconColor }}>{slide.icon}</span>
      <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">{slide.title}</h1>
      <h2 className="text-3xl md:text-4xl font-medium text-muted-foreground mt-2">{slide.chineseTitle}</h2>
    </div>
    <div className="w-2/3 flex flex-col space-y-4">
      {(slide.cardItems as CardListItem[])?.map((item, index) => (
        <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-sm flex items-start transition-all duration-300 hover:shadow-lg hover:border-primary">
          <div className="w-1/4">
            <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
            <p className="text-xl text-muted-foreground">{item.chineseTitle}</p>
          </div>
          <div className="w-3/4 pl-6 border-l border-border">
            <p className="text-2xl text-foreground">{item.text}</p>
            <p className="text-xl text-muted-foreground mt-1">{item.chineseText}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const InfographicSummarySlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="w-full h-full flex flex-col items-center justify-center p-8">
    <div className="text-center mb-8">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">{slide.title}</h1>
      <h2 className="text-3xl md:text-4xl font-medium text-muted-foreground mt-2">{slide.chineseTitle}</h2>
    </div>

    <div className="w-full max-w-8xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Column 1: Capabilities */}
      <div className="bg-card border border-border rounded-2xl p-8 h-full">
        <h3 className="text-3xl font-semibold text-primary text-center mb-4">{slide.infographicSections?.[0].title}</h3>
        <p className="text-xl text-muted-foreground text-center mb-8">{slide.infographicSections?.[0].chineseTitle}</p>
        <div className="space-y-6">
          {slide.infographicSections?.[0].items.map((item, index) => (
            <div key={index} className="flex items-center bg-muted/50 p-4 rounded-lg">
              <span className="material-icons-outlined text-6xl mr-5" style={{ color: item.iconColor }}>{item.icon}</span>
              <div>
                <p className="text-3xl font-medium text-card-foreground">{item.text}</p>
                <p className="text-2xl text-muted-foreground">{item.chineseText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Applications */}
      <div className="bg-card border-2 border-primary rounded-2xl p-8 shadow-lg">
        <h3 className="text-3xl font-semibold text-primary text-center mb-4">Business Applications</h3>
        <p className="text-xl text-muted-foreground text-center mb-8">业务应用</p>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 text-center">
          {(slide.applications as InfographicApplication[])?.map((app, index) => (
            <div key={index} className="flex flex-col items-center p-2 rounded-lg hover:bg-muted transition-colors duration-200">
              <span className="material-icons-outlined text-6xl text-muted-foreground">{app.icon}</span>
              <p className="text-2xl font-medium text-card-foreground mt-2">{app.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Column 3: Considerations */}
      <div className="bg-red-50/50 border border-red-200 rounded-2xl p-8 h-full">
         <h3 className="text-3xl font-semibold text-accent-red text-center mb-4">{slide.infographicSections?.[1].title}</h3>
        <p className="text-xl text-muted-foreground text-center mb-8">{slide.infographicSections?.[1].chineseTitle}</p>
         <div className="space-y-6">
          {slide.infographicSections?.[1].items.map((item, index) => (
            <div key={index} className="flex items-center bg-red-100/60 p-4 rounded-lg">
              <span className="material-icons-outlined text-6xl mr-5" style={{ color: item.iconColor }}>{item.icon}</span>
              <div>
                <p className="text-3xl font-medium text-red-900">{item.text}</p>
                <p className="text-2xl text-red-700/80">{item.chineseText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {slide.workflow && (
      <div className="w-full max-w-8xl mt-8">
        <div className="bg-card border border-border rounded-2xl p-6">
            <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold text-foreground">Process</h3>
            <p className="text-lg text-muted-foreground">流程</p>
            </div>
            <div className="flex items-center justify-center text-center">
            {(slide.workflow as WorkflowStep[]).map((step, index) => (
                <React.Fragment key={index}>
                <div className="flex flex-col items-center px-4">
                    <span className="material-icons-outlined text-6xl text-primary">{step.icon}</span>
                    <p className="mt-2 text-xl font-semibold text-foreground">{step.label}</p>
                    <p className="text-lg text-muted-foreground">{step.chineseLabel}</p>
                </div>
                {index < slide.workflow.length - 1 && (
                    <span className="material-icons-outlined text-5xl text-muted-foreground/70 mx-4">arrow_forward</span>
                )}
                </React.Fragment>
            ))}
            </div>
        </div>
      </div>
    )}
  </div>
);

const AgendaSlide: React.FC<{ slide: SlideData }> = ({ slide }) => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-12">
    {slide.logoUrl && (
      <img src={slide.logoUrl} alt="Logo" className="absolute top-12 right-12 h-16 w-auto" />
    )}
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">{slide.title}</h1>
      <h2 className="text-3xl md:text-4xl font-medium text-muted-foreground mt-2">{slide.subtitle}</h2>
    </div>
    <div className="w-full max-w-7xl flex flex-row items-stretch justify-center gap-6 self-center">
      {(slide.agendaColumns as AgendaColumn[])?.map((col, index) => (
        <React.Fragment key={index}>
          <div className="bg-card border border-border rounded-2xl p-8 flex-1">
            <h3 className="text-4xl font-semibold text-primary mb-8 flex items-center">
              <span className="text-5xl mr-4">{col.icon}</span>
              {col.title}
            </h3>
            {col.isOrdered ? (
              <ol className="list-decimal list-inside space-y-5 text-2xl text-foreground">
                {col.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item.text}</li>
                ))}
              </ol>
            ) : (
              <ul className="space-y-5 text-2xl text-foreground">
                {col.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="material-icons-outlined text-primary mr-4 mt-1">
                      {item.icon || 'check_circle_outline'}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {index === 0 && (slide.agendaColumns?.length ?? 0) > 1 && (
            <div className="flex items-center justify-center">
              <span className="material-icons-outlined text-7xl text-muted-foreground/50">arrow_forward</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
    {slide.footer && (
        <div className="mt-12 text-center w-full max-w-7xl">
            <p className="text-2xl text-muted-foreground/80 italic">
                <span className="mr-2">{slide.chineseFooter}</span>
                {slide.footer}
            </p>
        </div>
    )}
  </div>
);

const QuizSlide: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const CHOICES = ['Traditional AI', 'Generative AI'];
  const { quizIcon, scenario, isAnswerSlide, correctAnswer, explanation } = slide;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-8">
        Traditional AI <span className="text-muted-foreground/60 mx-2">or</span> Generative AI?
      </h1>
      
      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg mb-8 w-full max-w-5xl flex items-center space-x-8">
        <div className="w-64 h-48 flex-shrink-0 flex items-center justify-center bg-muted rounded-lg border border-border">
            <span className="material-icons-outlined text-9xl text-primary">{quizIcon}</span>
        </div>
        <p className="text-3xl font-medium text-foreground text-left flex-1 leading-snug">{scenario}</p>
      </div>

      <div className="flex items-center justify-center gap-8 w-full max-w-5xl">
        {CHOICES.map(choice => {
          let buttonClasses = "text-3xl font-semibold py-6 px-12 rounded-full border-4 transition-all duration-300 w-1/2 flex items-center justify-center gap-4 ";
          if (isAnswerSlide) {
            if (choice === correctAnswer) {
              buttonClasses += "bg-green-100 border-green-500 text-green-800 scale-105 shadow-lg ring-4 ring-green-200";
            } else {
              buttonClasses += "bg-gray-100 border-gray-300 text-gray-500 opacity-60";
            }
          } else {
            buttonClasses += "bg-card border-border hover:bg-muted hover:border-primary cursor-pointer";
          }
          return <button key={choice} className={buttonClasses} disabled={isAnswerSlide}>
            {choice === 'Traditional AI' ? <span className="material-icons-outlined">search</span> : <span className="material-icons-outlined">auto_awesome</span>}
            {choice}
          </button>;
        })}
      </div>

      {isAnswerSlide && (
        <div className="mt-10 bg-blue-50 border-2 border-primary/30 rounded-2xl p-6 w-full max-w-5xl text-left flex items-start fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="material-icons-outlined text-5xl text-primary mr-4">lightbulb</span>
          <div>
            <h3 className="text-3xl font-bold text-primary">{correctAnswer}</h3>
            <p className="text-2xl text-foreground mt-1">{renderFooterSpans(explanation)}</p>
          </div>
        </div>
      )}
    </div>
  );
};


// --- Main Slide Renderer ---

const SlideComponent: React.FC<{ slide: SlideData; isActive: boolean; slideIndex: number }> = ({ slide, isActive, slideIndex }) => {
  const baseClasses = "absolute w-full h-full p-8 md:p-12 box-border flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out";
  const activeClasses = isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none";
  const hasFooter = (slide.footer || slide.chineseFooter) && slideIndex !== 0 && slide.template !== SlideTemplate.Agenda;

  const renderSlideContent = () => {
    switch (slide.template) {
      case SlideTemplate.Title: return <TitleSlide slide={slide} slideIndex={slideIndex} />;
      case SlideTemplate.ThreeColumnIcon: return <ThreeColumnIconSlide slide={slide} />;
      case SlideTemplate.Comparison: return <ComparisonSlide slide={slide} />;
      case SlideTemplate.Diagram: return <DiagramSlide slide={slide} />;
      case SlideTemplate.Challenge: return <ChallengeSlide slide={slide} />;
      case SlideTemplate.CardList: return <CardListSlide slide={slide} />;
      case SlideTemplate.InfographicSummary: return <InfographicSummarySlide slide={slide} />;
      case SlideTemplate.Agenda: return <AgendaSlide slide={slide} />;
      case SlideTemplate.Quiz: return <QuizSlide slide={slide} />;
      default: return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <div className={`w-full h-full flex flex-col items-center justify-center ${hasFooter ? 'pb-20' : ''}`}>
        {renderSlideContent()}
      </div>
      {hasFooter && (
        <footer className="absolute bottom-10 md:bottom-12 w-full text-center">
          <p className="text-2xl md:text-3xl text-muted-foreground">{renderFooterSpans(slide.footer)}</p>
          <p className="text-xl md:text-2xl text-muted-foreground mt-1">{slide.chineseFooter}</p>
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
      event.preventDefault(); // Prevent space bar from scrolling
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
              'border': 'var(--border)',
              'background': 'var(--background)',
              'foreground': 'var(--foreground)',
              'primary': {
                DEFAULT: 'var(--primary)',
                foreground: 'var(--primary-foreground)',
              },
              'card': {
                DEFAULT: 'var(--card)',
                foreground: 'var(--card-foreground)',
              },
              'muted': {
                DEFAULT: 'var(--muted)',
                foreground: 'var(--muted-foreground)',
              },
              'accent-green': '#34A853',
              'accent-red': '#EA4335',
              'accent-yellow': '#FBBC05',
            }
          }
        }
      }
    `;
    document.head.appendChild(script);
  }, []);

  const progress = ((currentSlide + 1) / SLIDES.length) * 100;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      {SLIDES.map((slide, index) => (
        <SlideComponent key={index} slide={slide} isActive={index === currentSlide} slideIndex={index} />
      ))}
      
      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-card/70 border border-border rounded-full w-12 h-12 flex items-center justify-center text-muted-foreground hover:bg-card hover:text-foreground transition-all duration-200 backdrop-blur-sm shadow-sm hover:scale-105">
        <span className="material-icons-outlined text-4xl">arrow_back</span>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-card/70 border border-border rounded-full w-12 h-12 flex items-center justify-center text-muted-foreground hover:bg-card hover:text-foreground transition-all duration-200 backdrop-blur-sm shadow-sm hover:scale-105">
        <span className="material-icons-outlined text-4xl">arrow_forward</span>
      </button>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 px-6 z-20 flex items-center justify-between">
        <p className="text-lg text-muted-foreground font-medium">Generative AI for Business</p>
        <div className="text-lg text-muted-foreground font-medium bg-muted px-3 py-1 rounded-md">
          {currentSlide + 1} / {SLIDES.length}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-muted z-30">
        <div className="h-1 bg-primary transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default App;