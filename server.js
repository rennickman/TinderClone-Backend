import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';



// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url ="mongodb+srv://admin:RdzwUHj3XqhMMggu@renn.1vrs6.mongodb.net/tinderdb?retryWrites=true&w=majority"



// Middleware
app.use(express.json());
app.use(Cors());


// DB config
mongoose.connect(connection_url, { useNewUrlParser: true,  useUnifiedTopology: true });




// * API Endpoints *

// Test call
app.get('/', (req, res) => {
    res.status(200).send("Hello World");
})

// Post a new card to database
app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    // Create a new card in the database
    Cards.create(dbCard, (err, data) => {
        // Check for error
        if (err) {
            res.status(500).send(err);
        } else {
            // Return data if created
            res.status(201).send(data);
        }
    });
});


// Get all the cards from database
app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        // Check for error
        if (err) {
            res.status(500).send(err);
        } else {
            // Return data if found
            res.status(200).send(data);
        }
    })
})



// Listener
app.listen(port, () => {
    console.log(`listening on localhost: ${port}`);
})