import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">Name: {{currentAnimal.name}} <br> Species: {{currentAnimal.species}}<br> Age: {{currentAnimal.age}}<br>Diet: {{currentAnimal.diet}}<br>Location: {{currentAnimal.location}}<br>Caretakers: {{currentAnimal.caretakers}}<br>Sex: {{currentAnimal.sex}}<br>Likes: {{currentAnimal.likes}}<br>Dislikes: {{currentAnimal.dislikes}}<br><br><button class="btn btn-primary" (click)=updateAnimalButton(currentAnimal)>Edit!</button><hr></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() updateAnimalSender = new EventEmitter();

  updateAnimalButton(animalToEdit: Animal) {
    this.updateAnimalSender.emit(animalToEdit);
  }

}
