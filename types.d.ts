import type { Plugin } from 'vite'

declare function VitEikPlugin(eikOptions?: object): Plugin
export default VitEikPlugin
export const outputOptions: object
interface BaseArgs {
  pkg?: object,
  name?: string,
  version?: string
}
export function getBase(args: BaseArgs): string
