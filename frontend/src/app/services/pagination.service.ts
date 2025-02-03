import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private currentPageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private totalPagesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  currentPage$ = this.currentPageSubject.asObservable();
  totalPages$ = this.totalPagesSubject.asObservable();

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
  }

  setTotalPages(total: number): void {
    this.totalPagesSubject.next(total);
  }

  nextPage(): void {
    const nextPage = this.currentPageSubject.value + 1;

    if (nextPage <= this.totalPagesSubject.value) {
      this.currentPageSubject.next(nextPage);
    }
  }

  previousPage(): void {
    const previousPage = this.currentPageSubject.value - 1;

    if (previousPage >= 1) {
      this.currentPageSubject.next(previousPage);
    }
  }
}
