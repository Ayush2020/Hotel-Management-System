package com.itransform.hms.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.itransform.hms.model.Reservation;
import com.itransform.hms.model.Reservation.ReservationStatus;

public interface ReservationService {
    List<Reservation> findAll();
    
    Optional<Reservation> findById(Long id);
    
    Optional<Reservation> findByReservationCode(String reservationCode);
    
    List<Reservation> findByGuestId(Long guestId);
    
    List<Reservation> findByRoomId(Long roomId);
    
    List<Reservation> findByStatus(ReservationStatus status);
    
    List<Reservation> findByCheckInDateBetween(LocalDate start, LocalDate end);
    
    List<Reservation> findByCheckOutDateBetween(LocalDate start, LocalDate end);
    
    List<Reservation> findExpectedArrivals(LocalDate date);
    
    List<Reservation> findExpectedDepartures(LocalDate date);
    
    Reservation save(Reservation reservation);
    
    void deleteById(Long id);
} 