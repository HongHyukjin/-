package Todays_house.service.member;

import Todays_house.domain.member.Member;
import Todays_house.domain.member.MemberLoginDTO;
import Todays_house.domain.member.MemberSignupDTO;

public interface MemberService {
    public int join(MemberSignupDTO memberSignupDTO);
    public int login(MemberLoginDTO memberLoginDTO);
}
