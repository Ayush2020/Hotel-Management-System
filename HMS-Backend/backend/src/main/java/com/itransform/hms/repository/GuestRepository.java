package com.itransform.hms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itransform.hms.model.Guest;

@Repository
public interface GuestRepository extends JpaRepository<Guest, Long> {
    Optional<Guest> findByMemberCode(String memberCode);
    
    Optional<Guest> findByEmail(String email);
    
    Optional<Guest> findByPhoneNumber(String phoneNumber);
} 