package com.infomax.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Controller
public class IndexController {
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public ModelAndView showIndex(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        return modelAndView;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView showLogin(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }

    @RequestMapping(value = "/login-error")
    public ModelAndView loginError(Model model){
        ModelAndView modelAndView = new ModelAndView();
        model.addAttribute("loginError", true);
        modelAndView.setViewName("login");
        return modelAndView;
    }





}
