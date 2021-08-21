import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {

  emps: {id: number, name: string, status: string}[] = [];

  constructor(private empService: EmpserviceService,
              private router: Router) { }

  ngOnInit(): void {
    this.emps = this.empService.getemps();
  }

  viewempdet(){
    console.log("testing");
    this.router.navigate(['/emplistmain']);
  }

}
