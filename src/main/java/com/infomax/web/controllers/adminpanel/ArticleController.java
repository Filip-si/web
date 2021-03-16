package com.infomax.web.controllers.adminpanel;

import com.infomax.web.models.Article;
import com.infomax.web.repositories.ArticleRepository;
import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;

@Controller
@RequestMapping(value = "/admin-panel")
public class ArticleController {
    @Autowired
    private AdminPanelServiceImpl adminPanelService;

    @Autowired
    private ArticleRepository articleRepository;

    @RequestMapping(value = "/add-article", method = RequestMethod.GET)
    public ModelAndView showArticle(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("admin-panel");
        return mav;
    }

    @RequestMapping(value = "/add-article", method = RequestMethod.POST)
    @Transactional
    public String saveArticle(@RequestParam(value = "content") MultipartFile content,
                              @RequestParam(value = "icon") MultipartFile icon,
                              @RequestParam(value = "title") String title,
                              @RequestParam(value = "description") String description) throws IOException {
        adminPanelService.storeArticle(title,description,content,icon);
        return "redirect:/admin-panel";
    }


    @RequestMapping(value = "/delete-article", method = RequestMethod.POST)
    @Transactional
    public String deleteArticle(String title){
        if(articleRepository.findByTitle(title) != null){
            Article toDelete = articleRepository.findByTitle(title);
            articleRepository.delete(toDelete);
        }else{
            System.out.println("ARTICLE NOT FOUND");
        }
        return "redirect:/admin-panel";
    }
}
