import { inject, Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);

  private users: User[] = [
    { id:1 , email: 'admin@gmail.com', password:'admin123', role: 'admin'  },
    { id:2 , email: 'manager@gmail.com', password:'manager123', role: 'manager'},
    { id:3 , email: 'user@gmail.com', password:'user123', role: 'user'}
  ]
  private currentUser: User | null = null;
  constructor() { }

  //Navigate to login
  login(email:string, password:string):boolean{
    const user = this.users.find(
      (singleUser) => singleUser.email === email && singleUser.password === password
    );
    if(user){
      this.currentUser = user;
      localStorage.setItem('CurrentUser', JSON.stringify(user))
      return true;
    }
    return false;
  }

   //Navigate by Url
  navigateUrl(url:string): void{
    this.router.navigateByUrl(url, {replaceUrl:true})
  }

  logOut(){
    this.currentUser = null;
    localStorage.removeItem('CurrentUser');
    this.navigateUrl('/login')
  }

  //Use For Guards
  getCurrentUser(): User | null{
    if(!this.currentUser){
      const userData = localStorage.getItem('CurrentUser');
      if(userData){
        this.currentUser = JSON.parse(userData) as User;
      }
    }
    return this.currentUser;
  }
  isAuthenticated():boolean{
    return !!this.getCurrentUser();
  }

  //Check Role
  hasRole(role: 'manager'| 'admin' | 'user'): boolean{
    return this.getCurrentUser()?.role === role;
  }

}
