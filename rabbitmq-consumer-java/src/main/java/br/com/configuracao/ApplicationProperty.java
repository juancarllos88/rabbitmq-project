package br.com.configuracao;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(value = "parametros")
public class ApplicationProperty {

	private Rabbitmq rabbitmq = new Rabbitmq();

	public Rabbitmq getRabbitmq() {
		return rabbitmq;
	}

	public void setRabbitmq(Rabbitmq rabbitmq) {
		this.rabbitmq = rabbitmq;
	}

	public static class Rabbitmq {
		private String consumers;

		public String getConsumers() {
			return consumers;
		}

		public void setConsumers(String consumers) {
			this.consumers = consumers;
		}

	}

}
