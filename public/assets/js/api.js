const router = require("express").Router();

router.get("/users/all", function(req, res) {
    console.log("Running! The API Route is Being Called!");

    res.send("Success");
});

module.exports = router;