package com.itransform.hms.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.itransform.hms.model.Guest;
import com.itransform.hms.model.Reservation;
import com.itransform.hms.model.Reservation.ReservationStatus;
import com.itransform.hms.model.Room;
import com.itransform.hms.payload.request.ReservationRequest;
import com.itransform.hms.payload.response.MessageResponse;
import com.itransform.hms.service.GuestService;
import com.itransform.hms.service.ReservationService;
import com.itransform.hms.service.RoomService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    
    @Autowired
    private GuestService guestService;
    
    @Autowired
    private RoomService roomService;

    @GetMapping
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Reservation>> getAllReservations() {
        List<Reservation> reservations = reservationService.findAll();
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> getReservationById(@PathVariable Long id) {
        Optional<Reservation> reservation = reservationService.findById(id);
        if (reservation.isPresent()) {
            return new ResponseEntity<>(reservation.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new MessageResponse("Reservation not found with id: " + id), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> createReservation(@Valid @RequestBody ReservationRequest reservationRequest) {
        try {
            Optional<Guest> guestOptional = guestService.findById(reservationRequest.getGuestId());
            if (!guestOptional.isPresent()) {
                return new ResponseEntity<>(new MessageResponse("Guest not found with id: " + reservationRequest.getGuestId()), 
                        HttpStatus.BAD_REQUEST);
            }
            
            Optional<Room> roomOptional = roomService.findById(reservationRequest.getRoomId());
            if (!roomOptional.isPresent()) {
                return new ResponseEntity<>(new MessageResponse("Room not found with id: " + reservationRequest.getRoomId()), 
                        HttpStatus.BAD_REQUEST);
            }
            
            Room room = roomOptional.get();
            
            // Check if the room is available for the requested dates
            List<Room> availableRooms = roomService.findAvailableRooms(
                    reservationRequest.getCheckInDate(), 
                    reservationRequest.getCheckOutDate());
            
            if (!availableRooms.contains(room)) {
                return new ResponseEntity<>(new MessageResponse("Room is not available for the requested dates"), 
                        HttpStatus.BAD_REQUEST);
            }
            
            Reservation reservation = new Reservation();
            reservation.setGuest(guestOptional.get());
            reservation.setRoom(room);
            reservation.setCheckInDate(reservationRequest.getCheckInDate());
            reservation.setCheckOutDate(reservationRequest.getCheckOutDate());
            reservation.setNumberOfNights(reservationRequest.getNumberOfNights());
            reservation.setNumberOfAdults(reservationRequest.getNumberOfAdults());
            reservation.setNumberOfChildren(reservationRequest.getNumberOfChildren());
            reservation.setStatus(ReservationStatus.CONFIRMED);
            reservation.setTotalAmount(reservationRequest.getTotalAmount());
            
            Reservation savedReservation = reservationService.save(reservation);
            return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
            
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse("Error creating reservation: " + e.getMessage()), 
                    HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> updateReservation(@PathVariable Long id, @Valid @RequestBody ReservationRequest reservationRequest) {
        Optional<Reservation> existingReservationOptional = reservationService.findById(id);
        
        if (!existingReservationOptional.isPresent()) {
            return new ResponseEntity<>(new MessageResponse("Reservation not found with id: " + id), 
                    HttpStatus.NOT_FOUND);
        }
        
        try {
            Optional<Guest> guestOptional = guestService.findById(reservationRequest.getGuestId());
            if (!guestOptional.isPresent()) {
                return new ResponseEntity<>(new MessageResponse("Guest not found with id: " + reservationRequest.getGuestId()), 
                        HttpStatus.BAD_REQUEST);
            }
            
            Optional<Room> roomOptional = roomService.findById(reservationRequest.getRoomId());
            if (!roomOptional.isPresent()) {
                return new ResponseEntity<>(new MessageResponse("Room not found with id: " + reservationRequest.getRoomId()), 
                        HttpStatus.BAD_REQUEST);
            }
            
            Reservation existingReservation = existingReservationOptional.get();
            
            // If the room or dates are changing, check availability
            if (!existingReservation.getRoom().getId().equals(reservationRequest.getRoomId()) ||
                !existingReservation.getCheckInDate().equals(reservationRequest.getCheckInDate()) ||
                !existingReservation.getCheckOutDate().equals(reservationRequest.getCheckOutDate())) {
                
                Room room = roomOptional.get();
                
                // Check if the room is available for the requested dates
                List<Room> availableRooms = roomService.findAvailableRooms(
                        reservationRequest.getCheckInDate(), 
                        reservationRequest.getCheckOutDate());
                
                if (!availableRooms.contains(room)) {
                    return new ResponseEntity<>(new MessageResponse("Room is not available for the requested dates"), 
                            HttpStatus.BAD_REQUEST);
                }
            }
            
            existingReservation.setGuest(guestOptional.get());
            existingReservation.setRoom(roomOptional.get());
            existingReservation.setCheckInDate(reservationRequest.getCheckInDate());
            existingReservation.setCheckOutDate(reservationRequest.getCheckOutDate());
            existingReservation.setNumberOfNights(reservationRequest.getNumberOfNights());
            existingReservation.setNumberOfAdults(reservationRequest.getNumberOfAdults());
            existingReservation.setNumberOfChildren(reservationRequest.getNumberOfChildren());
            existingReservation.setTotalAmount(reservationRequest.getTotalAmount());
            
            Reservation updatedReservation = reservationService.save(existingReservation);
            return new ResponseEntity<>(updatedReservation, HttpStatus.OK);
            
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse("Error updating reservation: " + e.getMessage()), 
                    HttpStatus.BAD_REQUEST);
        }
    }

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> updateReservationStatus(@PathVariable Long id, @RequestParam ReservationStatus status) {
        Optional<Reservation> existingReservationOptional = reservationService.findById(id);
        
        if (!existingReservationOptional.isPresent()) {
            return new ResponseEntity<>(new MessageResponse("Reservation not found with id: " + id), 
                    HttpStatus.NOT_FOUND);
        }
        
        try {
            Reservation existingReservation = existingReservationOptional.get();
            existingReservation.setStatus(status);
            
            Reservation updatedReservation = reservationService.save(existingReservation);
            return new ResponseEntity<>(updatedReservation, HttpStatus.OK);
            
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse("Error updating reservation status: " + e.getMessage()), 
                    HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER')")
    public ResponseEntity<?> deleteReservation(@PathVariable Long id) {
        try {
            reservationService.deleteById(id);
            return new ResponseEntity<>(new MessageResponse("Reservation deleted successfully"), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse("Error deleting reservation: " + e.getMessage()), 
                    HttpStatus.BAD_REQUEST);
        }
    }
    
    @GetMapping("/guest/{guestId}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Reservation>> getReservationsByGuest(@PathVariable Long guestId) {
        List<Reservation> reservations = reservationService.findByGuestId(guestId);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
    
    @GetMapping("/room/{roomId}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Reservation>> getReservationsByRoom(@PathVariable Long roomId) {
        List<Reservation> reservations = reservationService.findByRoomId(roomId);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
    
    @GetMapping("/date-range")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Reservation>> getReservationsByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {
        
        List<Reservation> reservations = reservationService.findByCheckInDateBetween(start, end);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
    
    @GetMapping("/status/{status}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Reservation>> getReservationsByStatus(@PathVariable ReservationStatus status) {
        List<Reservation> reservations = reservationService.findByStatus(status);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
    
    @GetMapping("/arrivals")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Reservation>> getExpectedArrivals(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        
        LocalDate searchDate = (date != null) ? date : LocalDate.now();
        List<Reservation> reservations = reservationService.findExpectedArrivals(searchDate);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
    
    @GetMapping("/departures")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Reservation>> getExpectedDepartures(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        
        LocalDate searchDate = (date != null) ? date : LocalDate.now();
        List<Reservation> reservations = reservationService.findExpectedDepartures(searchDate);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
} 