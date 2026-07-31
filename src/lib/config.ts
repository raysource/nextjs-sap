// ============================================================
// 统一配置 — WordPress API 访问
//
// 所有访问 WordPress REST API 的地址统一在此文件管理，
// 禁止在页面 / 组件中硬编码 /wp-json/... 路径。
//
// 默认 WordPress 站点为生产环境：
//   https://sap-navi.aladdin-techec.com
//
// 本地开发可用环境变量覆盖（见 .env.example）：
//   NEXT_PUBLIC_WP_URL      — WordPress 站点绝对 URL
//   NEXT_PUBLIC_API_BASE    — SAP API 绝对基址（Server Components 用）
//   NEXT_PUBLIC_SITE_URL    — 站点公开 URL（SEO / OGP 用）
//
// 注意：NEXT_PUBLIC_* 变量在构建时会被内联进客户端 bundle。
// ============================================================

// WordPress 站点绝对 URL（默认生产环境）
export const WP_URL =
  process.env.NEXT_PUBLIC_WP_URL || 'https://sap-navi.aladdin-techec.com';

// WordPress REST API 根路径（next.config.js rewrites 代理源）
export const WP_REST_ROOT = '/wp-json';

// SAP API 相对基址（Client Components 用，经 rewrites 代理到 WP_URL）
export const PUBLIC_API_BASE = `${WP_REST_ROOT}/sap/v1`;

// SAP API 绝对基址（Server Components 用，Next.js fetch 需要绝对 URL）
export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || `${WP_URL}/wp-json/sap/v1`;

// 站点公开 URL（SEO / OGP 用）
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://sap-navi.aladdin-techec.com';
