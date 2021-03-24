package com.infomax.web.services;

import com.infomax.web.dto.AppUserDTO;
import com.infomax.web.models.AppUser;

public interface AppUserService {
    void save(AppUserDTO appUser);
}
