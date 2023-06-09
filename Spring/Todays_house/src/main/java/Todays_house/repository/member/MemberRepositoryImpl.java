package Todays_house.repository.member;

import Todays_house.domain.member.Member;
import Todays_house.domain.member.MemberLoginDTO;
import Todays_house.domain.member.MemberSignupDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@RequiredArgsConstructor
@Repository
public class MemberRepositoryImpl implements MemberRepository {

    private final JdbcTemplate template;
    @Override
    public int save(MemberSignupDTO memberSignupDTO){
        String SQL = "INSERT INTO ohouse_member(user_email, user_pw, user_nick, user_service) VALUES(?,?,?,?)";
        int result = template.update(SQL,
                memberSignupDTO.getUser_email1() + "@" + memberSignupDTO.getUser_email2(),
                memberSignupDTO.getUser_pw(),
                memberSignupDTO.getUser_nick(),
                memberSignupDTO.getUser_service()
                );
        return result;
    }

    @Override
    public int find(MemberLoginDTO memberLoginDTO){
        String SQL = "SELECT count(*) FROM ohouse_member where user_email=? && user_pw=?";
        int result = template.queryForObject(SQL, new Object[]{memberLoginDTO.getUser_email1()+"@"+memberLoginDTO.getUser_email2(), memberLoginDTO.getUser_pw()},
                Integer.class);
        return result;
    }

    private RowMapper<Member> memberRowMapper() {
        return (rs, rowNum) -> {
            Member member = new Member();
            member.setUser_email1(rs.getString("user_email"));
            member.setUser_pw(rs.getString("pw"));
            return member;
        };
    }

}

