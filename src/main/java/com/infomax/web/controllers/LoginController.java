package com.infomax.web.controllers;

import com.infomax.web.models.AppUser;
import com.infomax.web.services.AppUserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    private AppUserDetailsServiceImpl appUserService;

    @GetMapping(value = "/login")
    public String showLogin(Model model){

        return "login";

    }



/*    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String showLogin(Map<String, Object> model){
        AppUser appUser = new AppUser();
        model.put("appUser", appUser.getAppUserEmail());
        model.put("appUser", appUser.getAppUserEncryptedPassword());
        return "login";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(AppUser appUser){
        appUserService.loadUserByUsername(appUser.getAppUserEmail());
        return "login";
    }*/

//
//    @PostMapping("/login")
//    public String loginForm(@ModelAttribute("appUser") AppUserDTO appUser){
//        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(appUser.getAppUserEmail(),appUser.getAppUserEncryptedPassword()));
//
//        return "news";
//    }


}
