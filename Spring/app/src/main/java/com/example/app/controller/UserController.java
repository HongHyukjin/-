package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    @Autowired
    private UserDTOEntityRepository userDTOEntityRepository;

    @GetMapping("/write.do")
    public String writeMethod(){

        return "write";
    }

    @PostMapping("/view.do")
    public String viewMethod(UserDTO userDTO, Model model){
        model.addAttribute("userName", userDTO.getUserName());
        model.addAttribute("userHp", userDTO.getUserHp());
        model.addAttribute("userEmail", userDTO.getUserEmail());
        model.addAttribute("userSubject", userDTO.getUserSubject());
        model.addAttribute("userContent", userDTO.getUserContent());

        UserDTOEntity userDTOEntity = userDTO.toEntity();
        System.out.println(userDTOEntity.toString());

        UserDTOEntity result = userDTOEntityRepository.save(userDTOEntity);
        System.out.println(result);
        return "view";
    }

    @GetMapping("/list.do")
    public String list(){
        return "list";
    }

}
