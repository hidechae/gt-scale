import { useState } from 'react'
import { chords, instruments, intervals, scaleGroups, scales, toneLabel, tones, type Pattern } from './data'

const singleInlayFrets = new Set([3, 5, 7, 9, 15, 17, 19])

export default function App() {
  const [instrumentId, setInstrumentId] = useState(instruments[0].id)
  const [root, setRoot] = useState(tones[3])
  const [pattern, setPattern] = useState<Pattern>(scales[0])
  const [selected, setSelected] = useState<Set<number>>(new Set([0]))
  const [showTones, setShowTones] = useState(false)
  const instrument = instruments.find(({ id }) => id === instrumentId)!

  const toggleInterval = (interval: number) => setSelected(current => {
    const next = new Set(current)
    next.has(interval) ? next.delete(interval) : next.add(interval)
    return next
  })

  return <main className="app-shell">
    <header>
      <p className="eyebrow">Fretboard reference</p>
      <h1>GtScale</h1>
      <p>Scales and chords across guitar and bass fretboards.</p>
    </header>

    <section className="fretboard-panel" aria-label="Fretboard">
      <div className="fretboard">
        <div className="inlay-columns" aria-hidden="true">
          {Array.from({ length: 22 }, (_, fret) => <div className={`inlay ${singleInlayFrets.has(fret) ? 'single-inlay' : ''} ${fret === 12 ? 'double-inlay' : ''}`} key={fret}>
            {singleInlayFrets.has(fret) && <span />}
            {fret === 12 && <><span /><span /></>}
          </div>)}
        </div>
        {instrument.strings.map((string, stringIndex) => <div className="string" key={stringIndex}>
          {string.map((note, fret) => {
            const interval = (12 + note - root.step) % 12
            const inPattern = pattern.steps.includes(interval)
            return <div className="fret" key={fret}>
              {inPattern && <span className={`note ${selected.has(interval) ? 'highlighted' : ''}`}>{showTones ? toneLabel(note, root.step) : intervals[interval]}</span>}
            </div>
          })}
        </div>)}
      </div>
      <div className="fret-numbers" aria-hidden="true">
        {Array.from({ length: 22 }, (_, index) => <span key={index}>{index === 0 ? 'Open' : index}</span>)}
      </div>
    </section>

    <section className="control-card primary-controls">
      <label className="select-label">Instrument
        <select value={instrumentId} onChange={event => setInstrumentId(event.target.value)}>
          {instruments.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </label>
      <div className="intervals" aria-label="Highlight intervals">
        {intervals.map((label, interval) => pattern.steps.includes(interval) && <button aria-pressed={selected.has(interval)} className={selected.has(interval) ? 'selected' : ''} onClick={() => toggleInterval(interval)} key={label}>{label}</button>)}
      </div>
      <label className="switch"><input type="checkbox" checked={showTones} onChange={event => setShowTones(event.target.checked)} /><span aria-hidden="true"/><b>Note names</b></label>
    </section>

    <section className="control-card"><h2>Root</h2><div className="root-grid">
      {tones.map(tone => <button aria-pressed={tone === root} className={tone === root ? 'selected' : ''} onClick={() => setRoot(tone)} key={tone.name}>{tone.name}</button>)}
    </div></section>

    <section className="control-card pattern-card">
      <div><h2>Scales</h2><div className="scale-grid">
        {scaleGroups.map(group => <section className="scale-group" aria-label={group.name} key={group.name}>
          <h3>{group.name}</h3>
          <div className="scale-buttons">
            {group.scales.map(item => <button aria-pressed={item === pattern} className={item === pattern ? 'selected' : ''} onClick={() => setPattern(item)} key={item.name}>{item.name}</button>)}
          </div>
        </section>)}
      </div></div>
      <div><h2>Chords</h2><div className="chord-grid">
        {chords.map(item => <button aria-pressed={item === pattern} className={item === pattern ? 'selected' : ''} onClick={() => setPattern(item)} key={item.name}>{item.name}</button>)}
      </div></div>
    </section>
  </main>
}
