
export class CustomService {

    checkUserCondition(login: any): string  {
        if( login.email=="ssm@gmail.com" && login.password=="123@abc" ) {
            return "Login Successfully...Using Custom Service";
        } else {
            return "Login Failure...Using Custom Service";
        }
    }
}