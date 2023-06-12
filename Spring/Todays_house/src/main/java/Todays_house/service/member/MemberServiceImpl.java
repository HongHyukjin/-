package Todays_house.service.member;

import Todays_house.domain.member.MemberLoginDTO;
import Todays_house.domain.member.MemberSignupDTO;
import Todays_house.repository.member.MemberRepositoryImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class MemberServiceImpl implements MemberService{

    private final MemberRepositoryImpl memberRepository;

    @Override
    public int join(MemberSignupDTO memberSignupDTO){
        return memberRepository.save(memberSignupDTO);
    }

    @Override
    public int login(MemberLoginDTO memberLoginDTO){
        MemberLoginDTO memberLoginDTO1 = memberRepository.findByEmail(memberLoginDTO);
        if(memberLoginDTO1 == null){
            return -1;
        }
        else if(!memberLoginDTO.getUser_pw().equals(memberLoginDTO1.getUser_pw())){
            return 0;
        }
        else{
            return 1;
        }
    }
}
