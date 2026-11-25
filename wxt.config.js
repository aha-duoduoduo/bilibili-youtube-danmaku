import { defineConfig } from 'wxt';

const permissions = ['storage', 'activeTab', 'unlimitedStorage'];
const hostPermissions = [
    'https://api.bilibili.com/*',
    'https://www.bilibili.com/*',
    'https://www.youtube.com/oembed*',
    'https://raw.githubusercontent.com/*',
    'https://pan.quark.cn/*'
];

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: ({ browser }) => ({
        permissions,
        host_permissions: hostPermissions,
        ...(browser === 'firefox'
            ? {
                  browser_specific_settings: {
                      gecko: {
                          // 与 Firefox 附加组件商店上的扩展 ID 保持一致
                          id: '{7e307fde-371b-495e-b65f-e1b637953867}',
                          data_collection_permissions: {
                              required: ['browsingActivity', 'searchTerms', 'websiteContent']
                          }
                      }
                  }
              }
            : {})
    })
});
