package com.example.recharge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.recharge.Model.Addon;

public interface AddonRepository extends JpaRepository<Addon,Long>{
    
}
