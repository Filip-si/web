package com.infomax.web.controllers;

import com.infomax.web.models.AppUser;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {


    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView showLogin(){
        ModelAndView mav = new ModelAndView();
        mav.addObject("loggedUser",principalDetailsService.getLoggedUser());
        if(principalDetailsService.getLoggedUser() != null){
            mav.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
        }
        mav.setViewName("login");
        return mav;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ModelAndView login(AppUser appUser){
        ModelAndView mav = new ModelAndView();
        return mav;
    }



}
