import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})

export class PageTitleComponent implements OnInit {
  pageName: string = '';
  isHomePage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url: string = this.router.url.slice(1);

    if (url.includes('-')) {
      const formattedUrl = url.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      this.pageName = formattedUrl;
    } else {
      this.pageName = url.charAt(0).toUpperCase() + url.slice(1);

      if (this.pageName == '') {
        this.isHomePage = true;
      }
    }
  }

}
