import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
     <option value="allAnimals" selected="selected">All Animals</option>
     <option value="youngAnimals">Young Animals</option>
     <option value="matureAnimals">Mature Animals</option>
   </select>

    <h4 *ngFor="let currentAnimal of childAnimalList | completeness:filterByCompleteness">Name: {{currentAnimal.name}} <br> Species: {{currentAnimal.species}}<br> Age: {{currentAnimal.age}}<br>Diet: {{currentAnimal.diet}}<br>Location: {{currentAnimal.location}}<br>Caretakers: {{currentAnimal.caretakers}}<br>Sex: {{currentAnimal.sex}}<br>Likes: {{currentAnimal.likes}}<br>Dislikes: {{currentAnimal.dislikes}}<br><br><button class="btn btn-primary" (click)=updateAnimalButton(currentAnimal)>Edit!</button><hr></h4>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() updateAnimalSender = new EventEmitter();

  filterByCompleteness: string = "incompleteTasks";

  updateAnimalButton(animalToEdit: Animal) {
    this.updateAnimalSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
  }

}
