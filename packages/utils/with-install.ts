import type { App, Plugin } from 'vue';

// 类型必须导出，否则生成不了 .d.ts 文件
export type SFCWithInstall<T> = T & Plugin

export function withInstall<T> (comp: T) {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }

  return comp as SFCWithInstall<T>
}