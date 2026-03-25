import { useState, useEffect } from 'react';
import './index.css';

// Core colors
const accent = 'var(--accent)';
const success = 'var(--success)';
const error = 'var(--error)';
const grey500 = 'var(--grey500)';
const grey700 = 'var(--grey700)';
const grey900 = 'var(--grey900)';
const grey300 = 'var(--grey300)';

const cats = [
  { id: 1, name: "Whiskers", breed: "Persian Mix", age: "2 yrs", mood: "Playful", photoColor: "#FF8C42", badgeLabel: "FEATURED", badgeColor: accent },
  { id: 2, name: "Luna", breed: "Siamese", age: "1 yr", mood: "Calm", photoColor: grey700, badgeLabel: "NEW", badgeColor: grey900 },
  { id: 3, name: "Snowball", breed: "Persian", age: "4 yrs", mood: "Sleepy", photoColor: grey300, badgeLabel: "URGENT", badgeColor: error },
  { id: 4, name: "Cotton", breed: "Persian Mix", age: "3 mos", mood: "Playful", photoColor: "#FFE8D6", badgeLabel: "AVAILABLE", badgeColor: success },
];

/* =========================================================================
   COMPONENTS
   ========================================================================= */
const NavBar = ({ title, showBack, onBack }: { title?: string, showBack?: boolean, onBack?: () => void }) => (
  <nav className="nav-bar">
    {showBack ? (
      <div className="nav-left" onClick={onBack}>
        <span className="nav-back">←</span>
        <span className="nav-title">{title}</span>
      </div>
    ) : (
      <div className="nav-brand">
        <div className="nav-accent-bar" />
        <div><div className="nav-brand-top">PURRFECT</div><div className="nav-brand-bottom">MATCH</div></div>
      </div>
    )}
    <div className="nav-heart">♥</div>
  </nav>
);

const Chip = ({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) => (
  <button className={`chip ${active ? 'active' : ''}`} onClick={onClick}>{label}</button>
);

const AlertRow = ({ type, message }: { type: 'Notice' | 'Info' | 'Success' | 'Error'; message: string }) => {
  const colors: Record<string, { bg: string; accent: string }> = {
    Notice:  { bg: '#FFF3EE', accent: accent },
    Info:    { bg: '#F0F0FF', accent: 'var(--info)' },
    Success: { bg: '#EEF7F2', accent: success },
    Error:   { bg: '#FFF0EE', accent: error },
  };
  const { bg, accent: cAccent } = colors[type];
  return (
    <div className="alert" style={{ backgroundColor: bg }}>
      <div className="alert-bar" style={{ backgroundColor: cAccent }} />
      <div className="alert-content">
        <span className="alert-title" style={{ color: cAccent }}>{type.toUpperCase()}</span>
        <p className="alert-message">{message}</p>
      </div>
      <span className="alert-dismiss">✕</span>
    </div>
  );
};

const Button = ({ label, variant = 'primary', onClick }: { label: string; variant?: 'primary' | 'secondary' | 'ghost' | 'ghost-light'; onClick?: () => void }) => (
  <button className={`btn btn-${variant}`} onClick={onClick}>{label}</button>
);

const CatCard = ({ cat, onClick }: { cat: any; onClick: () => void; }) => (
  <article className="cat-card" onClick={onClick}>
    <div className="cat-card-photo" style={{ backgroundColor: cat.photoColor }}>
      <span className="badge" style={{ backgroundColor: cat.badgeColor }}>{cat.badgeLabel}</span>
    </div>
    <div className="cat-card-info">
      <h3>{cat.name}</h3>
      <p>{cat.breed}</p>
      <div className="cat-card-meta">
        <span className="age">{cat.age}</span><span> · </span><span className="mood">{cat.mood}</span>
      </div>
    </div>
    <button className="cat-card-cta">MEET ME</button>
  </article>
);

const TabBar = ({ active, setScreen }: { active: string; setScreen: (s: string) => void }) => {
  const tabs = [
    { id: 'HOME', icon: '🏠', label: 'Home' },
    { id: 'SEARCH', icon: '🔍', label: 'Search' },
    { id: 'SAVED', icon: '❤️', label: 'Saved' },
    { id: 'PROFILE_USER', icon: '👤', label: 'Profile' },
  ];
  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <div key={tab.id} className={`tab-item ${active === tab.id ? 'active' : ''}`} onClick={() => setScreen(tab.id)}>
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
          {active === tab.id && <div className="tab-underline" />}
        </div>
      ))}
    </div>
  );
};

/* =========================================================================
   SCREENS
   ========================================================================= */
