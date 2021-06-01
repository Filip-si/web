package com.infomax.web.controllers.adminpanel;

import com.infomax.web.repositories.ArticleRepository;
import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/admin-panel")
public class TradeFairsController {

    @Autowired
    private AdminPanelServiceImpl adminPanelService;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserPrincipalDetailsService userPrincipalDetailsService;

    @RequestMapping(value = "/add-tradefair", method = RequestMethod.GET)
    public ModelAndView showTradeFair(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("admin-panel");
        return mav;
    }

/*    @RequestMapping(value = "/add-tradefair", method = RequestMethod.POST)
    public String addTradeFair(){

    }*/
}
