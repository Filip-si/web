package com.infomax.web.services;

import com.infomax.web.models.AppRole;
import com.infomax.web.models.AppUser;
import com.infomax.web.repositories.AppRoleRepository;
import com.infomax.web.repositories.AppUserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserPrincipalDetailsService {
    private final AppUserRepository appUserRepository;
    private final AppRoleRepository appRoleRepository;

    public UserPrincipalDetailsService(AppUserRepository appUserRepository, AppRoleRepository appRoleRepository) {
        this.appUserRepository = appUserRepository;
        this.appRoleRepository = appRoleRepository;
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

    public Boolean isAdmin(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth.getPrincipal() instanceof  User){
            User principal = (User) auth.getPrincipal();
            Set<AppRole> role = getLoggedUser().getAppRoles();
            if(role.contains(appRoleRepository.findById(2L))){
                return true;
            }else
                return false;

        }
        return null;
    }


}
