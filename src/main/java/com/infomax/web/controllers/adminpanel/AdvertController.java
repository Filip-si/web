package com.infomax.web.controllers.adminpanel;

import com.infomax.web.services.AdminPanelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;

@Controller
public class AdvertController {
    @Autowired
    private AdminPanelService adminPanelService;

    @RequestMapping(value = "/admin-panel/add-advert", method = RequestMethod.GET)
    public ModelAndView showAdvert(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin-panel");
        return modelAndView;
    }

    @RequestMapping(value = "/admin-panel/add-advert", method = RequestMethod.POST)
    public String saveAdvert(@RequestParam(value = "name") String name,
                                   @RequestParam(value = "advert") MultipartFile advert,
                                   @RequestParam(value = "link") String link) throws IOException {
        adminPanelService.storeAdvert(name,advert,link);
        return "redirect:/admin-panel";
    }
}
