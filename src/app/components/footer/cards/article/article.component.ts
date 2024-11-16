import {Component, Input} from '@angular/core';
import {Card} from '../card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements Card {
  @Input() url!: string;
  @Input() title!: string;
}
