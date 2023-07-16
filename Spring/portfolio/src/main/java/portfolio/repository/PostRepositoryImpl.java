package portfolio.repository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import portfolio.domain.Member;
import portfolio.domain.MemberDTO;
import portfolio.domain.Post;
import portfolio.domain.PostDTO;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@Slf4j
public class PostRepositoryImpl implements PostRepository{

    @PersistenceContext
    private EntityManager em;

    @Override
    public void save(PostDTO postDTO){
        Post post = postDTO.toEntity();
        em.persist(post);
        log.info("-----save success------");
    }
}
