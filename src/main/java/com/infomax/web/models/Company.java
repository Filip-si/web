package com.infomax.web.models;

import javax.persistence.*;

@Entity(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address")
    private String address;
    @Column(name = "email")
    private String email;
    @Column(name = "link")
    private String link;
    @Lob
    @Column(name = "icon", columnDefinition = "MEDIUMBLOB")
    private String icon;
    @Column(name = "socials")
    private String[] socials;
    @ManyToOne(cascade = CascadeType.MERGE)
    private AppUser author;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "trade_fairs_id")
    private TradeFairs tradeFairs;

    public Company(String name, String description, String phone, String address, String email, String link, String icon, String[] socials, AppUser author, TradeFairs tradeFairs) {
        this.name = name;
        this.description = description;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.link = link;
        this.icon = icon;
        this.socials = socials;
        this.author = author;
        this.tradeFairs = tradeFairs;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLink() {
        return link;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String[] getSocials() {
        return socials;
    }

    public void setSocials(String[] socials) {
        this.socials = socials;
    }

    public AppUser getAuthor() {
        return author;
    }

    public void setAuthor(AppUser author) {
        this.author = author;
    }

    public TradeFairs getTradeFairs() {
        return tradeFairs;
    }

    public void setTradeFairs(TradeFairs tradeFairs) {
        this.tradeFairs = tradeFairs;
    }
}
