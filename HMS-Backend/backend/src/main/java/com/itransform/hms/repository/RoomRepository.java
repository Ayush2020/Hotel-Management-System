package com.itransform.hms.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.itransform.hms.model.Room;
import com.itransform.hms.model.Room.RoomType;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    Optional<Room> findByRoomNumber(String roomNumber);
    
    List<Room> findByAvailable(boolean available);
    
    List<Room> findByType(RoomType type);
    
    List<Room> findByTypeAndAvailable(RoomType type, boolean available);
    
    @Query("SELECT r FROM Room r WHERE r.id NOT IN " +
           "(SELECT res.room.id FROM Reservation res " +
           "WHERE (res.checkInDate <= ?2 AND res.checkOutDate >= ?1) " +
           "AND res.status NOT IN ('CANCELLED', 'CHECKED_OUT'))")
    List<Room> findAvailableRooms(LocalDate checkIn, LocalDate checkOut);
    
    @Query("SELECT r FROM Room r WHERE r.type = ?1 AND r.id NOT IN " +
           "(SELECT res.room.id FROM Reservation res " +
           "WHERE (res.checkInDate <= ?3 AND res.checkOutDate >= ?2) " +
           "AND res.status NOT IN ('CANCELLED', 'CHECKED_OUT'))")
    List<Room> findAvailableRoomsByType(RoomType type, LocalDate checkIn, LocalDate checkOut);
} 