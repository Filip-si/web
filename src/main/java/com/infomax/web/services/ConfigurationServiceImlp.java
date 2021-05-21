package com.infomax.web.services;

import com.infomax.web.models.configs.CalendarFold;
import com.infomax.web.repositories.CalendarFoldRepository;
import javassist.NotFoundException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public JSONObject saveConfigFoldJSON(String type, String line, String width, String connect, String clock, String advert, String back, String calm,
                               String pack, String gd, String copy, String trans, String pay){
        JSONObject foldObject = new JSONObject();
        foldObject.put("Typ kalendarze", type);
        foldObject.put("Linia", line);
        foldObject.put("Szerokość", width);
        foldObject.put("Lączenie", connect);
        foldObject.put("Mechanizm zegarowy", clock);
        foldObject.put("Wdruk reklamowy", advert);
        foldObject.put("Kolor plecek", back);
        foldObject.put("Kalendarium", calm);
        foldObject.put("Opakowanie", pack);
        foldObject.put("Opracowanie graficzne", gd);
        foldObject.put("Odbitka produkcyjna", copy);
        foldObject.put("Transport", trans);
        foldObject.put("Płatność", pay);
        System.out.println(foldObject.toString());
        return foldObject;
    }

    @Override
    public List<CalendarFold> getAllConfigurations() {
        if(userPrincipalDetailsService.getLoggedUser() != null){
            return calendarFoldRepository.findByAuthor_id(userPrincipalDetailsService.getLoggedUser().getId());
        }
        return null;
    }

    @Override
    public void deleteConfiguration(long id){
        CalendarFold toDelete = calendarFoldRepository.findById(id);
        calendarFoldRepository.delete(toDelete);
    }
}
