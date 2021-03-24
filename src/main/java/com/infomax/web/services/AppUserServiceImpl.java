package com.infomax.web.services;

import com.infomax.web.dto.AppUserDTO;
import com.infomax.web.models.AppRole;
import com.infomax.web.models.AppUser;
import com.infomax.web.models.AppUserRole;
import com.infomax.web.repositories.AppRoleRepository;
import com.infomax.web.repositories.AppUserRepository;
import com.infomax.web.repositories.AppUserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AppUserServiceImpl implements AppUserService{
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private AppRoleRepository appRoleRepository;
    @Autowired
    private AppUserRoleRepository appUserRoleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @Override
    public void save(AppUserDTO registrationDTO) {
        registrationDTO.setAppUserEncryptedPassword(bCryptPasswordEncoder.encode(registrationDTO.getAppUserEncryptedPassword()));
        AppUser appUser = new AppUser(registrationDTO.getFirstName(),
                registrationDTO.getLastName(),
                registrationDTO.getAppUserEmail(),
                bCryptPasswordEncoder.encode(registrationDTO.getAppUserEncryptedPassword()),
                bCryptPasswordEncoder.encode(registrationDTO.getAppUserEncryptedPasswordConfirm()),
                registrationDTO.getStatus());
        AppRole role = appRoleRepository.findById((long) 1);
        appUserRepository.save(appUser);
        AppUserRole roleUser = new AppUserRole(appUser,role);
        appUserRoleRepository.save(roleUser);
    }
}
