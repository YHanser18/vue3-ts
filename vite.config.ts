import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path"; // 配置@别名
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"; // element-plus
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"; // ant-design-vue

// 定义组件名称语法糖
import VueSetupExtend from "vite-plugin-vue-setup-extend";
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite";
//自动导入ui-组件 如ant-design-vue  element-plus等
import Components from "unplugin-vue-components/vite";
import jsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    VueSetupExtend(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ["vue", "vue-router"], // 安装后 在组件中不用再导入ref，reactive等
      dts: "src/auto-import.d.ts", // 存放的位置
      // element-plus ant-design-vue
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
    }),
    Components({
      dts: "src/components.d.ts", // 引入组件的,包括自定义组件存放的位置
      // element-plus ant-design-vue
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver({ importStyle: true, resolveIcons: true }),
      ],
    }),
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // 配置路径别名
    },
  },
});
