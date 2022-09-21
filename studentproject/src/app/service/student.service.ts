import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../entity/student';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  registerStudentEndpoint = 'http://localhost:8083/student/saveStudent';
  getAllStudentsEndpoint = 'http://localhost:8083/student/findAllStudents';
  getStudentByNameEndpoint = 'http://localhost:8083/student/findStudentByName';
  findStudentByIdEndpoint = 'http://localhost:8083/student/findStudentByRollNo';
  updateStudentEndpoint = 'http://localhost:8083/student/updateStudent';
  deleteStudentEndpoint= 'http://localhost:8083/student/deleteStudent';
  constructor(private http: HttpClient) {}

  registerStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.registerStudentEndpoint, student);
  }

  findStudentById(rollNo: string): Observable<Student> {
    return this.http.get<Student>(this.findStudentByIdEndpoint + '/' + rollNo);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.getAllStudentsEndpoint);
  }

  getByName(student: Student): Observable<Student> {
    return this.http.get<Student>(
      this.getStudentByNameEndpoint + '/' + student.name
    );
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.updateStudentEndpoint, student);
  }

  deleteStudent(rollNo: number): Observable<Student>{
    return this.http.delete<Student>(this.deleteStudentEndpoint +'/'+ rollNo);
  }
}
