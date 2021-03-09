package com.infomax.web.models;

import org.hibernate.annotations.Type;

import javax.persistence.*;


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
//    @Type(type = "org.hibernate.type.BinaryType")
    @Column(name = "content", columnDefinition = "MEDIUMBLOB")
    private String content;
    @Lob
//    @Type(type = "org.hibernate.type.BinaryType")
    @Column(name = "icon", columnDefinition = "MEDIUMBLOB")
    private String icon;


    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "author_id")
    private AppUser articleAuthor;



    public Article() {
    }

    public Article(String title, String description, String content, String icon, AppUser articleAuthor) {
        this.title = title;
        this.description = description;
        this.content = content;
        this.icon = icon;
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

    public AppUser getArticleAuthor() {
        return articleAuthor;
    }

    public void setArticleAuthor(AppUser articleAuthor) {
        this.articleAuthor = articleAuthor;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
