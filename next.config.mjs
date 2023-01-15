// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
};
export default config;
