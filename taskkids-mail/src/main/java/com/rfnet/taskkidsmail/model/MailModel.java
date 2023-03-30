package com.rfnet.taskkidsmail.model;

import com.rfnet.taskkidsmail.enums.StatusMail;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;


@Data
@Entity
@Table (name = "TBMAIL")
public class MailModel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mailId;
    private String ownerRef;
    private String mailFrom;
    private String mailTo;
    private String subject;
    @Column(columnDefinition = "TEXT")
    private String text;
    private LocalDateTime sendDateMail;
    private StatusMail statusMail;

}
