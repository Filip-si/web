package com.infomax.web.services;

import com.infomax.web.models.Article;
import com.infomax.web.models.TradeFairs;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface AdminPanelService {
    Article findByTitle(String title);

    List<Article> getAll();
    Article findById(Long id);
    void storeArticle(String title, String description, MultipartFile file, MultipartFile iconImage) throws IOException;
    void updateArticle(Long id, String title, String description, MultipartFile contentPdf, MultipartFile iconImg) throws IOException;
    void deleteArticle(String title);
    void deleteArticle(Long id);

    void deleteAdvert(String name);
    void storeAdvert(String name, MultipartFile file, String link) throws IOException;

    void deleteAppUser(String email) throws Exception;

    List<TradeFairs> getAllTradeFairs();



}
