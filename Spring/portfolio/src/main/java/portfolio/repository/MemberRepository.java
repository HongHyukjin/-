package portfolio.repository;

import portfolio.domain.Member;
import portfolio.domain.MemberDTO;
import portfolio.domain.MemberLoginDTO;

public interface MemberRepository {
    void save(MemberDTO memberDTO);

    Member findByNick(String nick);
}
