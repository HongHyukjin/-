package test.signup.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import test.signup.domain.User;
import test.signup.repository.MemberRepository;
import test.signup.repository.MemberRepositoryImpl;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{


    private final MemberRepositoryImpl memberRepository;
    @Override
    public User join(User user){
        memberRepository.save(user);
        return user;
    }
}
