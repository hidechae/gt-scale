import { Component } from '@angular/core'
import { Tone } from './tone'
import { Scale } from './scale'

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {

  toneSeq: Tone.T[]   = Tone.all
  scaleSeq: Scale.T[] = Scale.all

  selectedTone: Tone.T   = null
  selectedScale: Scale.T = null

  fretCount   = 21
  gtStringSeq = [
    /** 1st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 7)  % 12),
    /** 2st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 2)  % 12),
    /** 3st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 10) % 12),
    /** 4st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 5)  % 12),
    /** 5st */ Array.apply(null, new Array(this.fretCount)).map((_, i) =>  i       % 12),
    /** 6st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 7)  % 12),
  ]


  ngOnInit(): void {
    this.selectedTone  = this.toneSeq[0]
    this.selectedScale = this.scaleSeq[0]
  }

  getLabel(step: number): string {
    let v = (12 + step - this.selectedTone.step) % 12
    if (this.selectedScale.stepSeq.includes(v)) {
      return Tone.map[step]
    } else {
      return null
    }
  }

  selectTone(tone: Tone.T): void {
    this.selectedTone = tone
  }

  selectScale(scale: Scale.T): void {
    this.selectedScale = scale
  }
}
