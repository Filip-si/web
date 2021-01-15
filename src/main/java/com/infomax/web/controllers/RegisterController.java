package com.infomax.web.controllers;

import com.infomax.web.models.AppUser;
import com.infomax.web.repositories.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class RegisterController {

    @Autowired
    AppUserRepository appUserRepository;

    @GetMapping("/register")
    public String showRegistration(WebRequest request, Model model){
        AppUser appUser = new AppUser();
        model.addAttribute("appUser",appUser);
        return "register";
    }

    @PostMapping("/register")
    public ModelAndView create(@ModelAttribute("appUser") AppUser appUser, HttpServletRequest request, Errors errors){
        AppUser registered = appUserRepository.save(appUser);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("message", "account created");
        return modelAndView;
    }

//    @RequestMapping(value = "/register", method = RequestMethod.GET)
//    public ModelAndView showRegistration(){
//        ModelAndView modelAndView = new ModelAndView();
//        modelAndView.setViewName("register");
//        return modelAndView;
//    }
//
//    @RequestMapping(value = "/register", method = RequestMethod.POST)
//    public ModelAndView createAccount(Model model, AppUser appUser){
//        ModelAndView modelAndView = new ModelAndView();
//        model.addAttribute("appUser", new AppUser(appUser.getAppUserEmail(),appUser.getAppUserEncryptedPassword()));
////        modelAndView.addObject("appUser", new AppUser(appUser.getAppUserEmail(),appUser.getAppUserEncryptedPassword()));
//        modelAndView.addObject(appUser);
//        appUserRepository.save(appUser);
//        modelAndView.setViewName("register");
//
//        return modelAndView;
//    }
}

