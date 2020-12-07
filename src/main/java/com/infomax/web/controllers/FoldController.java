package com.infomax.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FoldController {
    @RequestMapping(value = "/dzielne", method = RequestMethod.GET)
    public ModelAndView showFold(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("dzielne");
        return mav;
    }

}
