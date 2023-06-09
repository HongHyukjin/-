package Todays_house.service.member;

import Todays_house.domain.member.MemberLoginDTO;
import Todays_house.domain.member.MemberSignupDTO;
import Todays_house.repository.member.MemberRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService{

    private final MemberRepositoryImpl memberRepository;

    @Override
    public int join(MemberSignupDTO memberSignupDTO){
        return memberRepository.save(memberSignupDTO);
    }

    @Override
    public int login(MemberLoginDTO memberLoginDTO){
        return memberRepository.find(memberLoginDTO);
    }
}
