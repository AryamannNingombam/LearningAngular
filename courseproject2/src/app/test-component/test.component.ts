import { Component, ViewChild } from '@angular/core';
import    { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  @ViewChild('templateProjectForm')TDform : NgForm ;
  @ViewChild('projectName')projectName  : NgModel;
  
  
  makingProjectForm : FormGroup;
statuses  = ['Stable','Critical','Finished'];
ngOnInit(){
  this.makingProjectForm = new FormGroup({
    'projectName' : new FormControl('',[Validators.required],[this.nameCheckPromise]),
    'email' : new FormControl('',[Validators.required,Validators.email]),
    'projectStatus' : new FormControl('Stable',[Validators.required])



  });
  // this.TDform.form.patchValue({
  //   'statusTD' : 'Critical'  })

  
}
onSubmit(){
  console.log('Submitted');
  console.log(this.makingProjectForm);
}
onSubmitTD(){
  console.log(this.TDform);
console.log(this.projectName);
  this.TDform.reset({
    'statusTD' : 'Critical'  })
}

nameCheck(control :FormControl){
  if ((control.value).toString().toLowerCase() === 'test')
{
  return {'invalidName' : true}
}
return null
}

nameCheckPromise(control :FormControl) : Promise<any> | Observable<any>   {

  let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if ((control.value).toString().toLowerCase() === 'test'){
          resolve({'valid' : true})
        } else{
          resolve(null);
        }

    },1000)

  })
  return promise;


} 



}
