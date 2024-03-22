package com.example.recharge.Model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;
    @Column(name ="customer_name", nullable = false)
    private String customerName;
    @Column(name = "address",nullable = false)
    private String address;

}
