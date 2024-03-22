package com.example.recharge.Model;
import jakarta.persistence.GenerationType;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.recharge.Model.Enurmate.Role;
import java.util.Collection;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name = "_user")
public class User implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(name = "email", nullable =false)
    private String email;
    @Column(name = "password", nullable =false)
    private String password;
    @Column(name = "username", nullable =false)
    private String username;
    @Column(name = "mobilenumber", nullable =false)
    private String mobilenumber;
    @Column(name = "active_account",nullable = false)
    private boolean account;
    @Enumerated(EnumType.STRING)
    private Role role;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthority();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
