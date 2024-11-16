import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footerContent = new BehaviorSubject<any>('');
  footerContent$ = this.footerContent.asObservable();

  // Метод для обновления текста
  updateTerminalText(newText: any) {
    this.footerContent.next(newText);
  }

  constructor() { }
}
