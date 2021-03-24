package com.infomax.web.models.configs;

import com.infomax.web.models.AppUser;

import javax.persistence.*;

@Entity
public class CalendarFold {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "cal_type")
    private String type;
    @Column(name = "cal_line")
    private String line;
    @Column(name = "cal_width")
    private String width;
    @Column(name = "cal_conn")
    private String connect;
    @Column(name = "cal_clock")
    private String clock;
    @Column(name = "cal_advert")
    private String advert;
    @Column(name = "cal_back")
    private String back;
    @Column(name = "cal_calm")
    private String calm;
    @Column(name = "cal_pack")
    private String pack;
    @Column(name = "cal_gd")
    private String gd;
    @Column(name = "cal_copy")
    private String copy;
    @Column(name = "cal_trans")
    private String trans;
    @Column(name = "cal_pay")
    private String pay;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "author_id")
    private AppUser author;

    public CalendarFold() {
    }

    public CalendarFold(String type, String line, String width, String connect, String clock, String advert, String back,
                        String calm, String pack, String gd, String copy, String trans, String pay) {
        this.type = type;
        this.line = line;
        this.width = width;
        this.connect = connect;
        this.clock = clock;
        this.advert = advert;
        this.back = back;
        this.calm = calm;
        this.pack = pack;
        this.gd = gd;
        this.copy = copy;
        this.trans = trans;
        this.pay = pay;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getConnect() {
        return connect;
    }

    public void setConnect(String connect) {
        this.connect = connect;
    }

    public String getClock() {
        return clock;
    }

    public void setClock(String clock) {
        this.clock = clock;
    }

    public String getAdvert() {
        return advert;
    }

    public void setAdvert(String advert) {
        this.advert = advert;
    }

    public String getBack() {
        return back;
    }

    public void setBack(String back) {
        this.back = back;
    }

    public String getCalm() {
        return calm;
    }

    public void setCalm(String calm) {
        this.calm = calm;
    }

    public String getPack() {
        return pack;
    }

    public void setPack(String pack) {
        this.pack = pack;
    }

    public String getGd() {
        return gd;
    }

    public void setGd(String gd) {
        this.gd = gd;
    }

    public String getCopy() {
        return copy;
    }

    public void setCopy(String copy) {
        this.copy = copy;
    }

    public String getTrans() {
        return trans;
    }

    public void setTrans(String trans) {
        this.trans = trans;
    }

    public String getPay() {
        return pay;
    }

    public void setPay(String pay) {
        this.pay = pay;
    }

    public AppUser getAuthor() {
        return author;
    }

    public void setAuthor(AppUser author) {
        this.author = author;
    }
}
