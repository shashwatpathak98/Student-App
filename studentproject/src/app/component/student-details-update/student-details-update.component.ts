import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/entity/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-details-update',
  templateUrl: './student-details-update.component.html',
  styleUrls: ['./student-details-update.component.css']
})
export class StudentDetailsUpdateComponent implements OnInit {

  student!: Student;

  constructor(private router: Router, private activatedRoute : ActivatedRoute,private studentService: StudentService) {
    this.student = new Student();
  }

  ngOnInit(): void {
    console.log('update component loaded')
       this.activatedRoute.queryParams.subscribe(params=> {
           const rollNo = params['rollNo'];
           console.log('params',params);
           this.studentService.findStudentById(rollNo).subscribe(
            { next: (data)=>{
              console.log(data);
              this.student = data;

            } }
           )
       })
      }
    
  onSubmit(): void{
    console.log(this.student);
    this.studentService.updateStudent(this.student).subscribe({
      next: () => {
          this.goToDetailsPage();
        },

        error :(error) =>{
          console.log(error);
          alert('Something went wrong during student registration update!');
        },
    });
  }
  goToDetailsPage(): void {
     alert('Update done successfully!');
     this.router.navigate(['/display-student']);
  }
  

}
