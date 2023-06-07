package test.signup.repository;

import test.signup.domain.User;

public interface MemberRepository {
    public User save(User user);
}
