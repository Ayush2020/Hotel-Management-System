package com.itransform.hms.controller;

import java.util.List;
import java.util.Optional;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.itransform.hms.model.Guest;
import com.itransform.hms.payload.response.MessageResponse;
import com.itransform.hms.service.GuestService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/guests")
public class GuestController {
    @Autowired
    private GuestService guestService;

    @GetMapping
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Guest>> getAllGuests() {
        List<Guest> guests = guestService.findAll();
        return new ResponseEntity<>(guests, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> getGuestById(@PathVariable Long id) {
        Optional<Guest> guest = guestService.findById(id);
        if (guest.isPresent()) {
            return new ResponseEntity<>(guest.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new MessageResponse("Guest not found with id: " + id), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> createGuest(@Valid @RequestBody Guest guest) {
        try {
            Guest savedGuest = guestService.save(guest);
            return new ResponseEntity<>(savedGuest, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse("Error saving guest: " + e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> updateGuest(@PathVariable Long id, @Valid @RequestBody Guest guest) {
        Optional<Guest> existingGuestOptional = guestService.findById(id);
        
        if (existingGuestOptional.isPresent()) {
            Guest existingGuest = existingGuestOptional.get();
            guest.setId(id);
            Guest savedGuest = guestService.save(guest);
            return new ResponseEntity<>(savedGuest, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new MessageResponse("Guest not found with id: " + id), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER')")
    public ResponseEntity<?> deleteGuest(@PathVariable Long id) {
        try {
            guestService.deleteById(id);
            return new ResponseEntity<>(new MessageResponse("Guest deleted successfully"), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse("Error deleting guest: " + e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }
    
    @GetMapping("/search")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> searchGuests(
            @RequestParam(required = false) String memberCode,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String phoneNumber) {
        
        if (memberCode != null && !memberCode.isEmpty()) {
            Optional<Guest> guest = guestService.findByMemberCode(memberCode);
            if (guest.isPresent()) {
                return new ResponseEntity<>(guest.get(), HttpStatus.OK);
            }
        }
        
        if (email != null && !email.isEmpty()) {
            Optional<Guest> guest = guestService.findByEmail(email);
            if (guest.isPresent()) {
                return new ResponseEntity<>(guest.get(), HttpStatus.OK);
            }
        }
        
        if (phoneNumber != null && !phoneNumber.isEmpty()) {
            Optional<Guest> guest = guestService.findByPhoneNumber(phoneNumber);
            if (guest.isPresent()) {
                return new ResponseEntity<>(guest.get(), HttpStatus.OK);
            }
        }
        
        return new ResponseEntity<>(new MessageResponse("No guest found with the provided search criteria"), HttpStatus.NOT_FOUND);
    }
} 