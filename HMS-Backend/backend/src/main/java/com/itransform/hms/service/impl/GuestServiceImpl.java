package com.itransform.hms.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.itransform.hms.model.Guest;
import com.itransform.hms.repository.GuestRepository;
import com.itransform.hms.service.GuestService;

@Service
public class GuestServiceImpl implements GuestService {
    
    @Autowired
    private GuestRepository guestRepository;
    
    @Override
    public List<Guest> findAll() {
        return guestRepository.findAll();
    }
    
    @Override
    public Optional<Guest> findById(Long id) {
        return guestRepository.findById(id);
    }
    
    @Override
    public Optional<Guest> findByMemberCode(String memberCode) {
        return guestRepository.findByMemberCode(memberCode);
    }
    
    @Override
    public Optional<Guest> findByEmail(String email) {
        return guestRepository.findByEmail(email);
    }
    
    @Override
    public Optional<Guest> findByPhoneNumber(String phoneNumber) {
        return guestRepository.findByPhoneNumber(phoneNumber);
    }
    
    @Override
    @Transactional
    public Guest save(Guest guest) {
        if (guest.getMemberCode() == null || guest.getMemberCode().isEmpty()) {
            guest.setMemberCode("G-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        }
        return guestRepository.save(guest);
    }
    
    @Override
    @Transactional
    public void deleteById(Long id) {
        guestRepository.deleteById(id);
    }
} 