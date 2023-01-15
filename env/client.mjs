// @ts-check
import { clientEnv, clientSchema } from "./schema.mjs";

// Safely parse the environment variables
const _clientEnv = clientSchema.safeParse(clientEnv);

// A function the format the zod errors
export const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  errors
) => {
  return Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`;
    })
    .filter(Boolean);
};

// Do we have any errors?
if (!_clientEnv.success) {
  // Log the errors to the console
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(_clientEnv.error.format())
  );

  // Throw the error
  throw new Error("Invalid environment variables");
}

// Loop over the environment variables
for (let key of Object.keys(_clientEnv.data)) {
  // Make sure that we're using the correct naming format
  if (!key.startsWith("NEXT_PUBLIC_")) {
    // Log a warning message to the console
    console.warn(
      `❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`
    );

    // Throw the error
    throw new Error("Invalid public environment variable name");
  }
}

// Export the environment variable
export const env = _clientEnv.data;
