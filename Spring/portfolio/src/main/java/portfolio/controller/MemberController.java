package portfolio.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import portfolio.domain.MemberDTO;
import portfolio.service.MemberService;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;

    @PostMapping(value="/signup")
    public ResponseEntity<String> signup(@RequestBody MemberDTO memberDTO){
        memberService.join(memberDTO);
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }

}
