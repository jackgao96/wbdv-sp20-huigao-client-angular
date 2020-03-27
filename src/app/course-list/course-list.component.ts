import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  newCourseTile = ''
  courses = []

  deleteCourse = (deletedCourse) =>
    this.courses = this.courses.filter((course => course !== deletedCourse))
  createCourse = (title) =>
    this.courses.push({_id: '321', title: title})
  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
