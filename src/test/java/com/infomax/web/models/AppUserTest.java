package com.infomax.web.models;

import com.infomax.web.models.AppUser;
import com.infomax.web.repositories.AppUserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@DataJpaTest
@RunWith(SpringRunner.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class AppUserTest {
    @Autowired
    private AppUserRepository appUserRepository;

    @Test
    public void testCreateAppUser(){
        AppUser appUser = new AppUser("testname","testsurname","e@m","123","123","ENABLED");
        AppUser savedAppUser = appUserRepository.save(appUser);
        assertNotNull(savedAppUser);
        assertEquals(savedAppUser,appUser);
    }


}
