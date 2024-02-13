import jwt from "jsonwebtoken";

// get username & password from user
// validate username & password from DB
// If user doesn't exist create one or reply with username already available
const signIn = async (req, res) => {
  const { username, password } = req.body;
  if (!username && !password) {
    return res.json({ msg: "Invalid credentials" });
  } else {
    const token = jwt.sign({ username }, "123456789", {
      expiresIn: "24h",
    });
    return res.json({ username, token, msg: "Post Sign In" });
  }
};

export { signIn };
