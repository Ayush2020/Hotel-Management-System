package com.itransform.hms.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.itransform.hms.model.Room;
import com.itransform.hms.model.Room.RoomType;
import com.itransform.hms.repository.RoomRepository;
import com.itransform.hms.service.RoomService;

@Service
public class RoomServiceImpl implements RoomService {
    
    @Autowired
    private RoomRepository roomRepository;
    
    @Override
    public List<Room> findAll() {
        return roomRepository.findAll();
    }
    
    @Override
    public Optional<Room> findById(Long id) {
        return roomRepository.findById(id);
    }
    
    @Override
    public Optional<Room> findByRoomNumber(String roomNumber) {
        return roomRepository.findByRoomNumber(roomNumber);
    }
    
    @Override
    public List<Room> findByAvailable(boolean available) {
        return roomRepository.findByAvailable(available);
    }
    
    @Override
    public List<Room> findByType(RoomType type) {
        return roomRepository.findByType(type);
    }
    
    @Override
    public List<Room> findByTypeAndAvailable(RoomType type, boolean available) {
        return roomRepository.findByTypeAndAvailable(type, available);
    }
    
    @Override
    public List<Room> findAvailableRooms(LocalDate checkIn, LocalDate checkOut) {
        return roomRepository.findAvailableRooms(checkIn, checkOut);
    }
    
    @Override
    public List<Room> findAvailableRoomsByType(RoomType type, LocalDate checkIn, LocalDate checkOut) {
        return roomRepository.findAvailableRoomsByType(type, checkIn, checkOut);
    }
    
    @Override
    @Transactional
    public Room save(Room room) {
        return roomRepository.save(room);
    }
    
    @Override
    @Transactional
    public void deleteById(Long id) {
        roomRepository.deleteById(id);
    }
} 