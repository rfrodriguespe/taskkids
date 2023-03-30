package com.rfnet.taskkidsmail.service;

import com.rfnet.taskkidsmail.enums.StatusMail;
import com.rfnet.taskkidsmail.model.MailModel;
import com.rfnet.taskkidsmail.repository.MailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class MailService {

    @Autowired
    MailRepository mailRepository;
    @Autowired
    private JavaMailSender javaMailSender;

    public MailModel sendMail(MailModel mailModel) {
        mailModel.setSendDateMail(LocalDateTime.now());
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(mailModel.getMailFrom());
            message.setTo(mailModel.getMailTo());
            message.setFrom(mailModel.getSubject());
            message.setText(mailModel.getText());
            javaMailSender.send(message);
            mailModel.setStatusMail(StatusMail.SENT);
        } catch (MailException e){
            mailModel.setStatusMail(StatusMail.ERROR);
        } finally {
            return mailRepository.save(mailModel);
        }


    }
}
