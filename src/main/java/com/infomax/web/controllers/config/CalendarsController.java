package com.infomax.web.controllers.config;

import com.infomax.web.models.AppUser;
import com.infomax.web.models.configs.CalendarFold;
import com.infomax.web.services.ConfigurationServiceImlp;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CalendarsController {
    @Autowired
    private ConfigurationServiceImlp configurationServiceImlp;
    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @RequestMapping(value = "/kalendarze//dzielne", method = RequestMethod.GET)
    public ModelAndView showConfigCalendars(){
        ModelAndView mav = new ModelAndView();
        CalendarFold calendarFold = new CalendarFold();
        mav.addObject("calendarFold", calendarFold);
        AppUser appUser = new AppUser();
        mav.addObject("appUser", appUser);
        mav.addObject("loggedUser", principalDetailsService.getLoggedUser());
        mav.setViewName("/kalendarze/dzielne");
        return mav;
    }

    @RequestMapping(value = "/dzielne", method = RequestMethod.GET)
    public ModelAndView showDzielne(){
        ModelAndView mav = new ModelAndView();
        CalendarFold calendarFold = new CalendarFold();
        mav.addObject("calendarFold", calendarFold);
        AppUser appUser = new AppUser();
        mav.addObject("appUser", appUser);
        mav.addObject("loggedUser", principalDetailsService.getLoggedUser());
        mav.setViewName("dzielne");
        return mav;
    }

    @RequestMapping(value = "/dzielne/save-fold", method = RequestMethod.POST)
    public String saveFold(@RequestParam(value = "cal_type") String type, @RequestParam(value = "cal_line") String line, @RequestParam(value = "cal_width") String width,
                            @RequestParam(value = "cal_conn") String connect, @RequestParam(value = "cal_clock") String clock, @RequestParam(value = "cal_advert") String advert,
                            @RequestParam(value = "cal_back") String back, @RequestParam(value = "cal_calm") String calm, @RequestParam(value = "cal_pack") String pack,
                            @RequestParam(value = "cal_gd") String gd, @RequestParam(value = "cal_copy") String copy, @RequestParam(value = "cal_trans") String trans,
                            @RequestParam(value = "cal_pay") String pay){
        configurationServiceImlp.save(type, line, width, connect, clock, advert, back, calm, pack, gd, copy, trans, pay);
        configurationServiceImlp.saveConfigFoldJSON(type, line, width, connect, clock, advert, back, calm, pack, gd, copy, trans, pay);
        return "redirect:/user";
    }

    @RequestMapping(value = "/dzielne/send", method = RequestMethod.POST)
    public String sendConfigurationDzielne(@RequestParam(value = "cal_type") String type, @RequestParam(value = "cal_line") String line, @RequestParam(value = "cal_width") String width,
                            @RequestParam(value = "cal_conn") String connect, @RequestParam(value = "cal_clock") String clock, @RequestParam(value = "cal_advert") String advert,
                            @RequestParam(value = "cal_back") String back, @RequestParam(value = "cal_calm") String calm, @RequestParam(value = "cal_pack") String pack,
                            @RequestParam(value = "cal_gd") String gd, @RequestParam(value = "cal_copy") String copy, @RequestParam(value = "cal_trans") String trans,
                            @RequestParam(value = "cal_pay") String pay){
        configurationServiceImlp.save(type, line, width, connect, clock, advert, back, calm, pack, gd, copy, trans, pay);
        configurationServiceImlp.saveConfigFoldJSON(type, line, width, connect, clock, advert, back, calm, pack, gd, copy, trans, pay);
        return "redirect:/user";
    }


}
