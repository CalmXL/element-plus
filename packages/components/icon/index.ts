import { withInstall } from '@ele-plus/utils/with-install';
import Icon from './src/icon.vue'

// import type { App, Plugin } from 'vue'; // 只导入类型，不导入值

// type SFCWithInstall<T> = T & Plugin

// function withInstall<T> (comp: T) {
//   (comp as SFCWithInstall<T>).install = function (app: App) {
//     app.component((comp as any).name, comp)
//   }

//   return comp as SFCWithInstall<T>
// }

const zIcon = withInstall(Icon);

export {
  zIcon
}

export default zIcon;


// 注册全局的
// App.use(ZIcon)