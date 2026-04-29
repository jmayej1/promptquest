import { missions } from './data/missions'
import './App.css'

const skills = ['Clarity', 'Context', 'Verification', 'Privacy', 'Judgment']

function App() {
  const scrollToMissions = () => {
    document
      .getElementById('mission-map')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="app-shell">
      <section className="landing" aria-labelledby="app-title">
        <div className="landing-copy">
          <p className="eyebrow">AI fluency trainer for beginners</p>
          <h1 id="app-title">PromptQuest</h1>
          <p className="pitch">
            PromptQuest helps beginners build workplace-ready AI fluency through
            short missions that teach clear prompting, safe data use,
            verification, privacy, and human judgment.
          </p>
          <button type="button" className="primary-button" onClick={scrollToMissions}>
            View missions
          </button>
        </div>

        <aside className="progress-preview" aria-label="Progress preview">
          <div>
            <p className="preview-label">Progress preview</p>
            <strong>0 of 5 missions complete</strong>
          </div>
          <div className="progress-track" aria-hidden="true">
            <span></span>
          </div>
          <p className="progress-help">
            No missions are complete yet. Your skill meter will grow in later
            milestones.
          </p>
        </aside>
      </section>

      <section className="skill-meter" aria-labelledby="skills-heading">
        <div>
          <p className="section-kicker">Skill meter</p>
          <h2 id="skills-heading">Workplace AI skills you will practice</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <div className="skill-pill" key={skill}>
              <span>{skill}</span>
              <div className="mini-meter" aria-hidden="true">
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mission-section" id="mission-map" aria-labelledby="map-heading">
        <div className="section-heading">
          <p className="section-kicker">Mission map</p>
          <h2 id="map-heading">Choose a beginner-friendly AI judgment mission</h2>
          <p>
            These missions are previews for Milestone 1. Gameplay and scoring
            will come later.
          </p>
          <p className="unlock-note">Interactive challenges unlock in the next milestone.</p>
        </div>

        <div className="mission-grid">
          {missions.map((mission) => (
            <article className="mission-card" key={mission.id}>
              <div className="mission-card-header">
                <div className="mission-number">Mission {mission.id}</div>
                <span className="preview-badge">Preview</span>
              </div>
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
              <span className="skill-tag">{mission.skill}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="codex-note" aria-labelledby="codex-heading">
        <p className="section-kicker">Build notes</p>
        <h2 id="codex-heading">How I used Codex</h2>
        <p>
          Placeholder: I used Codex to plan the MVP in small steps, keep the
          React files simple, and turn the default Vite page into a beginner
          friendly PromptQuest preview.
        </p>
      </section>
    </main>
  )
}

export default App
