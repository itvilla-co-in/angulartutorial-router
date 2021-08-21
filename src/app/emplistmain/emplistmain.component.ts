import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emplistmain',
  templateUrl: './emplistmain.component.html',
  styleUrls: ['./emplistmain.component.scss']
})
export class EmplistmainComponent implements OnInit,OnDestroy {

  id: string;
  emp: {id: number, name: string, status: string};
  sub: Subscription;

  constructor(private route: ActivatedRoute,private empservice: EmpserviceService) { }
 

  ngOnInit(): void {
    console.log("Hello ");
    //this.id= this.route.snapshot.params['id'];
    this.sub = this.route.paramMap.subscribe(params => {
      this.id= this.route.snapshot.params['id']
    })
    
    console.log("ID is " + this.id);
    this.emp = this.empservice.getemp(Number(this.id));
  }

  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }

}
