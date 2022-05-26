import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: ["./theme/index.ts", "./components/index.ts"],
    output: [
      {
        format: "cjs",
        dir: "dist",
        exports: "named",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: true,
        sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
          let sourcePath = path.resolve(
            path.dirname(sourcemapPath),
            relativeSourcePath
          );

          if (sourcePath.indexOf("duqqy_boost_frontend/src/")) {
            sourcePath = sourcePath.replace(
              "duqqy_boost_frontend/src/",
              "duqqy_boost_frontend/src/ui/"
            );
          }

          return sourcePath;
        },
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];
