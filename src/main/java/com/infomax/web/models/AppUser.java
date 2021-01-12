package com.infomax.web.models;

import javax.persistence.*;

@Entity
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "")
    private String appUserEmail;
    @Column(name = "")
    private int appUserEncryptedPassword;
    @Column(name = "")
    private String appUserEnabled;
    @Column(name = "")
    private String roleId;



}
