package com.infomax.web.controllers;


import com.infomax.web.dto.AppUserDTO;
import com.infomax.web.models.AppUser;

//import com.infomax.web.services.AppUserDetailsServiceImpl;
import com.infomax.web.services.AppUserServiceImpl;

import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class RegisterController {

    @Autowired
    private AppUserServiceImpl appUserService;

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @GetMapping("/register")
    public String showRegisterPage(Model model){
        model.addAttribute("appUser", new AppUser());
        model.addAttribute("loggedUser", principalDetailsService.getLoggedUserEmail());
        model.addAttribute("roleUser", principalDetailsService.isAdmin());
        return "register";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registration(@ModelAttribute("appUser") AppUserDTO appUser, BindingResult bindingResult, Model model){
        if(bindingResult.hasErrors()){
            return "register";
        }
        try{
            appUser.setStatus("VERIFIED");
            appUserService.save(appUser);
            model.addAttribute("message", "Account created!");
        }catch (UsernameNotFoundException exception){
            model.addAttribute("message", "error during registration process");
        }
        return "redirect:/index";
    }

}

