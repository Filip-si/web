package com.infomax.web.models;

import javax.persistence.*;

@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "")
    private Long appUserId;

    @Column(name = "")
    private Long appRoleId;

}
