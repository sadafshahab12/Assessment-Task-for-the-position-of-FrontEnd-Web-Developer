import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Signup router");
});
router.get("/login", (req, res) => {
  res.send("Login router");
});
router.get("/logout", (req, res) => {
  res.send("Login router");
});

export default router;
