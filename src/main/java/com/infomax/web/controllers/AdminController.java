package com.infomax.web.controllers;

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

    @RequestMapping(value = "/add-news", method = RequestMethod.GET)
    public ModelAndView showNews(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("admin-panel");
        return mav;
    }

    @RequestMapping(value = "/add-news",method = RequestMethod.POST)
    public String saveProduct(@RequestParam(value = "content") MultipartFile content,
                              @RequestParam(value = "icon") MultipartFile icon,
                              @RequestParam(value = "title") String title,
                              @RequestParam(value = "description") String description) throws IOException {
        adminPanelService.storeFile(title,description,content,icon);
        return "redirect:/admin-panel";
    }


    @RequestMapping(value = "/delete-news",method = RequestMethod.POST)
    @Transactional
    public String deleteNews(String title){
        if(articleRepository.findByTitle(title) != null){
            Article toDelete = articleRepository.findByTitle(title);
            articleRepository.delete(toDelete);
        }else{
            System.out.println("ARTICLE NOT FOUND");
        }
        return "redirect:/admin-panel";
    }



}
