package com.infomax.web.repositories;

import com.infomax.web.models.Advert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvertRepository extends JpaRepository<Advert,Long> {
    Advert findByName(String name);
}
