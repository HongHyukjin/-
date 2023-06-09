package Todays_house.controller.member;

import Todays_house.domain.member.MemberLoginDTO;
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

    private final MemberServiceImpl memberService;

    @PostMapping(value = "/member")
    public ResponseEntity<String> signup(@RequestBody MemberSignupDTO memberSignupDTO){
        int result = memberService.join(memberSignupDTO);
        log.info("{}", result);
        if(result == 1){
            log.info("회원가입 되었습니다");
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }
        else{
            log.info("회원가입 실패");
            return new ResponseEntity<>("FAILED", HttpStatus.CONFLICT);
        }
    }

    @PostMapping(value = "/member/login")
    public ResponseEntity<String> login(@RequestBody MemberLoginDTO memberLoginDTO){
        int result = memberService.login(memberLoginDTO);
        log.info("{}", result);
        if(result == 1){
            log.info("로그인 되었습니다");
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }
        else{
            log.info("로그인 실패");
            return new ResponseEntity<>("FAILED", HttpStatus.CONFLICT);
        }
    }
}
