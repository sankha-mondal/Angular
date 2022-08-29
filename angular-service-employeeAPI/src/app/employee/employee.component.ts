import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Array<Employee> = [];

  employeeRef = new FormGroup({   //  model driven Form
    id: new FormControl( "", [Validators.required]),
    name: new FormControl( "", [Validators.required, Validators.minLength(3)]),
    age: new FormControl( "", [Validators.required, Validators.minLength(2)])
  })

  constructor(public empSer: EmployeeService) { }

  ngOnInit(): void {
    // this.loadEmployeeDetails();
  }



  //  Used to show the data:
  loadEmployeeDetails() {
    this.empSer.loadEmployeeDetails().subscribe(result=>
      this.employees=result, 
      error=>console.log(error), 
      ()=>console.log("Done!")
      );
  }




  // Used to store new data:
  storeData() {
    let employee = this.employeeRef.value;
    alert("Data added successfully...");  // alert message
    this.empSer.storeEmployeeDetails(employee).subscribe(result=>console.log(result), 
        error=>console.log(error), ()=>{
          console.log("Done!");
          this.loadEmployeeDetails();  //  get all the records automatically
        });
    this.employeeRef.reset();
  }

}
