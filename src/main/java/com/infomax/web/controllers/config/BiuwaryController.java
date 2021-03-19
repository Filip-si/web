package com.infomax.web.controllers.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/biuwary")
public class BiuwaryController {
    @RequestMapping(method = RequestMethod.GET)
    public String showBiuwary(){
        return "biuwary";
    }
}