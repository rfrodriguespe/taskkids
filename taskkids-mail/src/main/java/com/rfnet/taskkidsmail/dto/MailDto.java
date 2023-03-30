package com.rfnet.taskkidsmail.dto;


import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class MailDto {

    @NotBlank
    private String ownerRef;
    @NotBlank
    @Email
    private String mailFrom;
    @NotBlank
    @Email
    private String mailTo;
    @NotBlank
    private String subject;
    @NotBlank
    private String text;

}
