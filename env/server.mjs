// @ts-check
/**
 * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.
 * It has to be a `.mjs`-file to be imported there.
 */
import { serverSchema, serverEnv } from "./schema.mjs";
import { env as clientEnv, formatErrors } from "./client.mjs";

// Safely parse the environment variables
const _serverEnv = serverSchema.safeParse(serverEnv);

// Make sure the environment variables are valid
if (!_serverEnv.success) {
  // Log the error to the console
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(_serverEnv.error.format())
  );

  // Throw the error
  throw new Error("Invalid environment variables");
}

// Loop over the environment variables
for (let key of Object.keys(_serverEnv.data)) {
  // Make sure we're not exposing server-side variables
  if (key.startsWith("NEXT_PUBLIC_")) {
    // Log a warning message in the console
    console.warn("❌ You are exposing a server-side env-variable:", key);

    // Throw the error
    throw new Error("You are exposing a server-side env-variable");
  }
}

// Export the environment variables
export const env = { ..._serverEnv.data, ...clientEnv };
