package com.example.app.controller;

import lombok.AllArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
public class UserDTOEntity {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String UserName;
    @Column
    private String UserHp;
    @Column
    private String UserEmail;
    @Column
    private String UserSubject;
    @Column
    private String UserContent;


    @Override
    public String toString() {
        return "UserDTOEntity{" +
                "id=" + id +
                ", UserName='" + UserName + '\'' +
                ", UserHp='" + UserHp + '\'' +
                ", UserEmail='" + UserEmail + '\'' +
                ", UserSubject='" + UserSubject + '\'' +
                ", UserContent='" + UserContent + '\'' +
                '}';
    }
}
