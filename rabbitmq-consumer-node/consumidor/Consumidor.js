const amqp = require("amqplib");

const QUEUE_ESTOQUE = "fila.estoque";
const confRabbit = require("../configuracao");

amqp
  .connect(confRabbit)
  .then((conexao) => {
    conexao
      .createChannel()
      .then((channel) =>
        channel.consume(
          QUEUE_ESTOQUE,
          (mensagem) => {
            imprimir(mensagem);
          },
          { noAck: true }
        )
      )
      .catch((erro) => console.log(erro));
  })
  .catch((erro) => console.log(erro));

const imprimir = (mensagem) => {
  console.log(mensagem.content.toString());
};
