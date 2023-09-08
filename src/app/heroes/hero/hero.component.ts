import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "spider-man";
  public age: number = 16;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} | ${this.age}`
  }

  changeName():void{
    this.name = "ironman";
  }

  changeAge():void{
    this.age = 45;
  }

  resetForm():void{
    this.name = "spider-man";
    this.age = 16;
  }
}
