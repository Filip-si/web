package com.infomax.web.controllers.user;

import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping(value = "/user")
public class UserPanelController {

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView showProfile(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("loggedUser", principalDetailsService.getLoggedUser());
        if(principalDetailsService.getLoggedUser() != null){
            modelAndView.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
        }
        modelAndView.setViewName("user");
        return modelAndView;
    }

}
