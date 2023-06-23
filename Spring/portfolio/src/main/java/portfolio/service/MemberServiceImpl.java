package portfolio.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import portfolio.domain.Member;
import portfolio.domain.MemberDTO;
import portfolio.domain.MemberLoginDTO;
import portfolio.repository.MemberRepository;
import portfolio.repository.MemberRepositoryImpl;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;

    @Override
    public void join(MemberDTO memberDTO){
        memberRepository.save(memberDTO);
    }

    @Override
    public int login(MemberLoginDTO memberLoginDTO){
        Member member = memberRepository.findByNick(memberLoginDTO.getNick());
        if(member != null && memberLoginDTO.getPw().equals(member.getPw())){
            return 1;   //로그인 성공
        }
        else{
            return 0;   //로그인 실패
        }
    }
}
