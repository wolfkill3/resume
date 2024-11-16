import { Component } from '@angular/core';
import {StepComponent} from '../steps/step/step.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    StepComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('dropdown', [
      state('closed', style({ height: '0', overflow: 'hidden' })),
      state('open', style({ height: '*', overflow: 'hidden' })),
      transition('closed <=> open', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class ExperienceComponent {
  commercial: boolean = false;
  nonCommercial: boolean = false;

  commercialClick() {
    this.commercial = !this.commercial;
    if (this.nonCommercial) {
      this.nonCommercial = false;
    }
  }

  nonCommercialClick() {
    this.nonCommercial = !this.nonCommercial;
    if (this.commercial) {
      this.commercial = false;
    }
    }
}
