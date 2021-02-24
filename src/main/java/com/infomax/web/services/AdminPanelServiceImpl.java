package com.infomax.web.services;

import com.infomax.web.models.Article;
import com.infomax.web.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigInteger;

@Service
public class AdminPanelServiceImpl implements AdminPanelService, FileStorageService{
    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;


    @Override
    public void saveArticle(MultipartFile newspaper) {

    }

    @Override
    public void save(MultipartFile file) {

    }


    @Override
    public Article deleteArticle(BigInteger id) {
        return null;
    }


    @Override
    public void storeFile(String title, String description, MultipartFile file) throws IOException {

                Article article = new Article(title,description,file.getBytes(),principalDetailsService.getLoggedUser());
                articleRepository.save(article);

    }
}
