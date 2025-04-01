package com.itransform.hms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "guests")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Guest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "member_code", unique = true)
    private String memberCode;

    @NotBlank
    @Size(max = 100)
    private String name;

    @Size(max = 15)
    private String phoneNumber;

    @Size(max = 100)
    private String company;

    @Email
    @Size(max = 50)
    private String email;

    @Size(max = 10)
    private String gender;

    @Size(max = 255)
    private String address;
} 