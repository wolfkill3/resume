import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {TerminalService} from '../../../terminal/service/terminal.service';
import {FooterService} from '../../../footer/service/footer.service';
import {Card} from '../../../footer/cards/card';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() cards: Card[] = []

  constructor(private terminalService: TerminalService, private footerService: FooterService) {}

  onClick() {
    this.terminalService.updateTerminalText(this.title + '\n' + this.text);
    this.footerService.updateFooterCards(this.cards);
  }
}
