package com.infomax.web;

import com.infomax.web.controllers.IndexController;
import com.infomax.web.controllers.adminpanel.AppUserController;
import com.infomax.web.dto.AppUserDTO;
import com.infomax.web.models.AppUser;
import com.infomax.web.services.AppUserServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class WebApplicationTests {

	@Test
	void contextLoads() throws Exception{
	}


}
