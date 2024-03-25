package com.example.recharge.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;
    @Column(name = "p_status",nullable = false)
    private String status;
    @Column(name = "totalAmount",nullable = false)
    private Double totalAmount;
    @Column(name  ="paymentDate",nullable=false)
    private String paymentDate;
    @Column(name = "modeOfPayment")
    private String modeOfPayment;

}
