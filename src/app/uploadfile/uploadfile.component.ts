import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileService } from '../file.service'; 
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  @Input() uname:string;
  uploadForm: FormGroup; 
 newfileName:string;

  constructor(private formBuilder: FormBuilder,private fileservice:FileService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._Activatedroute.queryParams
    .subscribe(params => {
                             this.uname = params['uname'];
                         });

    console.log("upload file uname: "+this.uname);
    this.uploadForm = this.formBuilder.group({
      newfile: ['']
    });
  }

  onFileSelect( event   ) {
    if (event.target.files.length > 0) {
      
     
      const file = event.target.files[0];
      this.uploadForm.get('newfile').setValue(file);
      this.newfileName = file.name;
      console.log("filename:   "+this.newfileName);
      
    }


 
  }
   onSubmit(){

    const formData = new FormData();
    formData.append('file', this.uploadForm.get('newfile').value);   
    console.log("filename in onSubmit() :   "+this.newfileName);
    this.fileservice.createFile(this.uname,formData,this.newfileName);
   }    

}
