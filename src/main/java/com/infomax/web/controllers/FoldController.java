package com.infomax.web.controllers;

import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FoldController {
    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @RequestMapping(value = "/dzielne", method = RequestMethod.GET)
    public ModelAndView showFold(){
        ModelAndView mav = new ModelAndView();
        mav.addObject("loggedUser",principalDetailsService.getLoggedUser());
        mav.addObject("roleUser",principalDetailsService.isAdmin());
        mav.setViewName("dzielne");
        return mav;
    }

}
