import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse , HttpHeaders    } from '@angular/common/http';


import { File } from './file.model';
import { environment } from '../environments/environment';
import { env } from 'process';


@Injectable({providedIn:'root'})
export class FileService{

        message:string;

    constructor(private http: HttpClient){}

    OnInit(){}

 /*   createFile(email:string, file:FormData) // file information is not provided
    {
        return this.http.post<File>(environment.host + '/file/create/' + email, 
                    {'file':file}, {
                    headers: new HttpHeaders({'Content-Type': 'application/json'}),
                    observe: 'response'}
                                    ).subscribe((response) => {
                                                                if (response.status === 200) {
                                                                this.message = 'Image uploaded successfully';
                                                                } else {
                                                                this.message = 'Image not uploaded successfully';
                                                                }
                                                              });
        
    }*/

    createFile(email:string, file:FormData,filename:string)
    {
        console.log("form Data file name in file.service: "+filename);
        return this.http.post<File>(environment.host + '/file/create/' + email+ '/' + filename, file).subscribe(
            (res) => console.log(res),
            (err) => console.log(err)
        );
    }

    listFile(email:string)
    {
        return this.http.get<File[]>(environment.host + '/file/list/'+ email);
    }

    updateFile(fileIdentifier:string)
    {
        return this.http.get<File>(environment.host + '/file/update/' + fileIdentifier);
    }

    downloadFile(filename:string)
    {
        //get type is Bolb - not sure
        return this.http.get<any>(environment.host + '/file/downloadFile/' + filename);
    }

    deleteFile(fileIdentifier:string)
    {
        return this.http.delete(environment.host + '/file/delete/' + fileIdentifier);
    }
}