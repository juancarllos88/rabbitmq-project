package br.com.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.AmqpException;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class RabbitmqService {

	private static final Logger log = LoggerFactory.getLogger(RabbitmqService.class);

	@Autowired
	private RabbitTemplate rabbitTemplate;
	
	@Autowired
	private ObjectMapper objectMapper;

	public void enviarMensagem(String nomeFila, Object mensagem) {
		log.info("Enviando mensagem para fila {}", nomeFila);
		try {
			rabbitTemplate.convertAndSend(nomeFila, objectMapper.writeValueAsString(mensagem));
		} catch (Exception e) {
			log.error("Erro ao enviar mensagem para fila {} => {}", nomeFila, e);
		}
	}
}
