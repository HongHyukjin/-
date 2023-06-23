package portfolio.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class MemberLoginDTO {
    private String nick;
    private String pw;
}
