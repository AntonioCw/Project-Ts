/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  import { CompatVue } from '@vue/runtime-dom'
  const Vue: CompatVue
  export default Vue
  export * from '@vue/runtime-dom'
}
