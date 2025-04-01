package com.itransform.hms.payload.request;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReservationRequest {
    @NotNull
    private Long guestId;
    
    @NotNull
    private Long roomId;
    
    @NotNull
    private LocalDate checkInDate;
    
    @NotNull
    private LocalDate checkOutDate;
    
    @Min(1)
    private int numberOfNights;
    
    @Min(1)
    private int numberOfAdults;
    
    private int numberOfChildren;
    
    @NotNull
    private BigDecimal totalAmount;
} 