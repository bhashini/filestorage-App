import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() uname:string;
  message:string;

  newfile:File;
  fileName:string;
  fileType:string;
  

  constructor(private router:Router, private route: ActivatedRoute, private appcomponent:AppComponent, 
                                      private cdrf:ChangeDetectorRef,private loginc:LoginComponent) { }

  ngOnInit(): void {
    
        this.route.queryParams
        .subscribe(params => {
          this.uname = params['uname'];
        });
        console.log("Home OnInit uname: "+this.uname)

        
  }
      
    


  onUpload(){
    document.querySelector('input').click()
  }

/* handleFileInput(event : Event){
    this.newfile = (<HTMLInputElement>event.target).files[0];
   
      console.log("File ", this.newfile);
      console.log("File name", this.newfile.name);

      const uploadedFile = new FormData();
      uploadedFile.append('newFile', this.newfile);
      
     

      this.message = this.fileservice.message;
      console.log("Message", this.message);
   
  } */

  
  onLogout(){
    this.router.navigate(['login']);
  }

}
