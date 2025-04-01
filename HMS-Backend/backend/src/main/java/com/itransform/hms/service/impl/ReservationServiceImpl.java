package com.itransform.hms.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.itransform.hms.model.Guest;
import com.itransform.hms.model.Reservation;
import com.itransform.hms.model.Reservation.ReservationStatus;
import com.itransform.hms.model.Room;
import com.itransform.hms.repository.GuestRepository;
import com.itransform.hms.repository.ReservationRepository;
import com.itransform.hms.repository.RoomRepository;
import com.itransform.hms.service.ReservationService;

@Service
public class ReservationServiceImpl implements ReservationService {
    
    @Autowired
    private ReservationRepository reservationRepository;
    
    @Autowired
    private GuestRepository guestRepository;
    
    @Autowired
    private RoomRepository roomRepository;
    
    @Override
    public List<Reservation> findAll() {
        return reservationRepository.findAll();
    }
    
    @Override
    public Optional<Reservation> findById(Long id) {
        return reservationRepository.findById(id);
    }
    
    @Override
    public Optional<Reservation> findByReservationCode(String reservationCode) {
        return reservationRepository.findByReservationCode(reservationCode);
    }
    
    @Override
    public List<Reservation> findByGuestId(Long guestId) {
        Optional<Guest> guest = guestRepository.findById(guestId);
        if (guest.isPresent()) {
            return reservationRepository.findByGuest(guest.get());
        }
        return List.of();
    }
    
    @Override
    public List<Reservation> findByRoomId(Long roomId) {
        Optional<Room> room = roomRepository.findById(roomId);
        if (room.isPresent()) {
            return reservationRepository.findByRoom(room.get());
        }
        return List.of();
    }
    
    @Override
    public List<Reservation> findByStatus(ReservationStatus status) {
        return reservationRepository.findByStatus(status);
    }
    
    @Override
    public List<Reservation> findByCheckInDateBetween(LocalDate start, LocalDate end) {
        return reservationRepository.findByCheckInDateBetween(start, end);
    }
    
    @Override
    public List<Reservation> findByCheckOutDateBetween(LocalDate start, LocalDate end) {
        return reservationRepository.findByCheckOutDateBetween(start, end);
    }
    
    @Override
    public List<Reservation> findExpectedArrivals(LocalDate date) {
        return reservationRepository.findExpectedArrivals(date);
    }
    
    @Override
    public List<Reservation> findExpectedDepartures(LocalDate date) {
        return reservationRepository.findExpectedDepartures(date);
    }
    
    @Override
    @Transactional
    public Reservation save(Reservation reservation) {
        if (reservation.getReservationCode() == null || reservation.getReservationCode().isEmpty()) {
            reservation.setReservationCode("RES-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        }
        return reservationRepository.save(reservation);
    }
    
    @Override
    @Transactional
    public void deleteById(Long id) {
        reservationRepository.deleteById(id);
    }
} 