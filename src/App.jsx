import { useEffect, useRef, useState } from 'react'
import { missions } from './data/missions'
import './App.css'

const skills = ['Direct', 'Context', 'Evaluate', 'Protect', 'Decide']

function App() {
  const [selectedMission, setSelectedMission] = useState(null)
  const shouldScrollToMap = useRef(false)

  const scrollToMissions = () => {
    const missionMap = document.getElementById('mission-map')

    if (missionMap) {
      const top = missionMap.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top, left: 0, behavior: 'auto' })
    }
  }

  const openMission = (mission) => {
    setSelectedMission(mission)
  }

  const returnToMissionMap = () => {
    shouldScrollToMap.current = true
    setSelectedMission(null)
  }

  useEffect(() => {
    if (selectedMission) {
      const frame = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })

      return () => cancelAnimationFrame(frame)
    }

    if (shouldScrollToMap.current) {
      shouldScrollToMap.current = false
      let innerFrame = 0
      const frame = requestAnimationFrame(() => {
        innerFrame = requestAnimationFrame(scrollToMissions)
      })

      return () => {
        cancelAnimationFrame(frame)
        cancelAnimationFrame(innerFrame)
      }
    }
  }, [selectedMission])

  if (selectedMission) {
    return (
      <main className="app-shell">
        <section className="learning-screen" aria-labelledby="learning-title">
          <button type="button" className="secondary-button" onClick={returnToMissionMap}>
            Back to mission map
          </button>

          <div className="learning-hero">
            <p className="section-kicker">{selectedMission.skill}</p>
            <h1 id="learning-title">{selectedMission.title}</h1>
            <p>{selectedMission.shortDescription}</p>
          </div>

          <div className="learning-grid">
            <section className="learning-panel" aria-labelledby="learn-heading">
              <p className="step-label">Learn</p>
              <h2 id="learn-heading">Why this matters at work</h2>
              <p>{selectedMission.whyItMatters}</p>
              <p>{selectedMission.beginnerLesson}</p>
            </section>

            <section className="learning-panel" aria-labelledby="see-heading">
              <p className="step-label">See</p>
              <h2 id="see-heading">Compare the examples</h2>
              <div className="example-box example-box-bad">
                <span>Risky approach</span>
                <p>{selectedMission.badExample}</p>
              </div>
              <div className="example-box example-box-better">
                <span>Stronger approach</span>
                <p>{selectedMission.betterExample}</p>
              </div>
            </section>

            <section className="learning-panel" aria-labelledby="try-heading">
              <p className="step-label">Try</p>
              <h2 id="try-heading">Practice goal</h2>
              <p>{selectedMission.practiceGoal}</p>
              <button type="button" className="disabled-button" disabled>
                Practice challenge coming soon
              </button>
              <p className="coming-soon-help">
                Interactive practice is coming next. For now, read the goal and
                think about how you would apply this skill at work.
              </p>
            </section>

            <section className="learning-panel rule-panel" aria-labelledby="reflect-heading">
              <p className="step-label">Reflect</p>
              <h2 id="reflect-heading">Workplace rule</h2>
              <p>{selectedMission.workplaceRule}</p>
            </section>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell">
      <section className="landing" aria-labelledby="app-title">
        <div className="landing-copy">
          <p className="eyebrow">AI fluency trainer for beginners</p>
          <h1 id="app-title">PromptQuest</h1>
          <p className="pitch">
            PromptQuest helps beginners learn when AI can help, how to guide it
            clearly, when to check its answers, what information to protect,
            and when a person needs to make the final call.
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
            No missions are complete yet. This preview shows the skills you
            will practice.
          </p>
        </aside>
      </section>

      <section className="skill-meter" aria-labelledby="skills-heading">
        <div>
          <p className="section-kicker">Skill meter</p>
          <h2 id="skills-heading">AI fluency skills you will build</h2>
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
          <h2 id="map-heading">Choose a beginner-friendly AI fluency mission</h2>
          <p>
            Open a mission to learn through Learn, See, Try, and Reflect before
            interactive practice and scoring are added.
          </p>
          <p className="unlock-note">Interactive challenges unlock soon.</p>
        </div>

        <div className="mission-grid">
          {missions.map((mission) => (
            <article className="mission-card" key={mission.id}>
              <div className="mission-card-header">
                <div className="mission-number">Mission {mission.id}</div>
                <span className="preview-badge">Learn</span>
              </div>
              <h3>{mission.title}</h3>
              <p>{mission.shortDescription}</p>
              <span className="skill-tag">{mission.skill}</span>
              <button
                type="button"
                className="card-button"
                onClick={() => openMission(mission)}
              >
                Open lesson
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="codex-note" aria-labelledby="codex-heading">
        <p className="section-kicker">Build notes</p>
        <h2 id="codex-heading">How I used Codex</h2>
        <p>
          I used Codex to build PromptQuest in small milestones: landing page,
          mission map, responsive layout, visual refresh, and mission learning
          screens. This version focuses on the core Learn, See, Try, and
          Reflect flow before adding interactive practice and scoring.
        </p>
      </section>
    </main>
  )
}

export default App
