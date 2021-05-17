package com.infomax.web.controllers;

import com.infomax.web.services.EmailSenderImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.thymeleaf.TemplateEngine;

@Controller
public class EmailController {
    private final EmailSenderImpl emailSender;

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    private final TemplateEngine templateEngine;

    public EmailController(EmailSenderImpl emailSender, TemplateEngine templateEngine) {
        this.emailSender = emailSender;
        this.templateEngine = templateEngine;
    }

    @RequestMapping(value = "/send", method = RequestMethod.GET)
    public ModelAndView getContentEmail(@RequestParam(value = "email", required = false) String email, @RequestParam("subject") String subject, @RequestParam("message") String message){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        return mav;
    }

    @RequestMapping(value = "/send", method = RequestMethod.POST)
    public ModelAndView sendEmail(@RequestParam(value = "email", required = false) String email,@RequestParam("subject") String subject, @RequestParam("message") String message){
        ModelAndView mav = new ModelAndView();
        if(principalDetailsService.getLoggedUser() != null && email == null){
            mav.addObject("subject",subject);
            mav.addObject("message",message);
            mav.addObject("email",principalDetailsService.getLoggedUserEmail());
            mav.addObject("loggedUser",principalDetailsService.getLoggedUser());
            if(principalDetailsService.getLoggedUser() != null){
                mav.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
            }
            emailSender.sendEmail(subject,message);
        }else{
            mav.addObject("email",email);
            mav.addObject("subject",subject);
            mav.addObject("message",message);
            emailSender.sendEmail(email,subject,message);
        }
        mav.setViewName("index");
        return mav;
    }
}
