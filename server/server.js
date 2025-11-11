
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = "./server/users.json";
const SECRET_KEY = "your-secret-key"; // Change in production

// Helper to read/write file
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "[]");
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
};
const writeUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

// Signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  writeUsers(users);

  res.json({ message: "Signup successful" });
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find((u) => u.email === email);

  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token, user: email });
});

// Protected route test (optional)
app.get("/protected", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ message: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: "Protected content", user: decoded.email });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
