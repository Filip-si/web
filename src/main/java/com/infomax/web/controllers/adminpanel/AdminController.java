package com.infomax.web.controllers.adminpanel;

import com.infomax.web.models.Article;
import com.infomax.web.repositories.ArticleRepository;
import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.annotation.MultipartConfig;
import java.io.IOException;


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
        if(principalDetailsService.getLoggedUser() != null){
            mav.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
        }
        mav.setViewName("admin-panel");

        return mav;
    }





}
