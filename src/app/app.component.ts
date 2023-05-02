import { Component ,OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'designDay1';
  myForm!:FormGroup;
  
  ngOnInit(): void {

    this.myForm=new FormGroup({
      'name':new FormControl(),
      'sirName': new FormControl(),
      'hobbies': new FormArray([])

    })
  }
  get hobbyControls(){
   return (<FormArray>this.myForm.get('hobbies')).controls;
  }
 
  submitForm(data:any){
    console.log(data.value); 
  }
  add(){
    const control=new FormControl();
    (<FormArray>this.myForm.get('hobbies')).push(control)
  }
}
