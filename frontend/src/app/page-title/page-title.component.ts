import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments';

@Component({
    selector: 'app-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.css'],
    standalone: false
})

export class PageTitleComponent implements OnInit {
  pageName: string = '';
  pageUrl: string = '';
  isHomePage: boolean = false;
  isFormVisible: boolean = false;
  heroImageUrl: string = environment.mediaUrl + 'home/hero-image.jpg';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url: string = this.router.url.slice(1);

    if (url.includes('authenticate')) {
      this.pageName = 'Authenticate';
      this.pageUrl = 'Authenticate';
    }

    if (url == '') {
      this.isHomePage = true;
    }

    if ( url.split('/').length == 1 && (url.includes('destination') || url == '')) {
      this.isFormVisible = true;
    };

    const splittedUrl = url.split('/');

    if (splittedUrl.length == 1) {
      if (splittedUrl.toString().includes('-')) {
        const words = splittedUrl.toString().split('-');
        const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))

        this.pageName = formattedWords.join(' ');
        this.pageUrl = this.pageName;

      } else {
        this.pageName = splittedUrl.toString().charAt(0).toUpperCase() + splittedUrl.toString().slice(1);

        this.pageUrl = this.pageName;
      }
    }

    if (splittedUrl.length == 2) {

    }

    if (splittedUrl.length == 3) {
      if (splittedUrl[0] = 'blog') {
        const filteredUrl = splittedUrl.filter((_, i) => i != 1)
        const cleanedUrl: string[] = [];

        filteredUrl.map(segment => {
          if (segment.includes('-')) {
            cleanedUrl.push(segment.replace('-',' '));
          } else {
            cleanedUrl.push(segment);
          }
        })

        this.pageUrl = cleanedUrl[0].charAt(0).toUpperCase() + cleanedUrl[0].slice(1);

        if (splittedUrl[1] == 'tag') {
          this.pageName = 'Tag: ' +  cleanedUrl[1].split(' ').map(
            word => word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
        } else if (splittedUrl[1] == 'category') {
          this.pageName = 'Category: ' +  cleanedUrl[1].split(' ').map(
            word => word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
        }
      }
    }
  }

}
