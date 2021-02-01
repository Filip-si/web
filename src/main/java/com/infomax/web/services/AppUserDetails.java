package com.infomax.web.services;

import com.infomax.web.models.AppUser;
import org.hibernate.mapping.Array;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

public class AppUserDetails implements UserDetails {

    private String appUserEmail;
    private String appUserEncryptedPassword;
    private List<GrantedAuthority> authorities;

    private AppUser appUser;

    public AppUserDetails(AppUser appUser){
        this.appUser = appUser;

    }

    public AppUserDetails(){
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return Arrays.asList(new SimpleGrantedAuthority("{ROLE_USER}"));
    }

    @Override
    public String getPassword() {
        return appUserEncryptedPassword;
    }

    @Override
    public String getUsername() {
        return appUserEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
