import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Card} from '../cards/card';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footerContent = new BehaviorSubject<Card[]>([]);
  footerContent$ = this.footerContent.asObservable();

  updateFooterCards(newText: Card[]) {
    this.footerContent.next(newText);
  }

  constructor() { }
}
