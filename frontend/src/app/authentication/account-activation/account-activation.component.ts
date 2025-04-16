import { AuthenticationService } from './../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
    selector: 'app-account-activation',
    templateUrl: './account-activation.component.html',
    styleUrls: ['./account-activation.component.css'],
    standalone: false
})
export class AccountActivationComponent {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router,
    private messageService: MessagesService
    ) { }

  ngOnInit(): void {
    const params = {
      email: this.route.snapshot.queryParams['email'],
      token: this.route.snapshot.queryParams['token']
    }
    this.authService.accountActivation(params).subscribe({
      next: response => {
        if (response.success) {
          this.messageService.showMessage('Your account has been successfully activated.', 'success');
        }

        if (response.code === 'already_verified') {
          this.messageService.showMessage('Your account is already activated. You can log in.', 'info');
        }

        this.router.navigate(['authenticate/login']);
      },
      error: error => {
        console.log(error);

        if (error.status === 404) {
          this.messageService.showMessage('Your account does not exist. Please register again.', 'error');
        }

        if (error.status === 400) {
          this.messageService.showMessage('Activation rejected. Please contact the administrator.', 'warning');
        }

        if (error.status === 500) {
          this.messageService.showMessage('Something went wrong. Please try again later.', 'info');
        }
      }
    })
  }
}
