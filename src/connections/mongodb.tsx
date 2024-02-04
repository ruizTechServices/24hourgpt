import { MongoClient, ServerApiVersion } from 'mongodb';

const uri: string = "mongodb+srv://vercel-admin-user:VplRD4LGq95MyyXw@cluster0.akwttgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // I want to use `MONGODB_URI` instead

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client: MongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(): Promise<void> {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const pingResult = await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!", pingResult);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
