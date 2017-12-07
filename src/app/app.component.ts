import { Component } from '@angular/core'
import { Scale } from './scale'
import { Step } from './step'
import { Tone } from './tone'

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {

  useTone: boolean = false

  stepSeq:  Step.T[]  = Step.all
  toneSeq:  Tone.T[]  = Tone.all
  scaleSeq: Scale.T[] = Scale.allScale
  codeSeq:  Scale.T[] = Scale.allCode

  selectedTone:    Tone.T      = this.toneSeq[3]
  selectedScale:   Scale.T     = this.scaleSeq[0]
  selectedStepSet: Set<number> = new Set<number>([0])

  fretCount   = 22
  gtStringSeq = [
    /** 1st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 7)  % 12),
    /** 2st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 2)  % 12),
    /** 3st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 10) % 12),
    /** 4st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 5)  % 12),
    /** 5st */ Array.apply(null, new Array(this.fretCount)).map((_, i) =>  i       % 12),
    /** 6st */ Array.apply(null, new Array(this.fretCount)).map((_, i) => (i + 7)  % 12),
  ]

  getLabel(step: number): string {
    let v = (12 + step - this.selectedTone.step) % 12
    if (this.selectedScale.stepSeq.includes(v)) {
      return this.useTone ? this.getToneLabel(step) : this.getStepLabel(v)
    } else {
      return null
    }
  }

  private getStepLabel(step: number): string {
    return Step.map[step]
  }

  private getToneLabel(step: number): string {
    if (Tone.skeys.includes(this.selectedTone.step)) {
      return Tone.smap[step]
    } else {
      return Tone.fmap[step]
    }
  }

  onSelectStep(step: Step.T): void {
    if (this.selectedStepSet.has(step.step)) {
      this.selectedStepSet.delete(step.step)
    } else {
      this.selectedStepSet.add(step.step)
    }
  }
}
