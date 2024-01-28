import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public lastDeletedHero?: string;

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor']

  removeLastHero(): void {
    this.lastDeletedHero = this.heroNames.pop();
  }
}
