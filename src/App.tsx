import { useState } from 'react';
import './index.css';

// Core colors matching the design system directly mapped to the CSS variables
const accent = 'var(--accent)';
const success = 'var(--success)';
const error = 'var(--error)';
const grey700 = 'var(--grey700)';
const grey900 = 'var(--grey900)';
const grey300 = 'var(--grey300)';

const NavBar = () => (
  <nav className="nav-bar">
    <div className="nav-brand">
      <div className="nav-accent-bar" />
      <div>
        <div className="nav-brand-top">PURRFECT</div>
        <div className="nav-brand-bottom">MATCH</div>
      </div>
    </div>
    <div className="nav-heart">♥</div>
  </nav>
);

const Chip = ({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) => (
  <button className={`chip ${active ? 'active' : ''}`} onClick={onClick}>
    {label}
  </button>
);

const CatCard = ({
  name,
  breed,
  age,
  mood,
  photoColor,
  badgeLabel,
  badgeColor,
}: {
  name: string;
  breed: string;
  age: string;
  mood: string;
  photoColor: string;
  badgeLabel: string;
  badgeColor: string;
}) => (
  <article className="cat-card">
    <div className="cat-card-photo" style={{ backgroundColor: photoColor }}>
      <span className="badge" style={{ backgroundColor: badgeColor }}>{badgeLabel}</span>
    </div>
    <div className="cat-card-info">
      <h3>{name}</h3>
      <p>{breed}</p>
      <div className="cat-card-meta">
        <span className="age">{age}</span>
        <span> · </span>
        <span className="mood">{mood}</span>
      </div>
    </div>
    <button className="cat-card-cta">MEET ME</button>
  </article>
);

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Kittens', 'Adult', 'Senior'];

  return (
    <div className="app-container">
      <NavBar />

      <section className="hero">
        <div className="hero-content">
          <div className="hero-accent" />
          <div className="hero-eyebrow">FIND YOUR</div>
          <h1>
            PERFECT
            <span>COMPANION</span>
          </h1>
          <p>We connect wonderful cats with loving homes.</p>
          <div className="hero-avail-pill">32 Available</div>
        </div>
      </section>

      <div className="orange-divider" />

      <main className="section-container">
        <div className="search-field">
          <span>🔍</span>
          <input type="text" placeholder="Search by name or breed..." />
        </div>

        <div className="filter-row">
          {filters.map((f) => (
            <Chip 
              key={f} 
              label={f} 
              active={activeFilter === f} 
              onClick={() => setActiveFilter(f)} 
            />
          ))}
        </div>

        <header className="section-header">
          <h2>AVAILABLE NOW</h2>
          <a href="#" className="section-link">See all →</a>
        </header>

        <div className="cat-grid">
          <CatCard
            name="Whiskers"
            breed="Persian Mix"
            age="2 yrs"
            mood="Playful"
            photoColor="#FF8C42"
            badgeLabel="FEATURED"
            badgeColor={accent}
          />
          <CatCard
            name="Luna"
            breed="Siamese"
            age="1 yr"
            mood="Calm"
            photoColor={grey700}
            badgeLabel="NEW"
            badgeColor={grey900}
          />
          <CatCard
            name="Snowball"
            breed="Persian"
            age="4 yrs"
            mood="Sleepy"
            photoColor={grey300}
            badgeLabel="URGENT"
            badgeColor={error}
          />
          <CatCard
            name="Cotton"
            breed="Persian Mix"
            age="3 mos"
            mood="Playful"
            photoColor="#FFE8D6"
            badgeLabel="AVAILABLE"
            badgeColor={success}
          />
        </div>
      </main>
    </div>
  );
}
