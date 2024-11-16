import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {ExperienceComponent} from './components/experience/experience/experience.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProfileComponent,
    ExperienceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal';
}
