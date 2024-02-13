// import { PathLike, readdirSync, statSync } from "fs";

import { RuleConfigSeverity } from "@commitlint/types";
import type { UserConfig } from "@commitlint/types";

// const getDirectories = (source: PathLike): string[] =>
//   readdirSync(source)
//   .filter(file => statSync(path.join(source, file))
//   .isDirectory())

// console.log(getDirectories("packages"))

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],

  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    "header-min-length": [RuleConfigSeverity.Error, "always", 20],
    "scope-empty": [RuleConfigSeverity.Error, "never"],
    "scope-enum": [RuleConfigSeverity.Error, "always", ["foo", "bar", "baz"]],
  },
};

module.exports = Configuration;
