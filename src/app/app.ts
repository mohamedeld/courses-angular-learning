import { AfterViewInit, Component, ElementRef, signal, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course, COURSES } from '../data/db-data';
import { CourseCard } from './components/course-card/course-card';
import { PaymentContainerComponent } from './components/payment-container.component';
import { CreditCardComponent } from './components/credit-card.component';
import { WalletComponent } from './components/wallet.component';
import { HighlightDirective } from './directives/app-heighlighted';

@Component({
  imports: [
    RouterOutlet,
    CourseCard,
    PaymentContainerComponent,
    CreditCardComponent,
    WalletComponent,
    HighlightDirective,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  protected readonly title = signal('courses');
  courses = COURSES;

  card = viewChild(CourseCard, {
    read: ElementRef,
  });
  onViewCourse(course: Course): void {
    console.log('Selected course:', this.card());
  }
}
