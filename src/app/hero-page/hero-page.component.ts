import { Component, OnInit } from '@angular/core';
import { faV, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  check = faCheckSquare;
  constructor() { }

  ngOnInit(): void {

  }
  lll(kaka:any){
    console.log(this.check);
    console.log(kaka);
    

  }

}
