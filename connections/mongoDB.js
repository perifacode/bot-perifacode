/* eslint-disable comma-dangle */
const { MongoClient } = require('mongodb');

async function connection() {
  const uri = process.env.TOKEN_MONGODB;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    return client;
  } catch (error) {
    return error;
  }
}

async function findByDate(client, date) {
  const cursor = await client.db('Dados').collection('Aniversarios').find({
    aniversario: date,
  });
  const results = await cursor.toArray();

  if (results.length > 0) {
    return results;
  }
  return null;
}

async function findById(client, id) {
  const cursor = await client.db('Dados').collection('Aniversarios').find({
    _id: id,
  });
  const results = await cursor.toArray();
  if (results.length > 0) return true;
  return false;
}

async function atualizar(client, dados) {
  await client
    .db('Dados')
    .collection('Aniversarios')
    .updateOne(
      { _id: dados.id },
      {
        $set: {
          aniversario: dados.data,
        },
      }
    );
  return true;
}

async function criar(client, dados) {
  await client.db('Dados').collection('Aniversarios').insertOne({
    _id: dados.id,
    username: dados.username,
    aniversario: dados.data,
  });
  return true;
}

module.exports = {
  buscar: async (dados) => {
    const client = await connection();
    const resposta = await findByDate(client, dados.hoje);
    await client.close();
    return resposta;
  },
  gravar: async (dados) => {
    const client = await connection();
    const resposta = await findById(client, dados.id);
    if (resposta) {
      atualizar(client, dados);
    } else {
      criar(client, dados);
    }
    await client.close();
    return resposta;
  },
};
