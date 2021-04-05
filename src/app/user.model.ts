import { File } from '../app/file.model';

export interface User{
    email:string;
    password:string;
    name:string;
    bname:string;
    files:File[];

}