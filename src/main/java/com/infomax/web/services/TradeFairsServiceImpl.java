package com.infomax.web.services;

import com.infomax.web.models.TradeFairs;
import com.infomax.web.repositories.TradeFairsRepository;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class TradeFairsServiceImpl {
    private final TradeFairsRepository tradeFairsRepository;

    public TradeFairsServiceImpl(TradeFairsRepository tradeFairsRepository) {
        this.tradeFairsRepository = tradeFairsRepository;
    }

    public List<TradeFairs> getAll(){
        return tradeFairsRepository.findAll();
    }

    public TradeFairs findByName(String name){
        return tradeFairsRepository.findByName(name);
    }
}
