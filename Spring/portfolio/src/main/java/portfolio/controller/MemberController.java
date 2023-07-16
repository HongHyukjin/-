package portfolio.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import portfolio.controller.security.jwt.JwtTokenProvider;
import portfolio.domain.Member;
import portfolio.domain.MemberDTO;
import portfolio.domain.MemberLoginDTO;
import portfolio.repository.MemberRepository;
import portfolio.service.MemberService;

import java.util.List;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    @Autowired
    private MemberService memberService;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;


    //토큰에서 멤버 정보(nick, area) 추출해서 반환
    @GetMapping(value = "/token")
    public ResponseEntity<MemberLoginDTO> fetchMember(Authentication authentication){
        Member principal = (Member)authentication.getPrincipal();
        MemberLoginDTO loginMember = new MemberLoginDTO(principal.getNick(), principal.getPw());
        log.info("-----[MemberController fetchMember] return {}",loginMember.getNick());
        return new ResponseEntity<>(loginMember, HttpStatus.OK);
    }

    @GetMapping(value = "/authority")
    public ResponseEntity<String> fetchAuthority(Authentication authentication){
        Member principal = (Member)authentication.getPrincipal();
        List<String> roles = principal.getRoles();

        log.info("-----[MemberController fetchAuthority] return {}",roles.get(0));
        return new ResponseEntity<>(roles.get(0), HttpStatus.OK);
    }

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

    @PostMapping(value="/test")
    @ResponseBody
    public String test(){

        return "<h1>test 통과</h1>";
    }

}
