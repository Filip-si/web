package com.infomax.web.services;

import com.infomax.web.models.Company;
import com.infomax.web.models.TradeFairs;
import com.infomax.web.repositories.TradeFairsRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class TradeFairsServiceImpl {
    private final TradeFairsRepository tradeFairsRepository;

    public TradeFairsServiceImpl(TradeFairsRepository tradeFairsRepository) {
        this.tradeFairsRepository = tradeFairsRepository;
    }
    //add, del, mod, display

    public void addTradeFair(String name, Set<Company> companySet){
        TradeFairs tradeFairs = new TradeFairs(name, companySet);
        tradeFairsRepository.save(tradeFairs);
    }

    public void deleteTradeFair(TradeFairs tradeFairs){
        tradeFairsRepository.delete(tradeFairs);
    }

    public void modTradeFair(){

    }

    List<TradeFairs> getAllTradeFairs(){
        return tradeFairsRepository.findAll();
    }
}
