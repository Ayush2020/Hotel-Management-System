package com.itransform.hms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "invoices")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String invoiceNumber;
    
    @ManyToOne
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;
    
    @ManyToOne
    @JoinColumn(name = "guest_id")
    private Guest guest;
    
    private LocalDate issueDate;
    
    private BigDecimal subtotal;
    
    private BigDecimal taxAmount;
    
    private BigDecimal totalAmount;
    
    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<InvoiceItem> items = new ArrayList<>();
    
    @Enumerated(EnumType.STRING)
    private InvoiceStatus status;
    
    public enum InvoiceStatus {
        PENDING, PAID, CANCELLED, REFUNDED
    }
} 