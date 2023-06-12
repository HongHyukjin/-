package Todays_house.repository.member;

import Todays_house.domain.member.MemberLoginDTO;
import Todays_house.domain.member.MemberSignupDTO;

public interface MemberRepository {

    public int save(MemberSignupDTO memberSignupDTO);
    public MemberLoginDTO findByEmail(MemberLoginDTO memberLoginDTO);

}
