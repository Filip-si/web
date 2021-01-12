package com.infomax.web.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.thymeleaf.spring5.SpringTemplateEngine;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(final AuthenticationManagerBuilder auth) throws  Exception{
        auth.inMemoryAuthentication()
                .withUser("us1").password(passwordEncoder().encode("pasus1")).roles("USER")
                .and()
                .withUser("us2").password(passwordEncoder().encode("pasus2")).roles("USER")
                .and()
                .withUser("ad1").password(passwordEncoder().encode("pasad1")).roles("ADMIN");
    }
    @Override
    protected void configure(final HttpSecurity http) throws Exception{
                http
                        .csrf().disable()
                        .authorizeRequests()
                        .antMatchers("/admin/**").hasRole("ADMIN")
                        .antMatchers("/logout").hasRole("USER")
                        .antMatchers("/","/index","/index#contact","/login","/register").anonymous()
                        .antMatchers("/dzielne","/dzielne#contact","/logout").authenticated()
                        .and()
                        .formLogin()
                        .loginPage("/login")
                        .loginProcessingUrl("/login")
                        .defaultSuccessUrl("/dzielne")
                        .failureUrl("/login-error")
                        //.failureHandler(authe)
                        .and()
                        .logout()
                        .logoutUrl("/logout")
                        .deleteCookies("JSESSIONID");
//                        .logoutSuccessHandler(logoutSuccessHandler());
    }



    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }




}
