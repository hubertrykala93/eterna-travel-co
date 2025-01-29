import { MessagesService } from './../../../services/messages.service';
import { HomeService } from './../../../services/home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-activation',
  templateUrl: './newsletter-activation.component.html',
  styleUrls: ['./newsletter-activation.component.css']
})
export class NewsletterActivationComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService,
    private messageService: MessagesService
  ) { }

  ngOnInit(): void {
    const data = {
      email: this.route.snapshot.queryParams['email'],
      token: this.route.snapshot.queryParams['token']
    }

    this.homeService.activateNewsletter(data).subscribe({
      next: (response) => {
        console.log(response)
        if (response.code == 'activation_success') {
          this.messageService.showMessage(response.detail, 'success');
        }

        if (response.code == 'already_activated') {
          this.messageService.showMessage(response.detail, 'info');
        }

        this.router.navigateByUrl('/');
      },
      error: (error) => {
        if (error.status == 404) {
          this.messageService.showMessage('Your newsletter does not exist, please sign up again.', 'info');
        }

        if (error.status == 400) {
          this.messageService.showMessage('Failed to verify your subscription. Check the link and try again.', 'error');
        }

        if (error.status == 500) {
          this.messageService.showMessage('Something went wrong. Please try again later.', 'error')
        }

        this.router.navigateByUrl('/');
      }
    })
  }
}
