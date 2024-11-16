import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  // Храним текст, который будет отображаться в терминале
  private terminalTextSource = new BehaviorSubject<string>('');
  terminalText$ = this.terminalTextSource.asObservable();

  // Метод для обновления текста
  updateTerminalText(newText: string) {
    this.terminalTextSource.next(newText);
  }
}
