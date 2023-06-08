package Todays_house.controller.member;

import Todays_house.domain.member.MemberSignupDTO;
import Todays_house.service.member.MemberServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberServiceImpl memberServiceImpl;

    @PostMapping(value = "/member")
    public String signup(@RequestBody MemberSignupDTO memberSignupDTO){
        memberServiceImpl.join(memberSignupDTO);
        log.info("회원가입 되었습니다");
        return "회원가입 되었습니다";
    }
}
