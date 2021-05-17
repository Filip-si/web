package com.infomax.web.controllers;


import com.infomax.web.models.AppUser;
import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

import java.util.Base64;

@RestController
public class IndexController {

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @Autowired
    private AdminPanelServiceImpl adminPanelService;



    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView showPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("appUser", new AppUser());
        modelAndView.addObject("loggedUser", principalDetailsService.getLoggedUser());
        if(principalDetailsService.getLoggedUser() != null){
            modelAndView.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
        }
        modelAndView.addObject("allNews", adminPanelService.getAll());
        modelAndView.setViewName("index");
        return modelAndView;
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public ModelAndView showIndex(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("appUser", new AppUser());
        modelAndView.addObject("loggedUser", principalDetailsService.getLoggedUser());
        if(principalDetailsService.getLoggedUser() != null){
            modelAndView.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
        }
        modelAndView.addObject("allNews", adminPanelService.getAll());
        modelAndView.setViewName("index");
        return modelAndView;
    }

    @Transactional
    @RequestMapping(
            value = "/article/{title}",
            produces = MediaType.APPLICATION_PDF_VALUE,
            method = RequestMethod.GET)
    public ResponseEntity showPDF(HttpServletResponse response, @PathVariable("title") String title) throws IOException{
        byte[] decoder = Base64.getDecoder().decode(adminPanelService.findByTitle(title).getContent());
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_PDF).body(decoder);
    }

    @RequestMapping(value = "/login-error", method = RequestMethod.GET)
    public ModelAndView loginError(Model model){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("loggedUser",principalDetailsService.getLoggedUser());
        if(principalDetailsService.getLoggedUser() != null){
            modelAndView.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
        }
        model.addAttribute("loginError", true);
        modelAndView.setViewName("login");
        return modelAndView;
    }


    @RequestMapping(value = "/about", method = RequestMethod.GET)
    public ModelAndView showLogin(){
        ModelAndView mav = new ModelAndView();
        mav.addObject("loggedUser",principalDetailsService.getLoggedUser());
        if(principalDetailsService.getLoggedUser() != null){
            mav.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
        }
        mav.setViewName("about");
        return mav;
    }


}
