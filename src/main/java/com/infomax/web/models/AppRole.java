package com.infomax.web.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "app_role")
public class AppRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "role_name")
    private String appRoleName;

//    @OneToMany(mappedBy = "appRole",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//    private Set<AppUser> appUser;

    public AppRole(Long id, String appRoleName) {
        this.id = id;
        this.appRoleName = appRoleName;
    }

    public AppRole(){}


    public Long getId() {
        return id;
    }

    public String getAppRoleName() {
        return appRoleName;
    }

    public void setAppRoleName(String appRoleName) {
        this.appRoleName = appRoleName;
    }
}
