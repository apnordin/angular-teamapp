import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// This is where we store the state of our app
export class AppComponent {
  title = 'teammapp';
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Please enter a name"
      return
    }
    this.members.push(this.newMemberName);
    this.newMemberName="";
    this.errorMessage = "";
  }
  onInput(member: string) {
    this.newMemberName = member;
  }
}
