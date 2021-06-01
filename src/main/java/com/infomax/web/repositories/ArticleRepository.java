package com.infomax.web.repositories;

import com.infomax.web.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface ArticleRepository extends JpaRepository<Article, BigInteger> {
    Article findByTitle(String title);
    Article findById(Long id);

    void deleteById(Long id);
}
