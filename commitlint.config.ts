import { UserConfig, RuleConfigSeverity } from '@commitlint/types';

export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "body-empty": [RuleConfigSeverity.Disabled, 'never'],
        "body-leading-blank": [RuleConfigSeverity.Disabled, 'never'],
        "footer-empty": [RuleConfigSeverity.Disabled, 'never'],
        "footer-leading-blank": [RuleConfigSeverity.Disabled, 'never'],
    }
} satisfies UserConfig;