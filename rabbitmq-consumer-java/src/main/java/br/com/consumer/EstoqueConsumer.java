package br.com.consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.configuracao.ApplicationProperty;
import br.com.dto.EstoqueDto;

@Component
public class EstoqueConsumer {

	private static final Logger log = LoggerFactory.getLogger(EstoqueConsumer.class);
	
	public  static final String QUEUE_ESTOQUE = "fila.estoque";
	public  static final String CONSUMERS_ESTOQUE = "5";
	
	@Autowired
	private static ApplicationProperty properties;
	
	@Autowired
	private ObjectMapper mapper;
	
	
	@RabbitListener(queues = QUEUE_ESTOQUE, concurrency = "${parametros.rabbitmq.consumers}")
	private void consumer(Message message) throws Exception {
		String json = new String(message.getBody(), "UTF-8");
		mapper = new ObjectMapper();
		EstoqueDto estoqueDto  = mapper.readValue(json, EstoqueDto.class);
		log.info("Thread {} => Mensagem: {}", Thread.currentThread().getId(), estoqueDto.toString());
	}
	
}
