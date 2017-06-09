import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'update-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <hr>
      <h3>Update Animal Info</h3>
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Enter Animal Species:</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <label>Enter Animal Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Enter Animal Diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet">
      <label>Enter Animal Location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <label>Enter Animal Caretaker:</label>
      <input [(ngModel)]="childSelectedAnimal.caretaker">
      <label>Enter Animal Sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex">
      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
      <label>Enter Animal Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
      <br>
      <button class="btn btn-primary"(click)="finishedUpdatingButton()">Save</button>
    </div>
  </div>
  `
})

export class UpdateAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() finishedUpdatingSender = new EventEmitter();

  finishedUpdatingButton() {
    this.finishedUpdatingSender.emit();
  }
}
