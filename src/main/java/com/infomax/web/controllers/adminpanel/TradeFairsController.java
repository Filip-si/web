package com.infomax.web.controllers.adminpanel;

import com.infomax.web.models.TradeFairs;
import com.infomax.web.repositories.ArticleRepository;
import com.infomax.web.repositories.TradeFairsRepository;
import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/admin-panel")
public class TradeFairsController {

    @Autowired
    private AdminPanelServiceImpl adminPanelService;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private TradeFairsRepository tradeFairsRepository;

    @Autowired
    private UserPrincipalDetailsService userPrincipalDetailsService;


    @RequestMapping(value = "/add-trade-fairs", method = RequestMethod.POST)
    public String addTradeFair(@RequestParam("name") String name, @RequestParam("iconLink") String link){
        TradeFairs tradeFairs = new TradeFairs(name, link);
        tradeFairsRepository.save(tradeFairs);
        return "redirect:/admin-panel";
    }

    @RequestMapping(value = "/delete-trade-fairs", method = RequestMethod.POST)
    public String delTradeFair(@RequestParam("name") String name){
        TradeFairs tradeFairs = tradeFairsRepository.findByName(name);
        tradeFairsRepository.delete(tradeFairs);
        return "redirect:/admin-panel";
    }


}
