import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
welcomeText: string = 'Welcome to MyBudgetApp!'
testArray: any[] = [1,2,3,4,5]
displayText: boolean = false
username: string = ""
  constructor() { }

  ngOnInit(): void {
  }
toggleText() {
this.displayText = !this.displayText
}
changeText() {
  this.username = this.username + "test!?"
}
}
