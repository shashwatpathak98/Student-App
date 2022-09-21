package com.proj.student.controller;

import com.proj.student.entity.Student;
import com.proj.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService service;

    @PostMapping("/saveStudent")
    @CrossOrigin("*")
    public Student saveStudent(@RequestBody Student student){
        return service.saveStudent(student);
    }

    @PostMapping("/saveStudents")
    @CrossOrigin("*")
    public List<Student> saveStudents(@RequestBody List<Student> students){
        return service.saveStudents(students);
    }

    @GetMapping("/findAllStudents")
    @CrossOrigin("*")
    public List<Student> getAllStudents(){
        return service.getAllStudents();
    }

    @GetMapping("/findStudentByRollNo/{rollNo}")
    @CrossOrigin("*")
    public Student findStudentByRollNo(@PathVariable Long rollNo){
        return service.getStudentByRollNo(rollNo);
    }

    @GetMapping("/findStudentByName/{name}")
    @CrossOrigin("*")
    public Student findStudentByName(@PathVariable String name ){
        return service.getStudentByName(name);
    }

    @PutMapping("/updateStudent")
    @CrossOrigin("*")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student){
         try{
             service.updateStudent(student);
             return new ResponseEntity<Student>(student , HttpStatus.OK);
         }
         catch(NoSuchElementException e){
             return new ResponseEntity<Student>(student , HttpStatus.NOT_FOUND);
          }

    }

    @DeleteMapping("/deleteStudent/{rollNo}")
    @CrossOrigin("*")
    public Boolean deleteStudent(@PathVariable Long rollNo){
        return service.deleteStudent(rollNo);
    }

}
