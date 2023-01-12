import { SaleorApp } from "@saleor/app-sdk/saleor-app";
import { FileAPL, UpstashAPL } from "@saleor/app-sdk/APL";

/**
 * By default auth data are stored in the `.auth-data.json` (FileAPL).
 * For multi-tenant applications and deployments please use UpstashAPL.
 *
 * To read more about storing auth data, read the
 * [APL documentation](https://github.com/saleor/saleor-app-sdk/blob/main/docs/apl.md)
 */

// Require `UPSTASH_URL` and `UPSTASH_TOKEN` environment variables.
const apl = 'upstash' === process.env.APL ? new UpstashAPL() : new FileAPL();

export const saleorApp = new SaleorApp({
  apl
});
