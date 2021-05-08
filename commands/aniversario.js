/* eslint-disable comma-dangle */
const { MessageEmbed } = require('discord.js');
const mongoDB = require('../connections/mongoDB');

function transformMencion(id) {
  return '**<@'.concat(id).concat('>**\n');
}

function listarAniversariantes(lista) {
  const listaMencao = [];
  lista.forEach(({ _id }) => {
    listaMencao.unshift(transformMencion(_id));
  });
  return listaMencao;
}

function validaData(msg) {
  let data = msg;
  const myRegexp = /\d{1,2}[-./]\d{1,2}/g;
  data = myRegexp.exec(data);
  if (data) {
    data = data[0].replace(/[-.]/g, '/');

    const dtArray = data.split('/');

    const dtDay = dtArray[0];
    const dtMonth = dtArray[1];

    if (dtDay < 1 || dtDay > 31) return false;
    if (dtMonth < 1 || dtMonth > 12) return false;

    return data;
  }
  return false;
}

module.exports = async function niver(msg) {
  const zeroFill = (n) => '0'.concat(n).slice(-2);

  const data = new Date();
  const dia = zeroFill(data.getDate());
  const mes = zeroFill(data.getMonth() + 1);
  const hoje = dia.concat('/').concat(mes);

  const { id, username } = msg.author;
  const dados = {
    id,
    username,
    data: validaData(msg),
    hoje,
  };

  if (msg.channel.name !== 'aniversários') {
    return;
  }

  if (msg.content.match(/niver/gi) && validaData(msg)) {
    const resposta = await mongoDB.gravar(dados);

    if (resposta) {
      msg.channel.send('Aniversário atualizado');
      msg.react('🔄');
    } else {
      msg.channel.send('Aniversário gravado!');
      msg.react('🥳');
    }
  } else if (msg.content === '!aniversariantes') {
    msg.channel.send('Buscando aniversariantes');
    msg.react('🤘');

    const aniversariantes = await mongoDB.buscar(dados);
    if (aniversariantes) {
      const listaAniversariantes = listarAniversariantes(aniversariantes);
      const embed = new MessageEmbed()
        .setTitle('🎈 Aniversariantes do dia 🎈')
        .setDescription(
          `${listaAniversariantes} \n Um feliz aniversário a todos, em nome da perifaCode. ✨💛`
        )
        .setFooter('Criado com 💛 pela comunidade perifaCode')
        .setColor('#fff200');
      msg.channel.send(embed);
    } else {
      msg.channel.send('Não temos aniversariantes no dia de hoje! ☺');
    }
  }
};
