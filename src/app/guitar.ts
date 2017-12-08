export module Guitar {

  let fretCount   = 22

  export const gt: number[][] = [
    /** 1st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
    /** 2st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 2)  % 12),
    /** 3st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 10) % 12),
    /** 4st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 5)  % 12),
    /** 5st */ Array.apply(null, new Array(fretCount)).map((_, i) =>  i       % 12),
    /** 6st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
  ]

  export const gt7: number[][] = [
    /** 1st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
    /** 2st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 2)  % 12),
    /** 3st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 10) % 12),
    /** 4st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 5)  % 12),
    /** 5st */ Array.apply(null, new Array(fretCount)).map((_, i) =>  i       % 12),
    /** 6st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
    /** 7st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 2)  % 12),
  ]

  export const gt8: number[][] = [
    /** 1st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
    /** 2st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 2)  % 12),
    /** 3st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 10) % 12),
    /** 4st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 5)  % 12),
    /** 5st */ Array.apply(null, new Array(fretCount)).map((_, i) =>  i       % 12),
    /** 6st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
    /** 7st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 2)  % 12),
    /** 8st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 9)  % 12),
  ]

  export const ba: number[][] = [
    /** 1st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 10) % 12),
    /** 2st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 5)  % 12),
    /** 3st */ Array.apply(null, new Array(fretCount)).map((_, i) =>  i       % 12),
    /** 4st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
  ]

  export const ba5: number[][] = [
    /** 1st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 10) % 12),
    /** 2st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 5)  % 12),
    /** 3st */ Array.apply(null, new Array(fretCount)).map((_, i) =>  i       % 12),
    /** 4st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
    /** 5st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 2)  % 12),
  ]

  export const ba6: number[][] = [
    /** 1st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 3)  % 12),
    /** 2st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 10) % 12),
    /** 3st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 5)  % 12),
    /** 4st */ Array.apply(null, new Array(fretCount)).map((_, i) =>  i       % 12),
    /** 5st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 7)  % 12),
    /** 6st */ Array.apply(null, new Array(fretCount)).map((_, i) => (i + 2)  % 12),
  ]

  export const options = [
    { value: gt,  viewValue: 'Gt. (6st.)' },
    { value: gt7, viewValue: 'Gt. (7st.)' },
    { value: gt8, viewValue: 'Gt. (8st.)' },
    { value: ba,  viewValue: 'Ba. (4st.)' },
    { value: ba5, viewValue: 'Ba. (5st.)' },
    { value: ba6, viewValue: 'Ba. (6st.)' },
  ]
}
