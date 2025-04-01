package com.itransform.hms.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "rooms")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(unique = true)
    private String roomNumber;

    @Enumerated(EnumType.STRING)
    private RoomType type;

    @NotNull
    private BigDecimal ratePerNight;

    @NotNull
    private BigDecimal ratePerExtension;

    private int capacity;
    
    private boolean available;
    
    private String description;
    
    public enum RoomType {
        SINGLE,
        DOUBLE,
        DELUXE,
        SUITE,
        CONFERENCE_HALL
    }
} 