import {Component} from '@angular/core';
import {StepComponent} from '../steps/step/step.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ArticleComponent} from '../../footer/cards/article/article.component';

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
      state('closed', style({height: '0', overflow: 'hidden'})),
      state('open', style({height: '*', overflow: 'hidden'})),
      transition('closed <=> open', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class ExperienceComponent {
  commercial: boolean = false;
  nonCommercial: boolean = false;
  education: boolean = false;
  bio: boolean = false;

  commercialClick() {
    this.commercial = !this.commercial;
    this.nonCommercial = false;
    this.education = false;
    this.bio = false;
  }

  nonCommercialClick() {
    this.nonCommercial = !this.nonCommercial;
    this.commercial = false;
    this.education = false;
    this.bio = false;
  }

  educationClick() {
    this.education = !this.education;
    this.commercial = false;
    this.nonCommercial = false;
    this.bio = false;
  }

  bioClick() {
    this.bio = !this.bio;
    this.commercial = false;
    this.nonCommercial = false;
    this.education = false;
  }

  protected readonly ArticleComponent = ArticleComponent;
}
