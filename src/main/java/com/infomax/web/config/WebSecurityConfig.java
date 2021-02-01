package com.infomax.web.config;



import com.infomax.web.services.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Autowired
    public BCryptPasswordEncoder bCryptPasswordEncoder;

    @Value("${spring.queries.users-query}")
    private String usersQuery;

    @Value("${spring.queries.roles-query}")
    private String rolesQuery;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws  Exception{
        auth.jdbcAuthentication()
                .usersByUsernameQuery(usersQuery)
                .authoritiesByUsernameQuery(rolesQuery)
                .dataSource(dataSource).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception{
                http.authorizeRequests()
                        .antMatchers("/admin/**" , "/news").hasRole("{ROLE_ADMIN}")
                        .antMatchers("/logout").hasAnyRole("{ROLE_USER}","{ROLE_ADMIN}")
                        .antMatchers("/","/index","/index#contact","/login","/register","/login-error").anonymous()
                        .antMatchers("/dzielne","/dzielne#contact","/logout").authenticated()
                        .and()
                        .csrf().disable()
                        .formLogin()
                        .loginPage("/login")
                        .loginProcessingUrl("/login")
                        .defaultSuccessUrl("/dzielne")
                        .usernameParameter("email")
                        .passwordParameter("password")
                        .failureUrl("/login-error")
                        //.failureHandler(authe)
                        .and()
                        .logout()
                        .logoutUrl("/logout")
                        .deleteCookies("JSESSIONID");
//                        .logoutSuccessHandler(logoutSuccessHandler());
    }








}
