import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  private emps = [
    {
      id: 1,
      name: 'Naren',
      status: 'active'
    },
    {
      id: 2,
      name: 'Amit',
      status: 'active'
    },
    {
      id: 3,
      name: 'Tejas',
      status: 'inactive'
    }
  ];


  constructor() { }
  getemps() {
    return this.emps;
  }

  getemp(id: number) {
    const emp = this.emps.find(
      (s) => {
        return s.id === id;
      }
    );
    return emp;
  }

  updateemp(id: number, empInfo: {name: string, status: string}) {
    const emp = this.emps.find(
      (s) => {
        return s.id === id;
      }
    );
    if (emp) {
      emp.name = empInfo.name;
      emp.status = empInfo.status;
    }
  }

  
}
