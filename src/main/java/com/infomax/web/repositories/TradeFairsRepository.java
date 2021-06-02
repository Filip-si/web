package com.infomax.web.repositories;

import com.infomax.web.models.TradeFairs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeFairsRepository extends JpaRepository<TradeFairs, Long> {
    TradeFairs findByName(String name);

}
