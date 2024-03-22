package com.example.recharge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.recharge.Model.Plan;


public interface PlanRepository extends JpaRepository<Plan,Long> {
    
}
