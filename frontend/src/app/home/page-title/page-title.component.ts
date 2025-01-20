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
  isFormVisible: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url: string = this.router.url.slice(1);
    const formAllowedPages: string[] = ['Destination', 'Tours']

    if (url.includes('-')) {
      const formattedUrl = url.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      console.log(formattedUrl);
      this.pageName = formattedUrl;
    } else {
      const formattedUrl = url.charAt(0).toUpperCase() + url.slice(1);
      console.log(formattedUrl);
      this.pageName = formattedUrl

      if (formAllowedPages.includes(this.pageName)) {
        this.isFormVisible = true;
      }



      if (this.pageName == '') {
        this.isHomePage = true;
      }
    }
  }

}
