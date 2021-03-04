package com.infomax.web.services;


import com.infomax.web.models.Article;
import com.infomax.web.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Lob;
import java.io.IOException;
import java.math.BigInteger;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class AdminPanelServiceImpl implements AdminPanelService{
    @Autowired
    private ArticleRepository articleRepository;

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


    @Override
    @Transactional
    public void deleteArticle(String title) {
        if(articleRepository.findByTitle(title) != null){
            articleRepository.delete(articleRepository.findByTitle(title));
        }else{
            System.out.println("ARTICLE NOT FOUND!");
        }
    }

    @Override
    public void storeFile(String title, String description, MultipartFile contentPdf, MultipartFile iconImg) throws IOException {
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



}
