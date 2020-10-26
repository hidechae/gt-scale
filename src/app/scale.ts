export module Scale {

  export declare type T = {
    name: string,
    stepSeq: number[]
  }

  export const allScale: T[] = [{
    name   : 'Ionian / Major',
    stepSeq: [0, 2, 4, 5, 7, 9, 11]
  }, {
    name   : 'Dorian',
    stepSeq: [0, 2, 3, 5, 7, 9, 10]
  }, {
    name   : 'Phrigian',
    stepSeq: [0, 1, 3, 5, 7, 8, 10]
  }, {
    name   : 'Lydian',
    stepSeq: [0, 2, 4, 6, 7, 9, 11]
  }, {
    name   : 'Mixolydian',
    stepSeq: [0, 2, 4, 5, 7, 9, 10]
  }, {
    name   : 'Aeolian / Minor',
    stepSeq: [0, 2, 3, 5, 7, 8, 10]
  }, {
    name   : 'Locrian',
    stepSeq: [0, 1, 3, 5, 6, 8, 10]
  }, {
    name   : 'Harmonic Minor',
    stepSeq: [0, 2, 3, 5, 7, 8, 11]
  }, {
    name   : 'Melodic Minor',
    stepSeq: [0, 2, 3, 5, 7, 9, 11]
  }, {
    name   : 'Altered',
    stepSeq: [0, 1, 3, 4, 6, 8, 10]
  }, {
    name   : 'Com-Dimi',
    stepSeq: [0, 1, 3, 4, 6, 7, 9, 10]
  }, {
    name   : 'Symmetrical Aug',
    stepSeq: [0, 3, 4, 7, 8, 11]
  }, {
    name   : 'Major Pentatonic',
    stepSeq: [0, 2, 4, 7, 9]
  }, {
    name   : 'Minor Pentatonic',
    stepSeq: [0, 3, 5, 7, 10]
  }, {
    name   : 'Kumoi Pentatonic',
    stepSeq: [0, 3, 5, 6, 10]
  }, {
    name   : 'Major Blues',
    stepSeq: [0, 2, 3, 4, 7, 9]
  }, {
    name   : 'Minor Blues',
    stepSeq: [0, 3, 5, 6, 7, 10]
  }]

  export const allCode: T[] = [{
    name   : 'M',
    stepSeq: [0, 4, 7]
  }, {
    name   : 'm',
    stepSeq: [0, 3, 7]
  }, {
    name   : '7',
    stepSeq: [0, 4, 7, 10]
  }, {
    name   : 'M7',
    stepSeq: [0, 4, 7, 11]
  }, {
    name   : 'm7',
    stepSeq: [0, 3, 7, 10]
  }, {
    name   : 'mM7',
    stepSeq: [0, 3, 7, 11]
  }, {
    name   : '6',
    stepSeq: [0, 4, 7, 9]
  }, {
    name   : 'm6',
    stepSeq: [0, 3, 7, 9]
  }, {
    name   : '9',
    stepSeq: [0, 4, 7, 10, 2]
  }, {
    name   : 'M9',
    stepSeq: [0, 4, 7, 11, 2]
  }, {
    name   : 'm9',
    stepSeq: [0, 3, 7, 10, 2]
  }, {
    name   : '69',
    stepSeq: [0, 4, 7, 9, 2]
  }, {
    name   : 'm69',
    stepSeq: [0, 3, 7, 9, 2]
  }, {
    name   : 'sus4',
    stepSeq: [0, 5, 7]
  }, {
    name   : '7sus4',
    stepSeq: [0, 5, 7, 10]
  }, {
    name   : 'dim',
    stepSeq: [0, 3, 6]
  }, {
    name   : 'aug',
    stepSeq: [0, 4, 8]
  }, {
    name   : 'aug7',
    stepSeq: [0, 4, 8, 10]
  }, {
    name   : 'add9',
    stepSeq: [0, 4, 7, 2]
  }, {
    name   : '7(♯5)',
    stepSeq: [0, 4, 8, 10]
  }, {
    name   : '7(♭5)',
    stepSeq: [0, 4, 6, 10]
  }, {
    name   : 'm7(♭5)',
    stepSeq: [0, 3, 6, 10]
  }, {
    name   : '7(♯9)',
    stepSeq: [0, 4, 7, 10, 3]
  }, {
    name   : '7(♭9)',
    stepSeq: [0, 4, 7, 10, 1]
  }]
}
