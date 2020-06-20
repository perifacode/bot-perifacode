const {
  MongoClient
} = require('mongodb');
const {
  MessageEmbed
} = require('discord.js');


module.exports = function mongoDB(msg, argumento) {
  const zeroFill = n => {
    return ('0' + n).slice(-2);
  }

  const data = new Date();
  const dia = zeroFill(data.getDate());
  const mes = zeroFill(data.getMonth() + 1);
  const hoje = dia + '/' + mes;

  const usuario = msg.author;
  const aniversario = msg.content.split(' ')[1];

  async function main() {
    const uri = 'mongodb+srv://sergio:sergio@perifacode-gzego.mongodb.net/test?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    try {
      await client.connect();
      if (argumento === 'gravar') {
        await createListing(client, {
          _id: usuario.id,
          nome: usuario.username,
          Aniversario: aniversario
        });
      } else if (argumento === 'buscar') {
        await findByDate(client, hoje, msg);
      }

    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }

  main().catch(console.error);
}

async function createListing(client, newListing) {
  await client.db('Dados').collection('Aniversarios').insertOne(newListing);
}

async function findByDate(client, date, msg) {
  const cursor = await client.db('Dados').collection('Aniversarios').find({
    Aniversario: date
  });
  const results = await cursor.toArray();


  if (results.length > 0) {
    const aniversariantes = listaAniversariantes(results);
    const embed = new MessageEmbed()
      .setTitle('Aniversariantes do dia')
      .setDescription(`Parabéns aos aniversariantes do dia... frase bonitinha kkkkk \n ${aniversariantes}`)
      .setFooter('Criado com 💛 pela comunidade perifaCode')
      .setColor('#fff200');
    msg.channel.send(embed);
  }
}

function listaAniversariantes(lista) {
  const listaMencao = new Array();
  lista.forEach((aniversario) => {
    listaMencao.unshift(transformMencion(aniversario._id));
  });
  return listaMencao;
}

function transformMencion(id) {
  return ('**<@'.concat(id).concat('>**\n'));
}