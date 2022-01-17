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
  addMember() {
    this.members.push(this.newMemberName);
    console.log(this.members);
  }
  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }
}
