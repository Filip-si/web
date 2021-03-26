package com.infomax.web.services;

import com.infomax.web.models.configs.CalendarFold;

import java.util.List;

public interface ConfigurationService {
    void save(String type, String line, String width, String connect, String clock, String advert, String back, String calm,
                                String pack, String gd, String copy, String trans, String pay);

    public List<CalendarFold> getAllConfigurations();

    void deleteConfiguration(long id);
}
