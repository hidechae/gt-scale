export module Tone {

  export declare type T = {
    name: string,
    step: number
  }

  export const all: T[] = [
    { name: 'A',  step: 0  },
    { name: 'A#', step: 1  },
    { name: 'B',  step: 2  },
    { name: 'C',  step: 3  },
    { name: 'C#', step: 4  },
    { name: 'D',  step: 5  },
    { name: 'D#', step: 6  },
    { name: 'E',  step: 7  },
    { name: 'F',  step: 8  },
    { name: 'F#', step: 9  },
    { name: 'G',  step: 10 },
    { name: 'G#', step: 11 },
  ]

  export const map = {
    0:  'A',
    1:  'A#',
    2:  'B',
    3:  'C',
    4:  'C#',
    5:  'D',
    6:  'D#',
    7:  'E',
    8:  'F',
    9:  'F#',
    10: 'G',
    11: 'G#',
  }
}
