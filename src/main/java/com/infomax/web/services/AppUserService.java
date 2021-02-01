package com.infomax.web.services;

import com.infomax.web.dto.AppUserDTO;
import com.infomax.web.models.AppUser;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface AppUserService {
    AppUser save(AppUserDTO appUser);

    AppUser findByEmail(String email);
}
