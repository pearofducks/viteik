import type { Plugin } from 'vite'

declare function VitEikPlugin(eikOptions?: object): Plugin
export default VitEikPlugin
export const outputOptions: object
