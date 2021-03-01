package com.infomax.web.controllers;

import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;


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
    public String saveProduct(@RequestParam(value = "content") MultipartFile content,
                              @RequestParam(value = "icon") MultipartFile icon,
                              @RequestParam(value = "title") String title,
                              @RequestParam(value = "description") String description) throws IOException {
        adminPanelService.storeFile(title,description,content,icon);
        return "redirect:/admin-panel";
    }

//    @RequestMapping(value = "/add-news",method = RequestMethod.POST)
//    public ModelAndView addNews(@RequestParam(value = "title") String title,@RequestParam(value = "description") String description,@RequestParam(value = "file") MultipartFile file, @RequestParam(value = "icon") MultipartFile icon) throws IOException {
//        ModelAndView mav = new ModelAndView();
////            mav.addObject("file", file);
////            mav.addObject("icon", icon);
////            mav.addObject("title",title);
////            mav.addObject("description",description);
////            String url = "data:image/jpeg;charset=utf-8;base64," + Base64.getEncoder().encodeToString(icon.getBytes());
//            mav.setViewName("admin-panel");
//
//            adminPanelService.storeFile(title,description,file,icon);
//
//        return mav;
//    }

    @RequestMapping(value = "/delete-news",method = RequestMethod.POST)
    public String deleteNews(String title){
        adminPanelService.deleteArticle(title);
        return "redirect:/admin-panel";
    }

}
