export type Tone = { name: string; step: number }
export type Pattern = { name: string; steps: number[] }
export type Instrument = { id: string; name: string; strings: number[][] }

const FRETS = 22
const makeString = (open: number) => Array.from({ length: FRETS }, (_, fret) => (open + fret) % 12)
const patterns = (values: [string, number[]][]): Pattern[] => values.map(([name, steps]) => ({ name, steps }))

export const tones: Tone[] = ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯'].map((name, step) => ({ name, step }))
export const intervals = ['T', 'm2', 'M2', 'm3', 'M3', 'P4', '♯4', 'P5', 'm6', 'M6', 'm7', 'M7']

export const scales = patterns([
  ['Ionian / Major', [0, 2, 4, 5, 7, 9, 11]], ['Dorian', [0, 2, 3, 5, 7, 9, 10]], ['Phrygian', [0, 1, 3, 5, 7, 8, 10]],
  ['Lydian', [0, 2, 4, 6, 7, 9, 11]], ['Mixolydian', [0, 2, 4, 5, 7, 9, 10]], ['Aeolian / Minor', [0, 2, 3, 5, 7, 8, 10]],
  ['Locrian', [0, 1, 3, 5, 6, 8, 10]], ['Harmonic Minor', [0, 2, 3, 5, 7, 8, 11]], ['Melodic Minor', [0, 2, 3, 5, 7, 9, 11]],
  ['Altered', [0, 1, 3, 4, 6, 8, 10]], ['Com-Dimi', [0, 1, 3, 4, 6, 7, 9, 10]], ['Symmetrical Aug', [0, 3, 4, 7, 8, 11]],
  ['Major Pentatonic', [0, 2, 4, 7, 9]], ['Minor Pentatonic', [0, 3, 5, 7, 10]], ['Kumoi Pentatonic', [0, 2, 3, 7, 9]],
  ['Minor ♭5 Pentatonic', [0, 3, 5, 6, 10]], ['Major Blues', [0, 2, 3, 4, 7, 9]], ['Minor Blues', [0, 3, 5, 6, 7, 10]],
])

export const chords = patterns([
  ['M', [0, 4, 7]], ['m', [0, 3, 7]], ['7', [0, 4, 7, 10]], ['M7', [0, 4, 7, 11]], ['m7', [0, 3, 7, 10]],
  ['mM7', [0, 3, 7, 11]], ['6', [0, 4, 7, 9]], ['m6', [0, 3, 7, 9]], ['9', [0, 2, 4, 7, 10]],
  ['M9', [0, 2, 4, 7, 11]], ['m9', [0, 2, 3, 7, 10]], ['69', [0, 2, 4, 7, 9]], ['m69', [0, 2, 3, 7, 9]],
  ['sus4', [0, 5, 7]], ['7sus4', [0, 5, 7, 10]], ['dim', [0, 3, 6]], ['aug', [0, 4, 8]], ['aug7', [0, 4, 8, 10]],
  ['add9', [0, 2, 4, 7]], ['7(♯5)', [0, 4, 8, 10]], ['7(♭5)', [0, 4, 6, 10]], ['m7(♭5)', [0, 3, 6, 10]],
  ['7(♯9)', [0, 3, 4, 7, 10]], ['7(♭9)', [0, 1, 4, 7, 10]],
])

const instrumentTunings: [string, string, number[]][] = [
  ['guitar-6', 'Guitar (6 strings)', [7, 2, 10, 5, 0, 7]], ['guitar-7', 'Guitar (7 strings)', [7, 2, 10, 5, 0, 7, 2]],
  ['guitar-8', 'Guitar (8 strings)', [7, 2, 10, 5, 0, 7, 2, 9]], ['bass-4', 'Bass (4 strings)', [10, 5, 0, 7]],
  ['bass-5', 'Bass (5 strings)', [10, 5, 0, 7, 2]], ['bass-6', 'Bass (6 strings)', [3, 10, 5, 0, 7, 2]],
]

export const instruments: Instrument[] = instrumentTunings.map(([id, name, tuning]) => ({ id, name, strings: tuning.map(makeString) }))

export const toneLabel = (step: number, rootStep: number) => {
  const sharp = ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯']
  const flat = ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭']
  return ([0, 2, 3, 4, 5, 7, 9, 10].includes(rootStep) ? sharp : flat)[step]
}
