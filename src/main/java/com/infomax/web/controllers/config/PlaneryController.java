package com.infomax.web.controllers.config;

import com.infomax.web.models.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PlaneryController {


    @RequestMapping(value = "/kalendarze//planery", method = RequestMethod.GET)
    public ModelAndView showPlanery(){
        ModelAndView mav = new ModelAndView();
        AppUser appUser = new AppUser();
        mav.addObject("appUser", appUser);
        mav.setViewName("/kalendarze/planery");
        return mav;
    }
}
