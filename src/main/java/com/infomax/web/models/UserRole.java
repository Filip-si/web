/*
package com.infomax.web.models;

import javax.persistence.*;

@Entity
@Table(name = "user_role")
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Long appUserId;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Long appRoleId;

    public UserRole(Long id, Long appUserId, Long appRoleId) {
        this.id = id;
        this.appUserId = appUserId;
        this.appRoleId = appRoleId;
    }

    public Long getId() {
        return id;
    }

    public Long getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(Long appUserId) {
        this.appUserId = appUserId;
    }

    public Long getAppRoleId() {
        return appRoleId;
    }

    public void setAppRoleId(Long appRoleId) {
        this.appRoleId = appRoleId;
    }
}
*/
