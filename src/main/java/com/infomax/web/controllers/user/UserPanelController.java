package com.infomax.web.controllers.user;

import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.ConfigurationServiceImlp;
import com.infomax.web.services.UserPrincipalDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping(value = "/user")
public class UserPanelController {

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;
    @Autowired
    private AdminPanelServiceImpl adminPanelService;
    @Autowired
    private ConfigurationServiceImlp configurationService;

    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView showProfile(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("allNews", adminPanelService.getAll());
        modelAndView.addObject("allConfigurations", configurationService.getAllConfigurations());
        if(principalDetailsService.getLoggedUser() != null){
            modelAndView.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
            modelAndView.addObject("loggedUser", principalDetailsService.getLoggedUser());
        }
        modelAndView.setViewName("user");
        return modelAndView;
    }

//    @RequestMapping(value = "/delete-config",method = RequestMethod.GET)
//    public ModelAndView showDeleteConfigFromProfile(){
//        ModelAndView modelAndView = new ModelAndView();
//        modelAndView.addObject("allNews", adminPanelService.getAll());
//        modelAndView.addObject("allConfigurations", configurationService.getAllConfigurations());
//        if(principalDetailsService.getLoggedUser() != null){
//            modelAndView.addObject("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
//            modelAndView.addObject("loggedUser", principalDetailsService.getLoggedUser());
//        }
//        modelAndView.setViewName("user");
//        return modelAndView;
//    }

    @RequestMapping(value = "/delete-config/{id}", method = RequestMethod.GET)
    public String deleteConfigFromProfile(@PathVariable(name = "id") long id, Model model){
//        ModelAndView modelAndView = new ModelAndView();
        model.addAttribute("allNews", adminPanelService.getAll());
        model.addAttribute("allConfigurations", configurationService.getAllConfigurations());
        if(principalDetailsService.getLoggedUser() != null){
            model.addAttribute("roleUser", principalDetailsService.isAdmin(principalDetailsService.getLoggedUser().getId()));
            model.addAttribute("loggedUser", principalDetailsService.getLoggedUser());
            configurationService.deleteConfiguration(id);
        }
        return "redirect:/user";
    }

}
