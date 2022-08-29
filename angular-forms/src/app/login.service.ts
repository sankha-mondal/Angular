import { Injectable } from "@angular/core";


@Injectable()
export class LoginService {

    checkUserCondition(login: any): string {
        if( login.email=="ssm@gmail.com" && login.password=="123@abc" ) {
            return "Login Successfully...Using IOC & DI"; 
        } else {
            return "Login Failure...Using IOC & DI";
        }
    }
}

/*
    Angular support only one type of DI ie constractor based DI.
    IOC means use it & leave it.
    If we want to achieve DI and IOC in Angular frameword:-
    Step 1: We have to make normal ts class with set of business method and on that class
            we have to use decorator as @Injectable()
    Step 2: This class default we have to register in app.module.ts file in
            provides Selection[Symbol] ie providers: [LoginService]
    Step 3: Inside the component we have to pull the object using Constractor 
            like constructor(public ls: LoginService).
*/