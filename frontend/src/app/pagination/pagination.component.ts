import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  pages: number[] = []

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.paginationService.currentPage$.subscribe(page => {
      this.currentPage = page;
      this.updatePages();
    });

    this.paginationService.totalPages$.subscribe(total => {
      this.totalPages = total;
      this.updatePages();
    })
  }

  updatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    this.paginationService.setCurrentPage(page);
  }

  goToNextPage(): void {
    this.paginationService.nextPage();
  }

  goToPreviousPage(): void {
    this.paginationService.previousPage();
  }

}
