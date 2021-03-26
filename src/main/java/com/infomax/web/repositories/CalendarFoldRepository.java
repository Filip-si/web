package com.infomax.web.repositories;

import com.infomax.web.models.Article;
import com.infomax.web.models.configs.CalendarFold;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CalendarFoldRepository extends JpaRepository<CalendarFold, Long> {
    List<CalendarFold> findByAuthor_id(long appUser);
    CalendarFold findById(long id);
}
