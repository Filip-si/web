package com.infomax.web.controllers.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CalendarsController {

    @RequestMapping(value = "config-calendars" , method = RequestMethod.GET)
    public String showConfigCalendars(){

        return "config-calendars";
    }

    @RequestMapping(value = "config-calendars/save" , method = RequestMethod.POST)
    public String saveConfig(){

        return "redirect:/config-calendars";
    }
}
