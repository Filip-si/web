package com.infomax.web.repositories;

import com.infomax.web.models.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

@Repository("appUserRepository")
public interface AppUserRepository extends JpaRepository<AppUser, BigInteger> {
//    List<AppUser> findByAppUserEmail(String email);
    List<AppUser> findAll();
    AppUser findByAppUserEmail(String email);
}
