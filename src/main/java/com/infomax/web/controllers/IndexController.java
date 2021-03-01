package com.infomax.web.controllers;


import com.infomax.web.services.AdminPanelServiceImpl;
import com.infomax.web.services.UserPrincipalDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

@Controller
public class IndexController {
    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @Autowired
    private AdminPanelServiceImpl adminPanelService;



    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView showPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("loggedUser", principalDetailsService.getLoggedUser());
        modelAndView.addObject("roleUser", principalDetailsService.isAdmin());
        modelAndView.addObject("allNews", adminPanelService.getAll());
        modelAndView.setViewName("index");
        return modelAndView;
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public ModelAndView showIndex(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("loggedUser", principalDetailsService.getLoggedUser());
        modelAndView.addObject("roleUser", principalDetailsService.isAdmin());
        modelAndView.setViewName("index");
        return modelAndView;
    }

//    @RequestMapping(value = "/{title}")
//    public ResponseEntity<byte[]> getImage(@PathVariable("title") String title) throws IOException{
//        byte[] imgContent = adminPanelService.findByTitle(title).getIcon();
//        final HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.IMAGE_JPEG);
//        return new ResponseEntity<byte[]>(imgContent,headers, HttpStatus.OK);
//    }

//    @RequestMapping(value = "/index/{title}")
//    public void showArt(@PathVariable String title, HttpServletResponse response) throws IOException{
//        response.setContentType("image/jpeg");
//        Article art = adminPanelService.findByTitle(title);
//
//        InputStream is = new ByteArrayInputStream(art.getIcon());
//        IOUtils.copy(is,response.getOutputStream());
//
//    }

    @Transactional
    @RequestMapping(
            value = "/article/{title}",
            produces = MediaType.APPLICATION_PDF_VALUE,
            method = RequestMethod.GET)
    public ResponseEntity showPDF(HttpServletResponse response, @PathVariable("title") String title) throws IOException{
        byte[] decoder = Base64.getDecoder().decode(adminPanelService.findByTitle(title).getContent());
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_PDF).body(decoder);
    }

    @RequestMapping(value = "/login-error", method = RequestMethod.GET)
    public ModelAndView loginError(Model model){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("loggedUser",principalDetailsService.getLoggedUser());
        modelAndView.addObject("roleUser",principalDetailsService.isAdmin());
        model.addAttribute("loginError", true);
        modelAndView.setViewName("login");
        return modelAndView;
    }

//

}
