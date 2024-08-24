const { MongoClient } = require("mongodb");

const DB_PASSWORD = 'mahimbabu_mhmahim';
const DB_USER = 'mahimbabu';

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jt5df8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const client = new MongoClient(uri)

export async function connectDB() {
    return client.db("mhStore")
}