const HomeScreen = ({ onCatClick }: { onCatClick: (cat: any) => void }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  return (
    <div className="app-container">
      <NavBar />
      <section className="hero">
        <div className="hero-content">
          <div className="hero-accent" />
          <div className="hero-eyebrow">FIND YOUR</div>
          <h1>PERFECT<span>COMPANION</span></h1>
          <p>We connect wonderful cats with loving homes.</p>
          <div className="hero-avail-pill">32 Available</div>
        </div>
      </section>

      <div className="orange-divider" />
      <main className="section-container">
        <div className="search-field">
          <span>🔍</span><input type="text" placeholder="Search by name or breed..." />
        </div>
        <div className="filter-row">
          {['All', 'Kittens', 'Adult', 'Senior'].map(f => (
            <Chip key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
          ))}
        </div>
        <header className="section-header"><h2>AVAILABLE NOW</h2><a href="#" className="section-link">See all →</a></header>
        <div className="cat-grid">
          {cats.map(cat => <CatCard key={cat.id} cat={cat} onClick={() => onCatClick(cat)} />)}
        </div>
      </main>
    </div>
  );
};

const SearchScreen = ({ onCatClick }: { onCatClick: (cat: any) => void }) => {
  return (
    <div className="app-container">
      <NavBar title="SEARCH" showBack />
      <div className="section-container" style={{ paddingBottom: '2rem' }}>
        <div className="search-field focused">
          <span>🔍</span><input type="text" placeholder="Search..." defaultValue="persian" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h2 style={{ fontSize: '11px', color: grey700 }}>Age</h2>
          <div className="filter-row" style={{ marginBottom: '1rem' }}>
            <Chip label="Kitten" active /> <Chip label="Young" /> <Chip label="Adult" />
          </div>
          <h2 style={{ fontSize: '11px', color: grey700 }}>Breed</h2>
          <div className="filter-row" style={{ marginBottom: '0' }}>
            <Chip label="Persian" active /> <Chip label="Siamese" /> <Chip label="Maine Coon" />
          </div>
        </div>
      </div>
      <div className="orange-divider" />
      <div className="section-container">
        <header className="section-header"><h2>RESULTS</h2><span style={{color: grey500, fontSize: '12px'}}>4 found</span></header>
        <div className="result-list">
          {cats.filter(c => c.breed.includes('Persian')).map(cat => (
            <div key={cat.id} className="result-card" onClick={() => onCatClick(cat)}>
              <div className="result-thumb" style={{ backgroundColor: cat.photoColor }}></div>
              <div className="result-info">
                <h3>{cat.name}</h3><p>{cat.breed}</p>
                <span className="badge" style={{backgroundColor: cat.badgeColor}}>{cat.badgeLabel}</span>
              </div>
              <div className="result-meta"><span>{cat.age}</span><span className="result-arrow">→</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CatProfileScreen = ({ cat, onBack, onAdopt }: { cat: any; onBack: () => void; onAdopt: () => void }) => (
  <div className="app-container" style={{ paddingBottom: '0' }}>
    <NavBar title="CAT PROFILE" showBack onBack={onBack} />
    <div className="profile-hero">
      <div className="profile-accent" />
      <div className="profile-avatar"><div className="profile-avatar-inner" /></div>
      <h1 className="profile-name">{cat.name}</h1>
      <p className="profile-breed">{cat.breed} · {cat.age} · Female</p>
      <div className="profile-badges">
        <span className="badge" style={{ backgroundColor: success }}>AVAILABLE</span>
        <span className="badge" style={{ backgroundColor: accent }}>VACCINATED</span>
        <span className="badge" style={{ backgroundColor: grey700 }}>NEUTERED</span>
      </div>
    </div>
    <div style={{ padding: '1rem' }}><AlertRow type="Notice" message={`3 people are currently viewing ${cat.name}`} /></div>
    <div className="stat-row">
      <div className="stat-card" style={{backgroundColor: accent}}><span className="stat-label">Age</span><span className="stat-value">{cat.age}</span></div>
      <div className="stat-card" style={{backgroundColor: grey900}}><span className="stat-label">Weight</span><span className="stat-value">4.2 kg</span></div>
      <div className="stat-card" style={{backgroundColor: grey700}}><span className="stat-label">Energy</span><span className="stat-value">High</span></div>
    </div>
    <div className="profile-section">
      <h2 style={{ fontSize: '1rem', color: accent, marginBottom: '1rem' }}>PERSONALITY</h2>
      <p className="body-text">{cat.name} is a gentle, playful {cat.breed} who loves sunny spots and gentle chin scratches. Gets along well with children and other cats.</p>
    </div>
    <div className="btn-section">
      <Button label="START ADOPTION" variant="primary" onClick={onAdopt} />
      <Button label="SAVE FOR LATER" variant="ghost" />
    </div>
  </div>
);

const AdoptFormScreen = ({ cat, onBack, onSubmit }: { cat: any; onBack: () => void; onSubmit: () => void }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="app-container" style={{ paddingBottom: '0' }}>
      <NavBar title="ADOPTION FORM" showBack onBack={onBack} />
      <div className="progress-wrap">
        <div className="progress-track"><div className="progress-fill" /></div>
        <span className="progress-label">Step 2 of 3 — Your Details</span>
      </div>
      <div className="cat-strip">
        <div className="cat-strip-accent" />
        <div className="cat-strip-avatar" />
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{cat.name}</h3>
          <p style={{ fontSize: '0.85rem', color: grey500 }}>{cat.breed} · {cat.age} · Female</p>
        </div>
        <span className="badge" style={{backgroundColor: success}}>AVAILABLE</span>
      </div>
      <div style={{ padding: '0 1rem' }}><AlertRow type="Info" message="We'll review your application within 24 hours." /></div>
      
      <div className="form-content">
        <h2 style={{ fontSize: '0.9rem', color: accent, borderBottom: `1px solid ${grey300}`, paddingBottom: '8px' }}>PERSONAL DETAILS</h2>
        <div className="input-wrapper"><label className="input-label">Full Name</label><input type="text" className="input-field filled" defaultValue="Sarah Johnson" /></div>
        <div className="input-wrapper"><label className="input-label">Email Address</label><input type="text" className="input-field filled" defaultValue="sarah@email.com" /></div>
        <div className="input-wrapper"><label className="input-label" style={{color: accent}}>Phone Number</label><input type="text" className="input-field" style={{borderColor: accent}} placeholder="+1 (555) 123-4567" /></div>
        
        <h2 style={{ fontSize: '0.9rem', color: accent, borderBottom: `1px solid ${grey300}`, paddingBottom: '8px', marginTop: '16px' }}>HOME DETAILS</h2>
        <div className="input-wrapper"><label className="input-label">Current Address</label><input type="text" className="input-field" placeholder="123 Main St, New York..." /></div>
        <div className="check-row" onClick={() => setChecked(!checked)}>
          <div className={`checkbox ${checked ? 'checked' : ''}`}>{checked && <span style={{color: 'white', fontSize: '14px'}}>✓</span>}</div>
          <span className="check-label">I agree to a home visit from our team</span>
        </div>
      </div>
      
      <div className="btn-section">
        <Button label="CONTINUE →" variant="primary" onClick={onSubmit} />
        <Button label="SAVE & CONTINUE LATER" variant="secondary" />
      </div>
    </div>
  );
};

const SuccessScreen = ({ cat, onFinish }: { cat: any; onFinish: () => void }) => (
  <div className="app-container-dark">
    <NavBar />
    <div className="orange-divider" />
    <div className="celeb-section">
      <div className="check-circle"><span className="check-mark">✓</span></div>
      <div><h1 className="celeb-h1">APPLICATION</h1><h1 className="celeb-h2">SUBMITTED!</h1></div>
      <p className="celeb-desc">{cat.name} is waiting to meet you.<br/>We'll be in touch within 24 hours.</p>
      <div className="mini-card">
        <div className="mini-card-avatar" />
        <div><h4>{cat.name}</h4><p>Application #2026-0419</p></div>
      </div>
      <AlertRow type="Success" message="Your application has been sent to our shelter team." />
      <div style={{ width: '100%', maxWidth: '600px', margin: '16px auto 0 auto', gap: '12px', display: 'flex', flexDirection: 'column' }}>
        <Button label="TRACK MY APPLICATION" variant="primary" />
        <Button label="MEET ANOTHER CAT" variant="ghost-light" onClick={onFinish} />
      </div>
      <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', marginTop: '16px' }}>Share {cat.name} with a friend ♥</p>
    </div>
  </div>
);

/* =========================================================================
   MAIN APP ROUTER
   ========================================================================= */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('HOME');
  const [activeCat, setActiveCat] = useState<any>(cats[0]); // default cat for flows if triggered randomly

  // Auto-scroll to top on screen change
  useEffect(() => { window.scrollTo(0, 0); }, [currentScreen]);

  const handleCatSelect = (cat: any) => { setActiveCat(cat); setCurrentScreen('PROFILE'); };

  return (
    <>
      {currentScreen === 'HOME' && <HomeScreen onCatClick={handleCatSelect} />}
      {currentScreen === 'SEARCH' && <SearchScreen onCatClick={handleCatSelect} />}
      {currentScreen === 'PROFILE' && <CatProfileScreen cat={activeCat} onBack={() => setCurrentScreen('HOME')} onAdopt={() => setCurrentScreen('ADOPT_FORM')} />}
      {currentScreen === 'ADOPT_FORM' && <AdoptFormScreen cat={activeCat} onBack={() => setCurrentScreen('PROFILE')} onSubmit={() => setCurrentScreen('SUCCESS')} />}
      {currentScreen === 'SUCCESS' && <SuccessScreen cat={activeCat} onFinish={() => setCurrentScreen('HOME')} />}
      
      {/* Show TabBar only on top-level screens */}
      {['HOME', 'SEARCH', 'SAVED', 'PROFILE_USER'].includes(currentScreen) && (
        <TabBar active={currentScreen} setScreen={setCurrentScreen} />
      )}
    </>
  );
}
