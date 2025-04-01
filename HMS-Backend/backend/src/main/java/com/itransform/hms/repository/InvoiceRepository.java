package com.itransform.hms.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itransform.hms.model.Guest;
import com.itransform.hms.model.Invoice;
import com.itransform.hms.model.Invoice.InvoiceStatus;
import com.itransform.hms.model.Reservation;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    Optional<Invoice> findByInvoiceNumber(String invoiceNumber);
    
    List<Invoice> findByGuest(Guest guest);
    
    List<Invoice> findByReservation(Reservation reservation);
    
    List<Invoice> findByStatus(InvoiceStatus status);
    
    List<Invoice> findByIssueDateBetween(LocalDate start, LocalDate end);
} 