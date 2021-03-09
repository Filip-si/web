package com.infomax.web.services;

import com.infomax.web.models.Article;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface AdminPanelService {
    Article findByTitle(String title);
    List<Article> getAll();
    void deleteArticle(String title);
    void storeFile(String title, String description, MultipartFile file, MultipartFile iconImage) throws IOException;


}
