import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@tzkt/oazapfts/lib/(.+)$": "<rootDir>/../src/$1",
  },
  restoreMocks: true,
};

export default config;
