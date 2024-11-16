import {Component, Input} from '@angular/core';
import {FooterService} from '../service/footer.service';
import {ArticleComponent} from '../cards/article/article.component';
import {NgForOf} from '@angular/common';
import {Card} from '../cards/card';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ArticleComponent,
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() cards: Card[] = []

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.footerService.footerContent$.subscribe((cards: Card[]) => {
      this.cards = [];
      cards.forEach(card => {this.cards.push(card)});
    });
  }
}
