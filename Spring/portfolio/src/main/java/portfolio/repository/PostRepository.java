package portfolio.repository;

import portfolio.domain.PostDTO;

public interface PostRepository {

    void save(PostDTO postDTO);

}
