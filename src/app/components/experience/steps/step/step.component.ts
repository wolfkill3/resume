import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {TerminalService} from '../../../terminal/service/terminal.service';

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
  @Input() title: string = ''; // Текст кнопки
  @Input() text: string = ''; // Текст, связанный с кнопкой

  constructor(private terminalService: TerminalService) {}

  onClick() {
    this.terminalService.updateTerminalText(this.title + '\n' + this.text);
  }
}
