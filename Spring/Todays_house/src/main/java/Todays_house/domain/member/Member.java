package Todays_house.domain.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    private String user_email1;
    private String user_email2;
    private String user_pw;
    private String user_nick;
    private String user_service;
    private String user_url;
    private String user_gender;
    private String user_birth;
    private String user_profile;
    private String user_oneline;
    private String create_date;

}
