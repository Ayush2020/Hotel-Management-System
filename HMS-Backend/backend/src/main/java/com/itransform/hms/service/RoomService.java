package com.itransform.hms.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.itransform.hms.model.Room;
import com.itransform.hms.model.Room.RoomType;

public interface RoomService {
    List<Room> findAll();
    
    Optional<Room> findById(Long id);
    
    Optional<Room> findByRoomNumber(String roomNumber);
    
    List<Room> findByAvailable(boolean available);
    
    List<Room> findByType(RoomType type);
    
    List<Room> findByTypeAndAvailable(RoomType type, boolean available);
    
    List<Room> findAvailableRooms(LocalDate checkIn, LocalDate checkOut);
    
    List<Room> findAvailableRoomsByType(RoomType type, LocalDate checkIn, LocalDate checkOut);
    
    Room save(Room room);
    
    void deleteById(Long id);
} 