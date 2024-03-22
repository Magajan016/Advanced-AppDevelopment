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
@Table(name="plans")
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planId;
    @Column(name="plan_type",nullable=false)
    private String planType;
    @Column(name = "plan_name",nullable = false)
    private String planName;
    @Column(name = "plan_validity",nullable = false)
    private String planValidity;
    @Column(name = "plan_details",nullable = false)
    private String planDetails;
    @Column(name = "plan_price",nullable = false)
    private String planPrice;
    

}
