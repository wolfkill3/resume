import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {TerminalService} from '../service/terminal.service';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})
export class TerminalComponent {
  displayedText: string[] = [];
  private typingIndex: number = 0;
  private isTyping: boolean = false;

  constructor(private terminalService: TerminalService) {}

  ngOnInit() {
    this.terminalService.terminalText$.subscribe((newText) => {
      if (this.isTyping) return;
      this.displayedText = [];
      this.typingIndex = 0;
      this.typeText(newText);
    });
  }

  private typeText(fullText: string) {
    this.isTyping = true;
    const textArray = fullText.split('');

    const typeNextCharacter = () => {
      if (this.typingIndex < textArray.length) {
        this.displayedText.push(textArray[this.typingIndex]);
        this.typingIndex++;
        setTimeout(typeNextCharacter, 5);
      } else {
        this.isTyping = false;
      }
    };

    typeNextCharacter();
  }
}
