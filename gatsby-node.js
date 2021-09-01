const redirects = require("./redirects.json");

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;

  redirects.forEach((redirect) =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      isPermanent: true,
      redirectInBrowser: true,
    })
  );
};
