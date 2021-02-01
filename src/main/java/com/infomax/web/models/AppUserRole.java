package com.infomax.web.models;

import javax.persistence.*;

@Entity
@Table(name = "user_role")
public class AppUserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private AppUser appUserId;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "role_id")
    private AppRole appRoleId;


    public AppUserRole(AppUser appUserId, AppRole appRoleId) {
        this.appUserId = appUserId;
        this.appRoleId = appRoleId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public AppUser getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(AppUser appUserId) {
        this.appUserId = appUserId;
    }

    public AppRole getAppRoleId() {
        return appRoleId;
    }

    public void setAppRoleId(AppRole appRoleId) {
        this.appRoleId = appRoleId;
    }
}
