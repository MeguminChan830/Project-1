
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_X_RapidAPI_Key: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const LC_TIME: string;
	export const npm_config_user_agent: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NVM_INC: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const LC_MONETARY: string;
	export const npm_package_scripts_check: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_dependencies__tailwindcss_typography: string;
	export const NVM_DIR: string;
	export const IM_CONFIG_PHASE: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies_prettier: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_config_registry: string;
	export const USERNAME: string;
	export const TERM: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const npm_package_dependencies_tailwind_merge: string;
	export const npm_package_dependencies_axios: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const PAPERSIZE: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_MENU_PREFIX: string;
	export const LC_ADDRESS: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const npm_package_devDependencies_eslint: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const npm_lifecycle_script: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_dependencies_bits_ui: string;
	export const LESSCLOSE: string;
	export const LC_MEASUREMENT: string;
	export const LC_IDENTIFICATION: string;
	export const npm_package_dependencies_clsx: string;
	export const QT_IM_MODULE: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const LC_NUMERIC: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const LC_PAPER: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const PNPM_HOME: string;
	export const VTE_VERSION: string;
	export const npm_package_dependencies_lucide_svelte: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_package_dependencies_nprogress: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_X_RapidAPI_Key: string;
		LESSOPEN: string;
		USER: string;
		LC_TIME: string;
		npm_config_user_agent: string;
		XDG_SESSION_TYPE: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		OLDPWD: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NVM_INC: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		npm_package_devDependencies_svelte_check: string;
		LC_MONETARY: string;
		npm_package_scripts_check: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		npm_package_dependencies__tailwindcss_typography: string;
		NVM_DIR: string;
		IM_CONFIG_PHASE: string;
		WAYLAND_DISPLAY: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies_prettier: string;
		LOGNAME: string;
		npm_package_type: string;
		_: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies_autoprefixer: string;
		XDG_SESSION_CLASS: string;
		npm_package_scripts_lint: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_config_registry: string;
		USERNAME: string;
		TERM: string;
		GNOME_DESKTOP_SESSION_ID: string;
		npm_package_dependencies_tailwind_merge: string;
		npm_package_dependencies_axios: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		PAPERSIZE: string;
		npm_package_name: string;
		NODE: string;
		XDG_MENU_PREFIX: string;
		LC_ADDRESS: string;
		GNOME_TERMINAL_SCREEN: string;
		GNOME_SETUP_DISPLAY: string;
		XDG_RUNTIME_DIR: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		npm_package_devDependencies_eslint: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		GNOME_TERMINAL_SERVICE: string;
		npm_lifecycle_script: string;
		SSH_AGENT_LAUNCHER: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		LC_NAME: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		npm_package_dependencies_bits_ui: string;
		LESSCLOSE: string;
		LC_MEASUREMENT: string;
		LC_IDENTIFICATION: string;
		npm_package_dependencies_clsx: string;
		QT_IM_MODULE: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		LC_NUMERIC: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		LC_PAPER: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		PNPM_HOME: string;
		VTE_VERSION: string;
		npm_package_dependencies_lucide_svelte: string;
		npm_package_devDependencies__types_eslint: string;
		npm_package_dependencies_nprogress: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
