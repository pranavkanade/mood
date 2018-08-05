const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Vote = require("../models/Votes");

const Pusher = require("pusher");

var pusher = new Pusher({
    appId: "572770",
    key: "919aab7600038be27360",
    secret: "5d96095b7ab411d8983c",
    cluster: "ap2",
    encrypted: true
});

router.get("/", (req, res) => {
    res.send("POLL");
});

router.post("/", (req, res) => {
    const newVote = {
        music: req.body.music,
        points: 1
    };

    new Vote(newVote).save().then(vote => {
        pusher.trigger("music-poll", "music-vote", {
            points: parseInt(vote.points),
            music: vote.music
        });

        return res.json({ success: true, message: "Thank you for voting" });
    });
});

module.exports = router;
