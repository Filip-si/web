package com.infomax.web.controllers;

import com.infomax.web.models.AppUser;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;
import javax.persistence.Access;
import java.util.Properties;

@Controller
public class IndexController {
    @Autowired

    private UserPrincipalDetailsService principalDetailsService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView showPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        modelAndView.addObject("loggedUser",principalDetailsService.getLoggedUser());
        modelAndView.addObject("roleUser",principalDetailsService.isAdmin());
        return modelAndView;
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public ModelAndView showIndex(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        modelAndView.addObject("loggedUser",principalDetailsService.getLoggedUser());
        modelAndView.addObject("roleUser",principalDetailsService.isAdmin());
        return modelAndView;
    }

    @RequestMapping(value = "/login-error", method = RequestMethod.GET)
    public ModelAndView loginError(Model model){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("loggedUser",principalDetailsService.getLoggedUser());
        modelAndView.addObject("roleUser",principalDetailsService.isAdmin());
        model.addAttribute("loginError", true);
        modelAndView.setViewName("login");
        return modelAndView;
    }

//

}
