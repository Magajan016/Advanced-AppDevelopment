package com.example.recharge.Model.Enurmate;

import java.util.ArrayList;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.util.List;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import static com.example.recharge.Model.Enurmate.Permission.ADMIN_READ;
import static com.example.recharge.Model.Enurmate.Permission.ADMIN_CREATE;
import static com.example.recharge.Model.Enurmate.Permission.ADMIN_UPDATE;
import static com.example.recharge.Model.Enurmate.Permission.USER_DELETE;
import static com.example.recharge.Model.Enurmate.Permission.USER_READ;
import static com.example.recharge.Model.Enurmate.Permission.USER_UPDATE;
import static com.example.recharge.Model.Enurmate.Permission.USER_CREATE;
import static com.example.recharge.Model.Enurmate.Permission.ADMIN_DELETE;

@RequiredArgsConstructor
public enum Role {
    ADMIN(Set.of(
        ADMIN_CREATE,
        ADMIN_DELETE,
        ADMIN_READ,
        ADMIN_UPDATE,
        USER_CREATE,
        USER_DELETE,
        USER_READ,
        USER_UPDATE
    )),
    USER(Set.of(
        USER_CREATE,
        USER_DELETE,
        USER_READ,
        USER_UPDATE
    ));
    @Getter
    private final Set<Permission> permissions;
    public List<SimpleGrantedAuthority> getAuthority(){
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for(Permission permission : getPermissions()){
            authorities.add(new SimpleGrantedAuthority(permission.getPermission()));
        }
        authorities.add(new SimpleGrantedAuthority("ROLE_"+this.name()));
        return authorities;
    }
}
