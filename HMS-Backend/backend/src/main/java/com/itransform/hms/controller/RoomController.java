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

import com.itransform.hms.model.Room;
import com.itransform.hms.model.Room.RoomType;
import com.itransform.hms.payload.response.MessageResponse;
import com.itransform.hms.service.RoomService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @GetMapping
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Room>> getAllRooms() {
        List<Room> rooms = roomService.findAll();
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<?> getRoomById(@PathVariable Long id) {
        Optional<Room> room = roomService.findById(id);
        if (room.isPresent()) {
            return new ResponseEntity<>(room.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new MessageResponse("Room not found with id: " + id), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER')")
    public ResponseEntity<?> createRoom(@Valid @RequestBody Room room) {
        try {
            Room savedRoom = roomService.save(room);
            return new ResponseEntity<>(savedRoom, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse("Error saving room: " + e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER')")
    public ResponseEntity<?> updateRoom(@PathVariable Long id, @Valid @RequestBody Room room) {
        Optional<Room> existingRoomOptional = roomService.findById(id);
        
        if (existingRoomOptional.isPresent()) {
            room.setId(id);
            Room savedRoom = roomService.save(room);
            return new ResponseEntity<>(savedRoom, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new MessageResponse("Room not found with id: " + id), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER')")
    public ResponseEntity<?> deleteRoom(@PathVariable Long id) {
        try {
            roomService.deleteById(id);
            return new ResponseEntity<>(new MessageResponse("Room deleted successfully"), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new MessageResponse("Error deleting room: " + e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }
    
    @GetMapping("/available")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Room>> getAvailableRooms(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut) {
        
        List<Room> availableRooms = roomService.findAvailableRooms(checkIn, checkOut);
        return new ResponseEntity<>(availableRooms, HttpStatus.OK);
    }
    
    @GetMapping("/available/{type}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Room>> getAvailableRoomsByType(
            @PathVariable RoomType type,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut) {
        
        List<Room> availableRooms = roomService.findAvailableRoomsByType(type, checkIn, checkOut);
        return new ResponseEntity<>(availableRooms, HttpStatus.OK);
    }
    
    @GetMapping("/type/{type}")
    @PreAuthorize("hasRole('OWNER') or hasRole('MANAGER') or hasRole('RECEPTIONIST')")
    public ResponseEntity<List<Room>> getRoomsByType(@PathVariable RoomType type) {
        List<Room> rooms = roomService.findByType(type);
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }
} 