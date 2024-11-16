import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

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
  @Input() title! : string
  titleReplacement  = this.title;
  isDropdownOpen: boolean = false;



  dropDownExp() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.title = this.isDropdownOpen ? '' : this.titleReplacement;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}
