package com.infomax.web.controllers.user;

import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.ConfigurationServiceImlp;
import com.infomax.web.services.EmailSenderImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping(value = "/user")
public class UserPanelController {

    private final UserPrincipalDetailsService principalDetailsService;
    private final AdminPanelServiceImpl adminPanelService;
    private final ConfigurationServiceImlp configurationService;
    private final EmailSenderImpl emailSender;

    public UserPanelController(UserPrincipalDetailsService principalDetailsService, AdminPanelServiceImpl adminPanelService, ConfigurationServiceImlp configurationService, EmailSenderImpl emailSender) {
        this.principalDetailsService = principalDetailsService;
        this.adminPanelService = adminPanelService;
        this.configurationService = configurationService;
        this.emailSender = emailSender;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView showProfile(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("allNews", adminPanelService.getAll());
        modelAndView.addObject("allConfigurations", configurationService.getAllConfigurations());
        if(principalDetailsService.getLoggedUser() != null){
            modelAndView.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
            modelAndView.addObject("loggedUser", principalDetailsService.getLoggedUser());
        }
        modelAndView.setViewName("user");
        return modelAndView;
    }

    @RequestMapping(value = "/delete-config/{id}", method = RequestMethod.GET)
    public String deleteConfigFromProfile(@PathVariable(name = "id") long id, Model model){
        model.addAttribute("allNews", adminPanelService.getAll());
        model.addAttribute("allConfigurations", configurationService.getAllConfigurations());
        if(principalDetailsService.getLoggedUser() != null){
            model.addAttribute("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
            model.addAttribute("loggedUser", principalDetailsService.getLoggedUser());
            configurationService.deleteConfiguration(id);
        }
        return "redirect:/user";
    }

    @RequestMapping(value = "/send-config", method = RequestMethod.POST)
    public ModelAndView sendConfig(@RequestParam(value = "email", required = false) String email, @RequestParam("subject") String subject, @RequestParam("message") String message){
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
        }
        mav.setViewName("index");
        return mav;
    }

}
