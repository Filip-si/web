package com.infomax.web.models;

import javax.persistence.*;

@Entity
@Table(name = "advert")
public class Advert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "advert")
    private String advert;
    @Column(name = "link")
    private String link;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "author_id")
    private AppUser advertAuthor;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdvert() {
        return advert;
    }

    public void setAdvert(String advert) {
        this.advert = advert;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public AppUser getAdvertAuthor() {
        return advertAuthor;
    }

    public void setAdvertAuthor(AppUser advertAuthor) {
        this.advertAuthor = advertAuthor;
    }
}
