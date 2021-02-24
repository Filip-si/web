package com.infomax.web.models;

//import org.springframework.web.multipart.byte[];

import org.hibernate.annotations.Type;

import javax.imageio.ImageIO;
import javax.persistence.*;
import java.awt.*;
import java.util.List;

@Entity
@Table(name = "article")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private long id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Lob
    @Type(type = "org.hibernate.type.BinaryType")
    @Column(name = "news")
    private byte[] newspaper;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "author_id")
    private AppUser articleAuthor;



    public Article() {
    }

    public Article(String title, String description, byte[] newspaper, AppUser articleAuthor) {
        this.title = title;
        this.description = description;
        this.newspaper = newspaper;
        this.articleAuthor = articleAuthor;
    }

    public Article(String title, String description, AppUser articleAuthor) {
        this.title = title;
        this.description = description;
        this.articleAuthor = articleAuthor;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getNewspaper() {
        return newspaper;
    }

    public void setNewspaper(byte[] newspaper) {
        this.newspaper = newspaper;
    }

    public AppUser getArticleAuthor() {
        return articleAuthor;
    }

    public void setArticleAuthor(AppUser articleAuthor) {
        this.articleAuthor = articleAuthor;
    }


}
