package com.example.app.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {

    private String UserName;
    private String UserHp;
    private String UserEmail;
    private String UserSubject;
    private String UserContent;


    public UserDTOEntity toEntity() {
        return new UserDTOEntity(null, UserName, UserHp, UserEmail, UserSubject, UserContent);
    }
}
