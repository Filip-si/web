package com.infomax.web.models;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "app_role")
public class AppRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "role_name")
    private String appRoleName;
    @Column(name = "role_desc")
    private String appRoleDesc;

    @OneToMany(mappedBy = "id")
    private Set<AppUser> appUsers;

/*    @OneToMany(mappedBy = "appRole", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<AppUser> appUsers;*/

    public AppRole(){}

    public AppRole(Long id, String appRoleName, String appRoleDesc) {
        this.id = id;
        this.appRoleName = appRoleName;
        this.appRoleDesc = appRoleDesc;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAppRoleName() {
        return appRoleName;
    }

    public void setAppRoleName(String appRoleName) {
        this.appRoleName = appRoleName;
    }

    public String getAppRoleDesc() {
        return appRoleDesc;
    }

    public void setAppRoleDesc(String appRoleDesc) {
        this.appRoleDesc = appRoleDesc;
    }

    public Set<AppUser> getAppUsers() {
        return appUsers;
    }

    public void setAppUsers(Set<AppUser> appUsers) {
        this.appUsers = appUsers;
    }
}
