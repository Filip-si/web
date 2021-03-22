package com.infomax.web.services;


import com.infomax.web.models.Advert;
import com.infomax.web.models.AppUser;
import com.infomax.web.models.AppUserRole;
import com.infomax.web.models.Article;
import com.infomax.web.repositories.AdvertRepository;
import com.infomax.web.repositories.AppUserRepository;
import com.infomax.web.repositories.AppUserRoleRepository;
import com.infomax.web.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class AdminPanelServiceImpl implements AdminPanelService{
    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private AdvertRepository advertRepository;
    @Autowired
    private UserPrincipalDetailsService principalDetailsService;
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private AppUserRoleRepository appUserRoleRepository;




    @Override
    public Article findByTitle(String title) {
        return articleRepository.findByTitle(title);
    }



    /*Manage articles*/
    @Override
    public List<Article> getAll() {
        List<Article> art = new ArrayList<>();
        articleRepository.findAll().forEach(art :: add);
        return articleRepository.findAll();
    }

    public List<Article> findAll(){
        return articleRepository.findAll();
    }

    @Override
    public void storeArticle(String title, String description, MultipartFile contentPdf, MultipartFile iconImg) throws IOException {
        Article toSave = new Article();
        String contentPdfName = StringUtils.cleanPath(contentPdf.getOriginalFilename());
        String iconImgName = StringUtils.cleanPath(iconImg.getOriginalFilename());
        if(contentPdfName.contains("..") || iconImgName.contains("..")){
            System.out.println("not a valid file");
        }
        try{
            toSave.setContent(Base64.getEncoder().encodeToString(contentPdf.getBytes()));
            toSave.setIcon(Base64.getEncoder().encodeToString(iconImg.getBytes()));
        }catch (IOException e){
            e.printStackTrace();
        }
        toSave.setTitle(title);
        toSave.setDescription(description);
        toSave.setArticleAuthor(principalDetailsService.getLoggedUser());
        articleRepository.save(toSave);

    }

    @Override
    public void updateArticle(Long id, String title, String description, MultipartFile contentPdf, MultipartFile iconImg) throws IOException{
        Article toSave = new Article();
        String contentPdfName = StringUtils.cleanPath(contentPdf.getOriginalFilename());
        String iconImgName = StringUtils.cleanPath(iconImg.getOriginalFilename());
        if(contentPdfName.contains("..") || iconImgName.contains("..")){
            System.out.println("not a valid file");
        }
        try{
            toSave.setContent(Base64.getEncoder().encodeToString(contentPdf.getBytes()));
            toSave.setIcon(Base64.getEncoder().encodeToString(iconImg.getBytes()));
        }catch (IOException e){
            e.printStackTrace();
        }
        toSave.setTitle(title);
        toSave.setDescription(description);
        toSave.setArticleAuthor(principalDetailsService.getLoggedUser());
        articleRepository.save(toSave);
    }

    @Override
    public void deleteArticle(String title) {
        if(articleRepository.findByTitle(title) != null){
            articleRepository.delete(articleRepository.findByTitle(title));
        }else{
            System.out.println("ARTICLE NOT FOUND!");
        }
    }

    /*Manage advert*/

    @Override
    public void storeAdvert(String name, MultipartFile adv, String link) throws IOException{
        Advert ad = new Advert();
        String advName = StringUtils.cleanPath(adv.getOriginalFilename());
        if(advName.contains("..")){
            System.out.println("not a valid file");
        }
        try{
            ad.setAdvert(Base64.getEncoder().encodeToString(adv.getBytes()));
        }catch (IOException e){
            e.printStackTrace();
        }
        ad.setName(name);
        ad.setLink(link);
        ad.setAdvertAuthor(principalDetailsService.getLoggedUser());
        advertRepository.save(ad);
    }

    @Override
    public void deleteAdvert(String name) {
        if(advertRepository.findByName(name) != null){
            advertRepository.delete(advertRepository.findByName(name));
        }else{
            System.out.println("ADVERT NOT FOUND!");
        }
    }

    /*Manage users*/
    @Override
    public void deleteAppUser(String email) throws Exception {
        AppUser userToDelete = appUserRepository.findByAppUserEmail(email);
        AppUserRole roleToDelete = appUserRoleRepository.findByAppUserFk(userToDelete);
        if(roleToDelete != null){
            appUserRoleRepository.delete(roleToDelete);
        }else{
            throw new Exception("Role "+email+" user not found");
        }
        if(userToDelete != null){
            appUserRepository.delete(userToDelete);
        }else{
            throw new Exception("User "+email+" not found");
        }
    }




}
