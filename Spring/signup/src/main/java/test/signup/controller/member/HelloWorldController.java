package test.signup.controller.member;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class HelloWorldController {
    @GetMapping("/api/hello")
    public String test(){
        return "Hello, world!";
    }

    @GetMapping("/api/hello2")
    public String test2(){
        return "Hello2, world!";
    }
}
