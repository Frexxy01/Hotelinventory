import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hotelinventoryapp-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HoverDirective, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  name: string = ''
  password : string = ''

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    if (this.loginService.login(this.name, this.password)) {
      
      this.router.navigate(['/rooms'])
    }
  }


}
