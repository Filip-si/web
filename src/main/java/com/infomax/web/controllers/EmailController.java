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
import org.thymeleaf.context.Context;

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

    @RequestMapping(value = "/sendmail", method = RequestMethod.GET)
    public ModelAndView getContentEmail(@RequestParam("email") String email){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        if(principalDetailsService.getLoggedUser() != null){
            mav.addObject("loggedUser",principalDetailsService.getLoggedUser());
            mav.addObject("roleUser",principalDetailsService.isAdmin());
            emailSender.sendEmail("d11","dddd");
        }else{
            emailSender.sendEmail(email,"anonim","gall");
        }
        return mav;
    }

//    @RequestMapping(value = "/index#contact", method = RequestMethod.POST)
//    public ModelAndView sendEmail(@RequestParam("email") String email,@RequestParam("subject") String subject, @RequestParam("message") String message){
////        Context context = new Context();
////        context.setVariable("header ");
//        ModelAndView mav = new ModelAndView();
//        emailSender.sendEmail(email,subject,message);
//        mav.setViewName("index");
//        return mav;
//    }
}
