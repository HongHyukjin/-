package portfolio.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PostDTO {

    private String category;

    private String postTTL;

    private int peopleNum;

    private String subject;

    private String content;

    public Post toEntity(){
        return Post.builder()
                .category(category)
                .postTTL(postTTL)
                .peopleNum(peopleNum)
                .subject(subject)
                .content(content)
                .build();
    }

}
