exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get("Cookie").split("=")[1];
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  // req.isLoggedIn = true;  // this is not ideal because this is not persisted across requests
  res.setHeader("Set-Cookie", "loggedIn = true");
  res.redirect("/");
};
