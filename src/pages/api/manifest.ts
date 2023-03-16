import { AppManifest } from "@saleor/app-sdk/types";
import { createManifestHandler } from "@saleor/app-sdk/handlers/next";
import packageJson from "../../../package.json";

export default createManifestHandler({
  async manifestFactory(context) {
    const manifest: AppManifest = {
      name: "Abandoned Checkouts",
      id: "abandoned.checkouts.app",
      version: packageJson.version,
      appUrl: context.appBaseUrl,
      tokenTargetUrl: `${context.appBaseUrl}/api/register`,
      permissions: ["MANAGE_CHECKOUTS"],
      extensions: [{
        label: "Abandoned Checkouts",
        mount: "NAVIGATION_ORDERS",
        target: "APP_PAGE",
        permissions: ["MANAGE_CHECKOUTS"],
        url: "/"
      }]
    };

    return manifest;
  }
});
