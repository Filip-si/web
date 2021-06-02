package com.infomax.web.models;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "trade_fairs")
public class TradeFairs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "iconLink")
    private String iconLink;
    @OneToMany(mappedBy = "id")
    private Set<Company> companySet;

    public TradeFairs() {
    }


    public TradeFairs(String name, String iconLink) {
        this.name = name;
        this.iconLink = iconLink;
    }

    public TradeFairs(String name, Set<Company> companySet) {
        this.name = name;
        this.companySet = companySet;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIconLink() {
        return iconLink;
    }

    public void setIconLink(String iconLink) {
        this.iconLink = iconLink;
    }

    public Set<Company> getCompanySet() {
        return companySet;
    }

    public void setCompanySet(Set<Company> companySet) {
        this.companySet = companySet;
    }

}
