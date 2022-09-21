import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entity/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-details-view',
  templateUrl: './student-details-view.component.html',
  styleUrls: ['./student-details-view.component.css'],
})
export class StudentDetailsViewComponent implements OnInit {
  students!: Student[];
  constructor(private studentService: StudentService) {
    this.students = [];
  }

  ngOnInit(): void {
    console.log(this.students);
    this.studentService.getAllStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
        //console.log(this.students);
      },
    });
  }

  onDelete(rollNo: number): void {
    this.studentService.deleteStudent(rollNo).subscribe({
      next: () => {
        alert('Student Deleted Successfully!');
        this.studentService.getAllStudents().subscribe({
          next: (data: Student[]) => {
            this.students = data;

          },
        });
      },
    });
  }
}
