package test.signup.controller.member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import test.signup.domain.User;
import test.signup.domain.UserForm;
import test.signup.service.UserServiceImpl;


@RestController
@RequiredArgsConstructor
@Slf4j
public class HomeController {
    private final UserServiceImpl userServiceimpl;

    @GetMapping(value="/user")
    public String test(){
        return "hello ";
    }
    @PostMapping(value="/user/new")
    public String signup(@RequestBody UserForm form){
        User user = new User();
        user.setId(form.getId());
        user.setPw1(form.getPw1());
        userServiceimpl.join(user);
        return "hello";
    }
}
