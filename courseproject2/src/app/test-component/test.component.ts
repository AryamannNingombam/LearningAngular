import { Component } from '@angular/core';
import    { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
makingProjectForm : FormGroup;
statuses  = ['Stable','Critical','Finished'];
ngOnInit(){
  this.makingProjectForm = new FormGroup({
    'projectName' : new FormControl('',[Validators.required,this.nameCheck]),
    'email' : new FormControl('',[Validators.required,Validators.email]),
    'projectStatus' : new FormControl('Stable',[Validators.required])



  })
}
onSubmit(){
  console.log('Submitted');
  console.log(this.makingProjectForm);
}

nameCheck(control :FormControl){
  if ((control.value).toString().toLowerCase() === 'test')
{
  return {'invalidName' : true}
}
return null
}



}
