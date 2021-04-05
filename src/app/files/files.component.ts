import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';

import { File } from '../file.model';
import { FileService } from '../file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  @Input() uname:string;

  loadedFiles:File[] = [];
  
  constructor(private loginc:LoginComponent, private fileService:FileService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  
    this._Activatedroute.queryParams
            .subscribe(params => {
                                     this.uname = params['uname'];
                                 });
        console.log("File OnInit uname: "+this.uname);

        this.loadFiles();
        
  }

private loadFiles()
{
  
  console.log("inside loadedfiles uname: "+this.uname);
  this.fileService.listFile(this.uname).subscribe(files => {
                                                                this.loadedFiles = files;                                                                                                                        
                                                          });


}

}
