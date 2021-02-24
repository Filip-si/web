package com.infomax.web.controllers;

import com.infomax.web.models.Article;
import com.infomax.web.services.AdminPanelService;
import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.dom4j.rule.Mode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
public class AdminController {

    @Autowired
    private AdminPanelServiceImpl adminPanelService;

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @RequestMapping(value = "/admin-panel",method = RequestMethod.GET)
    public ModelAndView showAdminPanel(){
        ModelAndView mav = new ModelAndView();
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
    public ModelAndView addNews(@RequestParam(value = "title") String title,@RequestParam(value = "description") String description,@RequestParam(value = "file") MultipartFile file) throws IOException {
        ModelAndView mav = new ModelAndView();
            mav.addObject("file", file);
            mav.addObject("title",title);
            mav.addObject("description",description);
            mav.setViewName("admin-panel");

            adminPanelService.storeFile(title,description,file);

        return mav;
    }

    @RequestMapping(value = "/delete-news",method = RequestMethod.POST)
    public ModelAndView deleteNews(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("admin-panel");

        return mav;
    }

}
