import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private terminalTextSource = new BehaviorSubject<string>('');
  terminalText$ = this.terminalTextSource.asObservable();

  updateTerminalText(newText: string) {
    this.terminalTextSource.next(newText);
  }
}
