package com.infomax.web.services;

public interface EmailSender {
    void sendEmail(String subject, String content);
    void sendEmail(String from, String subject, String content);
}
