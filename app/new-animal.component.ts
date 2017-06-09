import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div>
    <h3>Enter new Animal info</h3>
    <label>Enter Animal Species:</label>
    <input #newSpecies>
    <br>
    <label>Enter Animal Name:</label>
    <input #newName>
    <br>
    <label>Enter Animal Age:</label>
    <input #newAge>
    <br>
    <label>Enter Animal Diet:</label>
    <input #newDiet>
    <br>
    <label>Enter Animal Location:</label>
    <input #newLocation>
    <br>
    <label>Enter Caretakers:</label>
    <input #newCaretakers>
    <br>
    <label>Enter Sex:</label>
    <input #newSex>
    <br>
    <label>Enter Animal Likes:</label>
    <input #newLikes>
    <br>
    <label>Enter Animal Dislikes:</label>
    <input #newDislikes>
    <br>
    <button class="btn btn-primary"(click)="submitForm(newSpecies.value,newName.value,newAge.value,newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm( species: string, name: string, age: number, diet: string,  location: string, caretakers: number, sex: string, likes: string,  dislikes: string ) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
