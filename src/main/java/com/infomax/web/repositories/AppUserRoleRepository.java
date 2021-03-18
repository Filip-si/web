package com.infomax.web.repositories;

import com.infomax.web.models.AppRole;
import com.infomax.web.models.AppUser;
import com.infomax.web.models.AppUserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface AppUserRoleRepository extends JpaRepository<AppUserRole, BigInteger> {
        public AppUserRole findByAppUserFkAndAppRoleFk(AppUser appUser, AppRole appRole);
        public AppUserRole findByAppUserFk(AppUser appUser);
}
