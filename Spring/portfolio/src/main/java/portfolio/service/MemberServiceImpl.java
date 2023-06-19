package portfolio.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import portfolio.domain.MemberDTO;
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
}
