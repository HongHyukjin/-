package portfolio.repository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import portfolio.domain.Member;
import portfolio.domain.MemberDTO;
import portfolio.domain.MemberLoginDTO;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


@Repository
@Slf4j
public class MemberRepositoryImpl implements MemberRepository{

    @PersistenceContext
    private EntityManager em;

    @Override
    public void save(MemberDTO memberDTO){
        Member member = memberDTO.toEntity();
        em.persist(member);
        log.info("-----save success------");
    }

    @Override
    public Member findByNick(String nick){
        return em.find(Member.class, nick);
    }
}
