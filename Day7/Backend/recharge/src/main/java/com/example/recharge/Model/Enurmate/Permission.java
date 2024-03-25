package com.example.recharge.Model.Enurmate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * @param permission
 */
@RequiredArgsConstructor
public enum Permission {
    
    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    USER_READ("user:read"),
    USER_UPDATE("user:update"),
    USER_DELETE("user:delete"),
    USER_CREATE("user:create");
    
    @Getter
    private final String permission;


}
