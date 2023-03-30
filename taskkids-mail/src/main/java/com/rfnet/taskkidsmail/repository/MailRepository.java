package com.rfnet.taskkidsmail.repository;

import com.rfnet.taskkidsmail.model.MailModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MailRepository extends JpaRepository<MailModel, Long> {

}
