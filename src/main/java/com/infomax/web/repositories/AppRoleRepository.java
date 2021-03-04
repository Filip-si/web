package com.infomax.web.repositories;

import com.infomax.web.models.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository("appRoleRepository")
public interface AppRoleRepository extends JpaRepository<AppRole, BigInteger> {
    AppRole findById(Long id);
}
