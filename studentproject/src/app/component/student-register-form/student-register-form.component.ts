import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/entity/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css'],
})
export class StudentRegisterFormComponent implements OnInit {
  student!: Student;
  studentList !: Student[];

  constructor(private router: Router, private studentService: StudentService) {
    this.student = new Student();
    this.studentList =[];
  }

  ngOnInit(): void {
    console.log('fetching student list')
    this.studentService.getAllStudents().subscribe(
      {
        next: (studentList) =>{ 
          console.log('studentList: ', studentList);
          this.studentList = studentList.map((stu: Student) => stu);
        },

        error: (error) => { 
          alert('Something went wrong during registering student!');
          console.log(error);
        },
      });
      }
    
  onSubmit(): void{
    console.log(this.student);
    this.studentService.registerStudent(this.student).subscribe({
      next: () => {
          this.updateStudentRegistration();
          this.goToHomePage();
        },

        error :(error) =>{
          console.log(error);
          alert('Something went wrong during student registration!');
        },
    });
  }
  goToHomePage(): void {
     alert('Registration done successfully!');
     this.router.navigate(['/homepage']);
  }
  updateStudentRegistration() :void {
    this.studentService.findStudentById(this.student.schoolName).subscribe({
      next: (stuToUpdate) => {
        if(stuToUpdate){
          stuToUpdate.studentNumber += 1;
          console.log('StuUpdate: ', stuToUpdate);
          this.studentService.updateStudent(stuToUpdate).subscribe({
            next: (data) => console.log('Updated: ', data),
            error: (error) => console.log(error),
          
          });
        }
      },

    });
  }

  }

