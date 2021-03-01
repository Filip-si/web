package com.infomax.web.repositories;

import com.infomax.web.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface ArticleRepository extends JpaRepository<Article, BigInteger> {
    Article findByTitle(String title);
}
