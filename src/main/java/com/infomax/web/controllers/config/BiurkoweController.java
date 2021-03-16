package com.infomax.web.controllers.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/biurkowe")
public class BiurkoweController {
    @RequestMapping(method = RequestMethod.GET)
    public String showBiurkowe(){
        return "biurkowe";
    }
}
