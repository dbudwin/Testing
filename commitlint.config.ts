// module.exports = {extends: ['@commitlint/config-conventional']}

import {RuleConfigSeverity} from '@commitlint/types';
import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],

  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'scope-empty': [RuleConfigSeverity.Disabled, 'always'],
  },
};

module.exports = Configuration;
