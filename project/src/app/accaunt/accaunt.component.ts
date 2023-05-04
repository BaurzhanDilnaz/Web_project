import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { User } from '../user';

@Component({
  selector: 'app-accaunt',
  templateUrl: './accaunt.component.html',
  styleUrls: ['./accaunt.component.css']
})
export class AccauntComponent {
  
  user : User

  constructor(
    private service : StudentService
  ){
    this.user = {} as User
    this.service.changeNameMail()
    this.user.id = this.service.id
  }

  
  ngOnInit(): void{
    this.getUser(this.user.id)
  }

  getUser(id : number){
    this.service.getUserInfo(id).subscribe((user) =>{
      
    })
  }
}
