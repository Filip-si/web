package com.infomax.web;

import com.infomax.web.models.AppRole;
import com.infomax.web.models.AppUser;
import com.infomax.web.models.AppUserRole;
import com.infomax.web.repositories.AppUserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback
public class AppUserRepositoryTests {
    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void isAdminTest(){
        AppUser appUser = new AppUser(
                1,
                "John",
                "New",
                "John@New",
                "qwerty",
                "qwerty",
                "VERIFIED"
                );
        AppRole role = new AppRole(1L,"user", "user desc");
        AppUserRole roleAppUser = new AppUserRole(appUser,role);
        




    }
}
