package com.infomax.web.controllers.fairs;

import com.infomax.web.models.AppUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BuilderController {
    @RequestMapping(value = "/budowlane", method = RequestMethod.GET)
    public String showFairsBuilding(Model model){
        model.addAttribute("appUser", new AppUser());
        return "budowlane";
    }
}
