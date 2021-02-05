package com.infomax.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AdminController {


    @RequestMapping(value = "/admin-panel",method = RequestMethod.GET)
    public ModelAndView showAdminPanel(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("admin-panel");

        return mav;
    }

    @RequestMapping(value = "/add-news",method = RequestMethod.POST)
    public ModelAndView addNews(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("admin-panel");

        return mav;
    }

    @RequestMapping(value = "/delete-news",method = RequestMethod.POST)
    public ModelAndView deleteNews(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("admin-panel");

        return mav;
    }

}
