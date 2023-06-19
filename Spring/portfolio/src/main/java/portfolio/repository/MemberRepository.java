package portfolio.repository;

import portfolio.domain.MemberDTO;

public interface MemberRepository {
    void save(MemberDTO memberDTO);
}
