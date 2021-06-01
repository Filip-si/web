package com.infomax.web.repositories;

import com.infomax.web.models.Company;
import com.infomax.web.models.TradeFairs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
//    Company findByTrade_fairs(TradeFairs tradeFairs);
}
