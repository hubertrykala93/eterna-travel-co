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
        this.router.navigateByUrl('/');
        this.messageService.showMessage(response.detail, 'warning');
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
