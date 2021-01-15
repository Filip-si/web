package com.infomax.web.models;

import net.bytebuddy.implementation.bind.annotation.Default;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Set;

@Entity
@Table(name = "app_user")
public class AppUser {

    @Id
//    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "email")
    private String appUserEmail;
    @Column(name = "encrypted_password")
    private String appUserEncryptedPassword;
    @Column(name = "enabled")
    private long appUserEnabled;
/*
    @Column(name = "id_role")
*/
    public final static AppRole DEFAULT_ROLE = new AppRole(1L,"USER_ROLE");
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_role", referencedColumnName = "id"  )
    private AppRole role = DEFAULT_ROLE;

    public AppUser() {
    }

    public AppUser(String appUserEmail, String appUserEncryptedPassword) {
        this.appUserEmail = appUserEmail;
        this.appUserEncryptedPassword = appUserEncryptedPassword;
    }

    public String getAppUserEmail() {
        return appUserEmail;
    }

    public void setAppUserEmail(String appUserEmail) {
        this.appUserEmail = appUserEmail;
    }

    public String getAppUserEncryptedPassword() {
        return appUserEncryptedPassword;
    }

    public void setAppUserEncryptedPassword(String appUserEncryptedPassword) {
        this.appUserEncryptedPassword = appUserEncryptedPassword;
    }

    public long getAppUserEnabled() {
        return appUserEnabled;
    }

    public void setAppUserEnabled(long appUserEnabled) {
        this.appUserEnabled = appUserEnabled;
    }

    public AppRole getRole() {
        return role;
    }

    public void setRole(AppRole role) {
        this.role = role;
    }
}
