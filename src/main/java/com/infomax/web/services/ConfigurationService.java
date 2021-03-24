package com.infomax.web.services;

import com.infomax.web.models.configs.CalendarFold;

public interface ConfigurationService {
    void save(String type, String line, String width, String connect, String clock, String advert, String back, String calm,
                                String pack, String gd, String copy, String trans, String pay);
}
