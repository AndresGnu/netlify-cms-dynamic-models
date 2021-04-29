import { Contexts } from '@monkeyplus/flow';
import {} from '@monkeyplus/flow-icons';
import {} from '@monkeyplus/flow-images';
import {} from '@monkeyplus/flow-vue';
import { MyContext } from '@app/types';
declare global {
  export function useSeo(): Contexts.Seo;
  export function usePage(): Contexts.Page;
  export function useUtils(): Contexts.Utils;
  export function useView(): Contexts.View;
  export function useGlobal(): Contexts.Global;
  /**
   * Context
   */
  export function useContext(): any;
  export function useContext(name: 'home'): MyContext.Home;
  export function useContext(name: 'blog'): MyContext.Blog;

  // export const useAllContext: () => Flow.AppState;
}
