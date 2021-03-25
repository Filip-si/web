package com.infomax.web.repositories;

import com.infomax.web.models.AppUser;
import com.infomax.web.models.configs.CalendarFold;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface CalendarFoldRepository extends JpaRepository<CalendarFold, Long> {
    List<CalendarFold> findByAuthor_id(long appUser);
}
