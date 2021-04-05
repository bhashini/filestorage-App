import { User } from '../user.model';

export interface File {
    fileIdentifier: BigInteger;
    fileName: string;
    location:string;
    s3filename:string;
    user: User;
}