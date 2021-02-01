package com.infomax.web.dto;

import com.infomax.web.models.AppRole;
import com.sun.istack.NotNull;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Set;

@Component
public class AppUserDTO {

    private long id;

    @NotNull
    private String appUserEmail;

    @NotNull
    private String firstName;
    private String lastName;
    private String appUserEncryptedPassword;
    private String appUserEncryptedPasswordConfirm;
    private String status;
    private AppRole role;


    public AppUserDTO() {
    }

    public AppUserDTO(String appUserEmail, String firstName, String lastName, String appUserEncryptedPassword, String appUserEncryptedPasswordConfirm, String status, AppRole role) {
        this.appUserEmail = appUserEmail;
        this.firstName = firstName;
        this.lastName = lastName;
        this.appUserEncryptedPassword = appUserEncryptedPassword;
        this.appUserEncryptedPasswordConfirm = appUserEncryptedPasswordConfirm;
        this.status = status;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAppUserEmail() {
        return appUserEmail;
    }

    public void setAppUserEmail(String appUserEmail) {
        this.appUserEmail = appUserEmail;
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

    public String getAppUserEncryptedPassword() {
        return appUserEncryptedPassword;
    }

    public void setAppUserEncryptedPassword(String appUserEncryptedPassword) {
        this.appUserEncryptedPassword = appUserEncryptedPassword;
    }

    public String getAppUserEncryptedPasswordConfirm() {
        return appUserEncryptedPasswordConfirm;
    }

    public void setAppUserEncryptedPasswordConfirm(String appUserEncryptedPasswordConfirm) {
        this.appUserEncryptedPasswordConfirm = appUserEncryptedPasswordConfirm;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public AppRole getRole() {
        return role;
    }

    public void setRole(AppRole role) {
        this.role = role;
    }
}
