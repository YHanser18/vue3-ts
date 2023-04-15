import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path' // 配置@别名
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // element-plus
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers' // ant-design-vue

import jsx from '@vitejs/plugin-vue-jsx' // js语法拓展
import eslintPlugin from 'vite-plugin-eslint' // eslint校验
// 定义组件名称语法糖
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// 自动导入vue中hook reactive ref等
import AutoImport from 'unplugin-auto-import/vite'
//自动导入ui-组件 如ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    VueSetupExtend(),
    // eslint校验
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', 'vue-router'], // 安装后 在组件中不用再导入ref，reactive等
      dts: 'src/auto-import.d.ts', // 存放的位置

      // element-plus ant-design-vue
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()]
    }),
    Components({
      dts: 'src/components.d.ts', // 引入组件的,包括自定义组件存放的位置

      // element-plus ant-design-vue
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver({ importStyle: true, resolveIcons: true })
      ]
    })
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // 配置路径别名
    }
  },

  // 解决文件大小报错
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        }
      }
    }
  }
})
