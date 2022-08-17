import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  backIcon = faBackward
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this._router.navigateByUrl('');
  }
}
