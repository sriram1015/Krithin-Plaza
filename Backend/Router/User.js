const express = require('express');
const router = express.Router();
const User =require('../Model/User');
const bcrypt = require("bcrypt"); 

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("Received Login Request for Email:", email);

    try {
        // Step 1: Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User Not Found:", email);
            return res.status(400).json({ status: 'error', message: 'Invalid credentials' });
        }

        console.log("User Found:", user.email);

        // Step 2: Compare Password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Password Check:", isPasswordValid);

        if (!isPasswordValid) {
            console.log("Invalid Password for:", email);
            return res.status(400).json({ status: 'error', message: 'Invalid credentials' });
        }

        console.log("Login Successful for:", email);
        res.json({ success: 'ok', message: 'Login successful' });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ status: 'error', message: 'An error occurred during login' });
    }
});




router.post("/register", async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;

        if (!username || !email || !password || !phone) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, phone });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error! Registration failed." });
    }
});


module.exports = router; 