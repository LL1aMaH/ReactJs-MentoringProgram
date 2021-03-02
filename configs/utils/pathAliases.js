const path = require('path');

const getWebpackPathAliases = (paths, rootDir) => Object.entries(paths).reduce(
  (acc, [key, [value]]) => {
    const alias = key.replace('/*', '');
    const resolvedPath = path.resolve(rootDir, `${value.replace('/*', '/')}`);

    acc[alias] = resolvedPath;
    return acc;
  },
  {},
);

const getJestPathAliases = (paths) => Object.entries(paths).reduce(
  (acc, [key, [value]]) => {
    const alias = `^${key.replace('/*', '/(.*)$')}`;
    const resolvedPath = `<rootDir>/${value.replace('/*', '/$1')}`;

    acc[alias] = resolvedPath;
    return acc;
  },
  {},
);

module.exports = {
  getWebpackPathAliases,
  getJestPathAliases,
};
