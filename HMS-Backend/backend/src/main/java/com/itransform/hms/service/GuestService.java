package com.itransform.hms.service;

import java.util.List;
import java.util.Optional;

import com.itransform.hms.model.Guest;

public interface GuestService {
    List<Guest> findAll();
    
    Optional<Guest> findById(Long id);
    
    Optional<Guest> findByMemberCode(String memberCode);
    
    Optional<Guest> findByEmail(String email);
    
    Optional<Guest> findByPhoneNumber(String phoneNumber);
    
    Guest save(Guest guest);
    
    void deleteById(Long id);
} 