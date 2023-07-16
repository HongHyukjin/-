package portfolio.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import portfolio.domain.MemberDTO;
import portfolio.domain.PostDTO;
import portfolio.repository.PostRepository;
import portfolio.service.PostService;

@Controller
@RequiredArgsConstructor
@Slf4j
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private PostRepository postRepository;

    @PostMapping(value = "/postwrite")
    public ResponseEntity<String> post(@RequestBody PostDTO postDTO){
        postService.post(postDTO);
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }

}
