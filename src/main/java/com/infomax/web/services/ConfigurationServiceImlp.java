package com.infomax.web.services;

import com.infomax.web.models.configs.CalendarFold;
import com.infomax.web.repositories.CalendarFoldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConfigurationServiceImlp implements ConfigurationService{
    @Autowired
    private CalendarFoldRepository calendarFoldRepository;
    @Autowired
    private UserPrincipalDetailsService userPrincipalDetailsService;

    @Override
    public void save(String type, String line, String width, String connect, String clock, String advert, String back, String calm,
                                String pack, String gd, String copy, String trans, String pay){
        CalendarFold fold = new CalendarFold(type,line,width,connect,clock,advert,back,calm,pack,gd,copy,trans,pay);
        fold.setAuthor(userPrincipalDetailsService.getLoggedUser());
        calendarFoldRepository.save(fold);
    }

    @Override
    public List<CalendarFold> getAllConfigurations() {
        if(userPrincipalDetailsService.getLoggedUser() != null){
            return calendarFoldRepository.findByAuthor_id(userPrincipalDetailsService.getLoggedUser().getId());
        }
        return null;
    }
}
