package com.infomax.web.services;

import com.infomax.web.models.AppRole;
import com.infomax.web.models.AppUser;
import com.infomax.web.repositories.AppRoleRepository;
import com.infomax.web.repositories.AppUserRepository;
import com.infomax.web.repositories.AppUserRoleRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
public class UserPrincipalDetailsService {
    private final AppUserRepository appUserRepository;
    private final AppRoleRepository appRoleRepository;
    private final AppUserRoleRepository appUserRoleRepository;

    public UserPrincipalDetailsService(AppUserRepository appUserRepository, AppRoleRepository appRoleRepository, AppUserRoleRepository appUserRoleRepository) {
        this.appUserRepository = appUserRepository;
        this.appRoleRepository = appRoleRepository;
        this.appUserRoleRepository = appUserRoleRepository;
    }

    public boolean isAdmin(Long id){
        AppUser appUser = appUserRepository.findById(id);
        AppRole appRole = appRoleRepository.findById(2L);
        if(appUserRoleRepository.findByAppUserFkAndAppRoleFk(appUser,appRole) != null){
            return true;
        }else
            return false;

    }

    public String getLoggedUserEmail(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth.getPrincipal() instanceof User){
            User principal = (User) auth.getPrincipal();
            return principal.getUsername();
        }else{
            return null;
        }
    }

    public AppUser getLoggedUser(){
        String login = getLoggedUserEmail();
        return appUserRepository.findByAppUserEmail(login);
    }



}
