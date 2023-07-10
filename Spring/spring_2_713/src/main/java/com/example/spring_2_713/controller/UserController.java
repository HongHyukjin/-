package com.example.spring_2_713.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/login.do")
    public String loginMethod(Model model){
        model.addAttribute("user_name", "홍혁진");
        return "login";
    }

    @GetMapping("logout.do")
    public String logoutMethod(Model model){
        model.addAttribute("user_name", "홍혁진");
        return "logout";
    }

}
