package com.proj.student.entity;


import com.netflix.discovery.converters.Auto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
     @Id
//     @GeneratedValue(strategy=GenerationType.AUTO)
     Long rollNo;
     String name;
     String standard;
     String schoolName;


}
