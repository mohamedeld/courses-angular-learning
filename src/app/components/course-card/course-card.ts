import { Component, input, output } from '@angular/core';
import { Course } from '../../../data/db-data';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-course-card',
  styleUrl: './course-card.css',
  templateUrl: './course-card.html',
})
export class CourseCard {
  readonly course = input.required<Course>();

  viewCourse = output<Course>();

  onViewCourse(): void {
    this.viewCourse.emit(this.course());
  }
}
