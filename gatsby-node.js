exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/",
    toPath: "/testimony/1",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/testimony",
    toPath: "/testimony/1",
    isPermanent: true,
    redirectInBrowser: true,
  });
};
