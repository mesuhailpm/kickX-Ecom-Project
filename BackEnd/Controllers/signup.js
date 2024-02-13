import jwt from "jsonwebtoken";

const singUp = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.json({ status: 200, message: "no token available" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "123456789");
    res.json({ ...decoded, msg: "Post Sign Up" });
  } catch (error) {
    res.json({ msg: "incorrect token", isLogin: false });
  }
};

export { singUp };
