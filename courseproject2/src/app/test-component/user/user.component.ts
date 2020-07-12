import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { ActivateService } from './user-activate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private activationService: ActivateService) {
  }


  ngOnInit()  :void{
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  activateThis(): void {
    this.activationService.activateEmmitter.next(true);
  }

}
