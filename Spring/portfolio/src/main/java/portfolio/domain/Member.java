package portfolio.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Member{
    @Id
    private String nick;    //id -> nick 으로 pk 변경
    private String email;
    private String pw;
    private String area;
}
