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
@Table(name="addon_plans")
public class Addon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addonId;
    @Column(name = "addon_name",nullable = false)
    private String addonName;
    @Column(name = "addonPrice",nullable = false)
    private String addonPrice;
    @Column(name = "addon_details",nullable = false)
    private String addonDetails;
    @Column(name ="addon_validity",nullable = false)
    private String addonValidity;
}
