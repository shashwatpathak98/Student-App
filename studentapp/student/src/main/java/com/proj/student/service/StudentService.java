package com.proj.student.service;


import com.proj.student.entity.Student;
import com.proj.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

   @Autowired
    StudentRepository repo;

   public Student saveStudent(Student student){
       return repo.save(student);
   }

   public List<Student> getAllStudents(){
        return repo.findAll();
   }

   public Student updateStudent(Student student){
     Student studentToUpdate = repo.findById(student.getRollNo()).orElse(null);
      if(studentToUpdate != null){
          if(student.getName()!=null) studentToUpdate.setName(student.getName());
          if(student.getStandard() !=null) studentToUpdate.setStandard(student.getStandard());
          if(studentToUpdate.getSchoolName() != null) studentToUpdate.setSchoolName(student.getSchoolName());
          repo.save(studentToUpdate);
      }
      if(studentToUpdate == null){
          return repo.save(studentToUpdate);
      }
      return studentToUpdate;
   }

   public Boolean deleteStudent(Long rollNo){
       Student studentToUpdate = repo.getReferenceById(rollNo);
       if(studentToUpdate != null){
           repo.deleteById(rollNo);
           return true;
       }
       return false;
   }

   public Student getStudentByName(String name){
       return repo.findStudentByName(name);
   }

   public Student getStudentByRollNo(Long rollNo){
       return repo.findById(rollNo).orElse(null);
   }

    public List<Student>  saveStudents(List<Student> students) {
       return repo.saveAll(students);
    }
}
