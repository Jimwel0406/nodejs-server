const express = require('express');
const app = express();
const port = 8080;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jimwelscruz0406:Residentevil0406_@cluster0.dpqawec.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// In your Node.js server using Express.js

app.get('/test', (req, res) => {
  // You can define API routes and logic here
  res.json({ message: 'Hello from the Node.js server!' });
});

app.listen(port, () => {
  console.log(`Node.js server is running on http://localhost:${port}`);
});
