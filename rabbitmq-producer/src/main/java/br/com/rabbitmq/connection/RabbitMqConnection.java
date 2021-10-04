package br.com.rabbitmq.connection;

import org.springframework.amqp.core.AmqpAdmin;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.stereotype.Component;

import org.springframework.amqp.core.Queue;

@Component
public class RabbitMqConnection {

	private static final String NAME_EXCHANGE = "amq.direct";
	private AmqpAdmin amqpAdmin;

	public RabbitMqConnection(AmqpAdmin amqpAdmin) {
		this.amqpAdmin = amqpAdmin;
	}
	
	private Queue fila(String nomeFila) {
		return new Queue(nomeFila, true	, false, false);
	}
	
	private DirectExchange trocaDireta() {
		return new DirectExchange(NAME_EXCHANGE);
	}
	

}
