package Todays_house.repository.member;

import Todays_house.domain.member.MemberSignupDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class MemberRepositoryImpl implements MemberRepositoy{

    private final JdbcTemplate template;
    @Override
    public void save(MemberSignupDTO memberSignupDTO){
        String SQL = "INSERT INTO ohouse_member(user_email, user_pw, user_nick, user_service) VALUES(?,?,?,?)";
        int result = template.update(SQL,
                memberSignupDTO.getUser_email1() + "@" + memberSignupDTO.getUser_email2(),
                memberSignupDTO.getUser_pw(),
                memberSignupDTO.getUser_nick(),
                memberSignupDTO.getUser_service()
                );
    }

}
