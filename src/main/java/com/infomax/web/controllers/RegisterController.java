package com.infomax.web.controllers;


import com.infomax.web.dto.AppUserDTO;
import com.infomax.web.models.AppUser;

import com.infomax.web.services.AppUserDetailsServiceImpl;
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

/*    @Autowired
    private AppUserValidator appUserValidator;

    @Autowired
    private SecurityService securityService;*/

    @GetMapping("/register")
    public String showRegisterPage(Model model){
        model.addAttribute("appUser", new AppUser());
        model.addAttribute("loggedUser", principalDetailsService.getLoggedUserEmail());
        model.addAttribute("roleUser", principalDetailsService.isAdmin());
        return "register";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registration(@ModelAttribute("appUser") AppUserDTO appUser, BindingResult bindingResult, Model model){
//        appUserValidator.validate(appUser, bindingResult);


        if(bindingResult.hasErrors()){
            return "register";
        }
        try{
            appUser.setStatus("VERIFIED");
//            AppUser toRegister = new AppUser(appUser.getFirstName(),appUser.getLastName(),appUser.getAppUserEmail(),appUser.getAppUserEncryptedPassword(),
//                    appUser.getAppUserEncryptedPasswordConfirm(),appUser.getStatus());
            appUserService.save(appUser);
            model.addAttribute("message", "Account created!");
        }catch (UsernameNotFoundException exception){
            model.addAttribute("message", "error during registration process");
        }
//        securityService.autoLogin(appUser.getAppUserEmail(),appUser.getAppUserEncryptedPasswordConfirm());
        return "redirect:/index";
    }


/*    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String showRegistration(Model model){
        model.addAttribute("appUser", new AppUser());
        return "register";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registerUser(@ModelAttribute("appUser") AppUserDTO appUser, Model model){
        try{
            appUser.setStatus("VERIFIED");
            AppUser toRegister = appUserService.save(appUser);
            model.addAttribute("message", "Account created!");
        }catch (UsernameNotFoundException exception){
            model.addAttribute("message", "error during registration process");
        }
        return "register";
    }*/

//    @PostMapping("/register")
//    public String create(@ModelAttribute("appUser") AppUserDTO appUser){
//        appUserService.save(appUser);
//        return "index";
//    }

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

