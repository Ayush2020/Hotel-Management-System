package com.itransform.hms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itransform.hms.model.Department;
import com.itransform.hms.model.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
    Optional<Staff> findByEmployeeCode(String employeeCode);
    
    Optional<Staff> findByEmail(String email);
    
    List<Staff> findByDepartment(Department department);
    
    List<Staff> findByOccupation(String occupation);
} 