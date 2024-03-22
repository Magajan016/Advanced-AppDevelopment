package com.example.recharge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.example.recharge.Model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}


