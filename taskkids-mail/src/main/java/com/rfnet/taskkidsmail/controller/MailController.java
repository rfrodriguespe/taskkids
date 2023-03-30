package com.rfnet.taskkidsmail.controller;

import com.rfnet.taskkidsmail.dto.MailDto;
import com.rfnet.taskkidsmail.model.MailModel;
import com.rfnet.taskkidsmail.service.MailService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class MailController {

    @Autowired
    MailService mailService;

    @PostMapping("/sending-mail")
    public ResponseEntity<MailModel> sendingMail(@RequestBody @Valid MailDto mailDto) {
        MailModel mailModel = new MailModel();
        BeanUtils.copyProperties(mailDto, mailModel);
        mailService.sendMail(mailModel);
        return new ResponseEntity<>(mailModel, HttpStatus.CREATED);
    }
}
