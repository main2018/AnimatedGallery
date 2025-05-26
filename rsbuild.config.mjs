/*
 * @Author: wangpan pan.wang@ushow.media
 * @Date: 2025-05-26 17:29:11
 * @LastEditors: wangpan pan.wang@ushow.media
 * @LastEditTime: 2025-05-26 18:20:38
 * @FilePath: /AnimatedGallery/rsbuild.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  output: {
    distPath: {
      root: './dist',
    },
    assetPrefix: '/gallery/',
  },
});
