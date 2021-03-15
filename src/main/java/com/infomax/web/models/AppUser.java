package com.infomax.web.models;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "app_user")
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String appUserEmail;
    @Column(name = "encrypted_password")
    private String appUserEncryptedPassword;
    @Column(name = "encrypted_password_confirm")
    private String appUserEncryptedPasswordConfirm;
    @Column(name = "status")
    private String status;

    @OneToMany(mappedBy = "id")
    private Set<AppRole> appRoles;

    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL)
    private Set<Article> article;

    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL)
    private Set<Advert> adverts;


    public AppUser() {
    }

    public AppUser(long id, String firstName, String lastName, String appUserEmail, String appUserEncryptedPassword, String appUserEncryptedPasswordConfirm, String status) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.appUserEmail = appUserEmail;
        this.appUserEncryptedPassword = appUserEncryptedPassword;
        this.appUserEncryptedPasswordConfirm = appUserEncryptedPasswordConfirm;
        this.status = status;
    }

    public AppUser(String firstName, String lastName, String appUserEmail, String appUserEncryptedPassword, String appUserEncryptedPasswordConfirm, String status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.appUserEmail = appUserEmail;
        this.appUserEncryptedPassword = appUserEncryptedPassword;
        this.appUserEncryptedPasswordConfirm = appUserEncryptedPasswordConfirm;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAppUserEncryptedPasswordConfirm() {
        return appUserEncryptedPasswordConfirm;
    }

    public void setAppUserEncryptedPasswordConfirm(String appUserEncryptedPasswordConfirm) {
        this.appUserEncryptedPasswordConfirm = appUserEncryptedPasswordConfirm;
    }

    public Set<AppRole> getAppRoles() {
        return appRoles;
    }

    public void setAppRoles(Set<AppRole> appRoles) {
        this.appRoles = appRoles;
    }
}
