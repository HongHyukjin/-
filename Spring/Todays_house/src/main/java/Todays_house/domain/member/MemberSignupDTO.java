package Todays_house.domain.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class MemberSignupDTO {

    private String user_email1;
    private String user_email2;
    private String user_pw;
    private String user_nick;
    private String user_service;

}
