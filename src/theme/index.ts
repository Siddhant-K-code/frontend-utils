import { openfgaDark } from "./supported-themes/openfga-dark";
import { OpenFgaThemeConfiguration, SupportedTheme } from "./theme.typings";

export {
  OpenFgaThemeConfiguration,
  SupportedTheme,
  OpenFgaDslThemeToken,
  OpenFgaDslThemeTokenType,
} from "./theme.typings";
export { languageDefinition } from "../tools/prism/language-definition";

export const supportedThemes: Record<SupportedTheme, OpenFgaThemeConfiguration> = {
  [SupportedTheme.OpenFgaDark]: openfgaDark,
};
