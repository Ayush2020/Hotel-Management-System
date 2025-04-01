package com.itransform.hms.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "room_rates")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoomRate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
    
    private LocalDate startDate;
    
    private LocalDate endDate;
    
    private String dayOfWeek;
    
    private int maxGuests;
    
    private BigDecimal firstNightPrice;
    
    private BigDecimal extensionPrice;
    
    private boolean isActive;
    
    private String seasonName;
} 