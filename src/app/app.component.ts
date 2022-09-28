import { Component } from '@angular/core';
import { Empoyee } from './models/empoyee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud-ejercicio';
  employeeArray: Empoyee[] = [
   { id:1, name:"italo", country:"Peru"} ,
   { id:2, name:"pepe", country:"Italia"} ,
   { id:3, name:"carlos", country:"Francia"} 
  ];

  selectedEmployee: Empoyee = new Empoyee();

  addOrEdit(){
    if(this.selectedEmployee.id===0){
      //le agregamos un lenght para que aumente en 1 el id
      // aqui no va a ir nada porque todo se guarda en el selectEmployedd
      // si esta en cero quiere decir que no hay ningun empleado seleccionado
      this.selectedEmployee.id = this.employeeArray.length + 1;
      //push para agregar al final de todo arreglo
      this.employeeArray.push(this.selectedEmployee)
    }

    this.selectedEmployee = new Empoyee()
  }
  
  delete(){
    this.employeeArray = this.employeeArray.filter(x=> x != this.selectedEmployee)
    this.selectedEmployee = new Empoyee()

  }

  operForEdit(empoyee: Empoyee){
    this.selectedEmployee=empoyee;
  }
}
