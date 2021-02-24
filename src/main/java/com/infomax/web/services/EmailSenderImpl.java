package com.infomax.web.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailSenderImpl implements EmailSender{

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private UserPrincipalDetailsService principalDetailsService;

    @Override
    public void  sendEmail(String subject, String content) {
        MimeMessage mail = javaMailSender.createMimeMessage();
        try{
            MimeMessageHelper helper = new MimeMessageHelper(mail, true);
            helper.setTo("filip.infomax@gmail.com");//principalDetailsService.getLoggedUserEmail()); TU SIE WYSYLAJA WIADOMOSCI
//            helper.setFrom("filip.infomax@gmail.com");

            helper.setSubject(subject +  " E-mail: "+ principalDetailsService.getLoggedUser().getAppUserEmail());
            helper.setText(content,true);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        javaMailSender.send(mail);
    }

    @Override
    public void sendEmail(String email, String subject, String content) {
        MimeMessage mail = javaMailSender.createMimeMessage();
        try{
            MimeMessageHelper helper = new MimeMessageHelper(mail, true);
            helper.setTo("filip.infomax@gmail.com");
//            helper.setFrom(email);
            helper.setSubject(subject +" - "+ email);
            helper.setText(content,true);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        javaMailSender.send(mail);
    }
}
