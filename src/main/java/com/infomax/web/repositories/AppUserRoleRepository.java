package com.infomax.web.repositories;

import com.infomax.web.models.AppRole;
import com.infomax.web.models.AppUser;
import com.infomax.web.models.AppUserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface AppUserRoleRepository extends JpaRepository<AppUserRole, BigInteger> {
        public AppUserRole findByAppUserFkAndAppRoleFk(AppUser appUser, AppRole appRole);
}
