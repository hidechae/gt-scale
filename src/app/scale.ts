export module Scale {

  export declare type T = {
    name:    string,
    stepSeq: number[]
  }

  export const all: T[] = [
    { name:    'Major' ,
      stepSeq: [ 0, 2, 4, 5, 7, 9, 11 ]
    },
    { name:    'Minor' ,
      stepSeq: [ 0, 2, 3, 5, 7, 8, 10 ]
    }
  ]
}
