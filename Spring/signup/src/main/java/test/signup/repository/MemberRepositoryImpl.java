package test.signup.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import test.signup.domain.User;

import javax.sql.DataSource;

@RequiredArgsConstructor
@Repository
public class MemberRepositoryImpl implements  MemberRepository{

    private final JdbcTemplate template;

    @Override
    public User save(User user){
        String sql = "insert into user values(?,?)";
        int result = template.update(sql, user.getId(), user.getPw1());
        return user;
    }
}
