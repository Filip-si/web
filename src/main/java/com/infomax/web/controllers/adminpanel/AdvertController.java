package com.infomax.web.controllers.adminpanel;

import com.infomax.web.models.Advert;
import com.infomax.web.repositories.AdvertRepository;
import com.infomax.web.services.AdminPanelService;
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
public class AdvertController {
    @Autowired
    private AdminPanelService adminPanelService;
    @Autowired
    private AdvertRepository advertRepository;

    @RequestMapping(value = "/add-advert", method = RequestMethod.GET)
    public ModelAndView showAdvert(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin-panel");
        return modelAndView;
    }

    @RequestMapping(value = "/add-advert", method = RequestMethod.POST)
    public String saveAdvert(@RequestParam(value = "name") String name,
                                   @RequestParam(value = "advert") MultipartFile advert,
                                   @RequestParam(value = "link") String link) throws IOException {
        adminPanelService.storeAdvert(name,advert,link);
        return "redirect:/admin-panel";
    }

    @RequestMapping(value = "/delete-advert", method = RequestMethod.POST)
    @Transactional
    public String deleteAdvert(String name){
        adminPanelService.deleteAdvert(name);
        return "redirect:/admin-panel";
    }
}
