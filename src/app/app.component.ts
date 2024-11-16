import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {ExperienceComponent} from './components/experience/experience/experience.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {TerminalComponent} from './components/terminal/terminal/terminal.component';
import {FooterComponent} from './components/footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProfileComponent,
    ExperienceComponent,
    TerminalComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal';
}
