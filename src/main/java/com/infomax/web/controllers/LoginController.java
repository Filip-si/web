package com.infomax.web.controllers;

import com.infomax.web.models.AppUser;
//import com.infomax.web.services.AppUserDetailsServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

//    @Autowired
//    private AppUserDetailsServiceImpl appUserService;

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView showLogin(){
        ModelAndView mav = new ModelAndView();
        mav.addObject("loggedUser",principalDetailsService.getLoggedUser());
        mav.addObject("roleUser",principalDetailsService.isAdmin());
        mav.setViewName("login");
        return mav;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ModelAndView login(AppUser appUser){
        ModelAndView mav = new ModelAndView();
        return mav;
    }

//    @RequestMapping(value = "/login", method = RequestMethod.POST)
//    public String login(ModelMap model, @RequestParam String email,@RequestParam String password){
//        model.put("appUserEmail", email);
//        model.put("appUserEncryptedPasswordConfirm", password);
//        return "index";
//    }


}
