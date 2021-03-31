package com.infomax.web.models;

import com.infomax.web.dto.AppUserDTO;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "user_role")
public class AppUserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    private AppUser appUserFk;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "role_id")
    private AppRole appRoleFk;

    public AppUserRole() {
    }

    public AppUserRole(AppUser appUserFk, AppRole appRoleFk) {
        this.appUserFk = appUserFk;
        this.appRoleFk = appRoleFk;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public AppUser getappUserFk() {
        return appUserFk;
    }

    public void setappUserFk(AppUser appUserFk) {
        this.appUserFk = appUserFk;
    }

    public AppRole getappRoleFk() {
        return appRoleFk;
    }

    public void setappRoleFk(AppRole appRoleFk) {
        this.appRoleFk = appRoleFk;
    }
}
