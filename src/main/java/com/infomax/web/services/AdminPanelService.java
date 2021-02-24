package com.infomax.web.services;

import com.infomax.web.models.Article;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigInteger;

public interface AdminPanelService {
    void saveArticle(MultipartFile newspaper);
    void save(MultipartFile file);
    Article deleteArticle(BigInteger id);
}
