package com.infomax.web.controllers.config;

import com.infomax.web.models.AppUser;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PlaneryController {
    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @RequestMapping(value = "/kalendarze//planery", method = RequestMethod.GET)
    public ModelAndView showPlanery(){
        ModelAndView mav = new ModelAndView();
        AppUser appUser = new AppUser();
        mav.addObject("appUser", appUser);
        mav.addObject("loggedUser", principalDetailsService.getLoggedUser());
        mav.setViewName("/kalendarze/planery");
        return mav;
    }
}
