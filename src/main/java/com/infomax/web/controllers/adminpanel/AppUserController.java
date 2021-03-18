package com.infomax.web.controllers.adminpanel;

import com.infomax.web.services.AdminPanelService;
import com.infomax.web.services.AppUserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value = "/admin-panel")
public class AppUserController {
    @Autowired
    private AdminPanelService adminPanelService;
    @RequestMapping(value = "/delete-app-user", method = RequestMethod.POST)
    public String deleteAppUser(String email) throws Exception {
        adminPanelService.deleteAppUser(email);
        return "redirect:/admin-panel";
    }
}
