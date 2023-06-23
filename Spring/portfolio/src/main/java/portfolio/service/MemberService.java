package portfolio.service;

import portfolio.domain.MemberDTO;
import portfolio.domain.MemberLoginDTO;

public interface MemberService {
    void join(MemberDTO memberDTO);

    int login(MemberLoginDTO memberLoginDTO);
}
