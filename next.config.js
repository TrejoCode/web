module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/portafolio": { page: "/portafolio" },
      "/politicas": { page: "/politicas" },
    };
  },
  trailingSlash: false,
};
