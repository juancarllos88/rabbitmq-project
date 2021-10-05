package br.com.rabbitmq.connection;

import javax.annotation.PostConstruct;

import org.springframework.amqp.core.AmqpAdmin;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.stereotype.Component;

import org.springframework.amqp.core.Queue;

@Component
public class RabbitMqConnection {

	private static final String NAME_EXCHANGE = "amq.direct";
	public  static final String QUEUE_ESTOQUE = "fila.estoque";
	public static final String QUEUE_PRECO = "fila.preco";
	private AmqpAdmin amqpAdmin;

	public RabbitMqConnection(AmqpAdmin amqpAdmin) {
		this.amqpAdmin = amqpAdmin;
	}

	private Queue criarFila(String nomeFila) {
		return new Queue(nomeFila, true, false, false);
	}

	private DirectExchange criarExchange() {
		return new DirectExchange(NAME_EXCHANGE);
	}

	private Binding criarBinding(Queue fila, DirectExchange exchange) {
		return new Binding(fila.getName(), Binding.DestinationType.QUEUE, exchange.getName(), fila.getName(), null);
	}
	
	@PostConstruct
	private void criacao() {
		Queue filaEstoque = criarFila("fila.estoque");
		Queue filaPreco = criarFila("fila.preco");
		
		DirectExchange exchange = criarExchange();
		
		Binding linkEstoque = criarBinding(filaEstoque, exchange);
		Binding linkPreco = criarBinding(filaPreco, exchange);
		
		amqpAdmin.declareQueue(filaEstoque);
		amqpAdmin.declareQueue(filaPreco);
		
		amqpAdmin.declareExchange(exchange);
		amqpAdmin.declareBinding(linkEstoque);
		amqpAdmin.declareBinding(linkPreco);
		
	}

}
