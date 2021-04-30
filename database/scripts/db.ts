import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export async function up(dbName: string, collectionName: string, data: any[]) {
  try {
    await client.connect();
    // client.c
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    // console.log(data);

    await collection.insertMany(data);
    await client.close();
  } catch (error) {
    console.log(error);

    await client.close();
  }
}
