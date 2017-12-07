export module Step {

  export declare type T = {
    name: string,
    step: number
  }

  export const all: T[] = [
    { name: 'T',  step: 0  }, // トニック
    { name: 'm2', step: 1  }, // 短2度
    { name: 'M2', step: 2  }, // 長2度
    { name: 'm3', step: 3  }, // 短3度
    { name: 'M3', step: 4  }, // 長3度
    { name: 'P4', step: 5  }, // 完全4度
    { name: '♯4', step: 6  }, // 増4度
    { name: 'P5', step: 7  }, // 完全5度
    { name: 'm6', step: 8  }, // 短6度
    { name: 'M6', step: 9  }, // 長6度
    { name: 'm7', step: 10 }, // 短7度
    { name: 'M7', step: 11 }, // 長7度
  ]

  export const map = {
    0 : 'T',  // トニック
    1 : 'm2', // 短2度
    2 : 'M2', // 長2度
    3 : 'm3', // 短3度
    4 : 'M3', // 長3度
    5 : 'P4', // 完全4度
    6 : '♯4', // 増4度
    7 : 'P5', // 完全5度
    8 : 'm6', // 短6度
    9 : 'M6', // 長6度
    10: 'm7', // 短7度
    11: 'M7', // 長7度
  }
}
