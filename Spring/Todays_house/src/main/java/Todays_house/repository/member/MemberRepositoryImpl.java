package Todays_house.repository.member;

import Todays_house.domain.member.Member;
import Todays_house.domain.member.MemberLoginDTO;
import Todays_house.domain.member.MemberSignupDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
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
    public MemberLoginDTO findByEmail(MemberLoginDTO memberLoginDTO){
        String SQL = "SELECT user_pw FROM ohouse_member where user_email=?";
        MemberLoginDTO memberLoginDTO1 = null;
        try{
            return memberLoginDTO1 = template.queryForObject(SQL, new Object[]{memberLoginDTO.getUser_email1()+"@"+memberLoginDTO.getUser_email2()}, memberRowMapper());
        }
        catch (EmptyResultDataAccessException e){
            return memberLoginDTO1;
        }
    }

    private RowMapper<MemberLoginDTO> memberRowMapper() {
        return (rs, rowNum) -> {
            MemberLoginDTO memberLoginDTO = new MemberLoginDTO();
            memberLoginDTO.setUser_pw(rs.getString("user_pw"));
            return memberLoginDTO;
        };
    }

}

