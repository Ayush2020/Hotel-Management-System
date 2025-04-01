package com.itransform.hms.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.itransform.hms.model.Guest;
import com.itransform.hms.model.Reservation;
import com.itransform.hms.model.Reservation.ReservationStatus;
import com.itransform.hms.model.Room;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Optional<Reservation> findByReservationCode(String reservationCode);
    
    List<Reservation> findByGuest(Guest guest);
    
    List<Reservation> findByRoom(Room room);
    
    List<Reservation> findByStatus(ReservationStatus status);
    
    List<Reservation> findByCheckInDateBetween(LocalDate start, LocalDate end);
    
    List<Reservation> findByCheckOutDateBetween(LocalDate start, LocalDate end);
    
    @Query("SELECT r FROM Reservation r WHERE r.checkInDate = ?1 AND r.status = 'CONFIRMED'")
    List<Reservation> findExpectedArrivals(LocalDate date);
    
    @Query("SELECT r FROM Reservation r WHERE r.checkOutDate = ?1 AND r.status = 'CHECKED_IN'")
    List<Reservation> findExpectedDepartures(LocalDate date);
    
    @Query("SELECT r FROM Reservation r WHERE r.guest.id = ?1 AND r.status IN ('CONFIRMED', 'CHECKED_IN')")
    List<Reservation> findActiveReservationsByGuest(Long guestId);
} 