package com.infomax.web.controllers.config;

import com.infomax.web.models.AppUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BiurkoweController {
    @RequestMapping(value = "/biurkowe", method = RequestMethod.GET)
    public ModelAndView showBiurkowe(){
        ModelAndView mav = new ModelAndView();
        AppUser appUser = new AppUser();
        mav.addObject("appUser", appUser);
        mav.setViewName("biurkowe");
        return mav;
    }
}
