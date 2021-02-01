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

import java.util.HashSet;

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
    public AppUser save(AppUserDTO registrationDTO) {
        registrationDTO.setAppUserEncryptedPassword(bCryptPasswordEncoder.encode(registrationDTO.getAppUserEncryptedPassword()));
        AppUser appUser = new AppUser(registrationDTO.getFirstName(),registrationDTO.getLastName(),registrationDTO.getAppUserEmail(),
                bCryptPasswordEncoder.encode(registrationDTO.getAppUserEncryptedPassword()), bCryptPasswordEncoder.encode(registrationDTO.getAppUserEncryptedPasswordConfirm()), registrationDTO.getStatus());
        AppRole role = appRoleRepository.findById((long) 1);
        AppUserRole roleUser = new AppUserRole(appUser,role);// może trzeba przekazać id getID
        appUserRoleRepository.save(roleUser);
        return appUserRepository.save(appUser);
    }

    @Override
    public AppUser findByEmail(String email) {
        return appUserRepository.findByAppUserEmail(email);
    }

    /*    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public AppUserDetailsServiceImpl(AppUserRepository appUserRepository){
        super();
        this.appUserRepository = appUserRepository;
    }*/


/*    @Override
    public AppUser save(AppUserDTO registrationDTO) {
        AppUser appUser = new AppUser(registrationDTO.getFirstName(),registrationDTO.getLastName(),registrationDTO.getAppUserEmail(),
                                        passwordEncoder.encode(registrationDTO.getAppUserEncryptedPassword()),registrationDTO.getStatus());
        return appUserRepository.save(appUser);
    }*/

/*    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final Optional<AppUser> optionalAppUser = appUserRepository.findByAppUserEmail(email);
        if(optionalAppUser.isPresent()){
            return (UserDetails) optionalAppUser.get();
        }else {
            throw new UsernameNotFoundException(MessageFormat.format("User with email {0} cannot be found", email));
        }
    }*/
}
