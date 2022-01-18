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
  numberOfTeams: "" | number = "";
  teams: string[][] = [];

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

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid number of teams"
      return
    }
    if ( this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members"
      return
    }
    this.errorMessage = "";
    let membersCopy = [...this.members]
    while (membersCopy.length) {
      for (let i=0; i<this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * membersCopy.length)
        console.log(randomIndex)
        const member = membersCopy.splice(randomIndex, 1)[0]
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
    }
    this.members = [];
    this.numberOfTeams = "";
  }
console(team: any) {
  console.log(team)
}

}
