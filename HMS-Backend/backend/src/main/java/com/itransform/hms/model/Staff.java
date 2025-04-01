package com.itransform.hms.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "staff")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String employeeCode;
    
    @NotBlank
    @Size(max = 100)
    private String name;
    
    private int age;
    
    @Size(max = 255)
    private String address;
    
    @Size(max = 20)
    private String nic;
    
    private BigDecimal salary;
    
    @Size(max = 50)
    private String occupation;
    
    @Email
    @Size(max = 50)
    private String email;
    
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
} 