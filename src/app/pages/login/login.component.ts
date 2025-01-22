import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string ="";
  password: string ="";

  errorMsg : string = '';
  

  private auth = inject(AuthService)

  onSubmit(): void{
    const isUser = this.auth.login(this.email, this.password);
    if(isUser){
      this.auth.navigateUrl('/dashboard');
    }
    else{
      //Display Error on Failed.
      this.errorMsg = 'Invalid Email & Password, Please Try Again';
    }
  }
}
