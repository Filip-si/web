package com.infomax.web.services;

import com.infomax.web.dto.AppUserDTO;
import com.infomax.web.models.AppUser;

public interface AppUserService {
    AppUser save(AppUserDTO appUser);
}
