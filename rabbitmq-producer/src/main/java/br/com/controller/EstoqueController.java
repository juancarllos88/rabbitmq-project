package br.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.dto.EstoqueDto;
import br.com.rabbitmq.connection.RabbitMqConnection;
import br.com.service.RabbitmqService;

@RestController
@RequestMapping(value = "/estoque")
public class EstoqueController {
	
	@Autowired
	private RabbitmqService service;
	
	@PutMapping
	public ResponseEntity<String> atualizarEstoque(@RequestBody EstoqueDto estoqueDto) {
		service.enviarMensagem(RabbitMqConnection.QUEUE_ESTOQUE, estoqueDto);
		return ResponseEntity.ok("sucesso");
	}

}
