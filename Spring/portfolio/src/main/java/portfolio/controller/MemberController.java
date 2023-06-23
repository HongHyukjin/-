package portfolio.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import portfolio.controller.security.jwt.JwtTokenProvider;
import portfolio.domain.Member;
import portfolio.domain.MemberDTO;
import portfolio.domain.MemberLoginDTO;
import portfolio.repository.MemberRepository;
import portfolio.service.MemberService;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;

    private final MemberRepository memberRepository;

    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping(value="/signup")
    public ResponseEntity<String> signup(@RequestBody MemberDTO memberDTO){
        memberService.join(memberDTO);
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }

    @PostMapping(value="/login")
    public ResponseEntity<String> login(@RequestBody MemberLoginDTO memberLoginDTO){
        int result = memberService.login(memberLoginDTO);
        if(result == 1){
            Member loginMember = memberRepository.findByNick(memberLoginDTO.getNick());
            String token = jwtTokenProvider.createToken(loginMember);
            return new ResponseEntity<>(token, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("FAILED", HttpStatus.OK);
        }
    }

}
