package com.infomax.web.services;


import com.infomax.web.models.Advert;
import com.infomax.web.models.Article;
import com.infomax.web.repositories.AdvertRepository;
import com.infomax.web.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

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




    @Override
    public Article findByTitle(String title) {
        return articleRepository.findByTitle(title);
    }

    @Override
    public List<Article> getAll() {
        List<Article> art = new ArrayList<>();
        articleRepository.findAll().forEach(art :: add);
        return articleRepository.findAll();
    }

    /*Manage articles*/
    @Override
    public void deleteArticle(String title) {
        if(articleRepository.findByTitle(title) != null){
            articleRepository.delete(articleRepository.findByTitle(title));
        }else{
            System.out.println("ARTICLE NOT FOUND!");
        }
    }

    @Override
    public void storeArticle(String title, String description, MultipartFile contentPdf, MultipartFile iconImg) throws IOException {
        Article a = new Article();
        String contentPdfName = StringUtils.cleanPath(contentPdf.getOriginalFilename());
        String iconImgName = StringUtils.cleanPath(iconImg.getOriginalFilename());
        if(contentPdfName.contains("..") || iconImgName.contains("..")){
            System.out.println("not a valid file");
        }
        try{
            a.setContent(Base64.getEncoder().encodeToString(contentPdf.getBytes()));
            a.setIcon(Base64.getEncoder().encodeToString(iconImg.getBytes()));
        }catch (IOException e){
            e.printStackTrace();
        }
        a.setTitle(title);
        a.setDescription(description);
        a.setArticleAuthor(principalDetailsService.getLoggedUser());
        articleRepository.save(a);
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







}
