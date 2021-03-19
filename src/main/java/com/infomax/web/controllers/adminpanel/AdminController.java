package com.infomax.web.controllers.adminpanel;

import com.infomax.web.models.Article;
import com.infomax.web.repositories.ArticleRepository;
import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;


@Controller
public class AdminController {

    @Autowired
    private AdminPanelServiceImpl adminPanelService;

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @Autowired
    private ArticleRepository articleRepository;

    @RequestMapping(value = "/admin-panel",method = RequestMethod.GET)
    public ModelAndView showAdminPanel(){
        ModelAndView mav = new ModelAndView();
        mav.addObject("loggedUser", principalDetailsService.getLoggedUser());
        List<Article> articleList = articleRepository.findAll();
        mav.addObject("articleList", articleList);
        mav.addObject("article", new Article());
        if(principalDetailsService.getLoggedUser() != null){
            mav.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
        }
        mav.setViewName("admin-panel");

        return mav;
    }





}
