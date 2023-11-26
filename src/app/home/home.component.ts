import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {

 members:any[]=[];

constructor( private s1:ServiceService ){

}


ngOnInit(): void {
  
    this.members= this.s1.GetMember()

  console.log(this.members)


}

}
