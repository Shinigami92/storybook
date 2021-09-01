import { Framework } from '@storybook/csf';
import { ClientStoryApi, Loadable } from '@storybook/addons';
import { ClientApi as ClientApiClass } from '@storybook/client-api';
import { StoryshotsOptions } from '../api/StoryshotsOptions';
import { SupportedFramework } from './SupportedFramework';

export type RenderTree = (story: any, context?: any, options?: any) => any;

export interface ClientApi<TFramework extends Framework>
  extends ClientStoryApi<TFramework['storyResult']> {
  configure(loader: Loadable, module: NodeModule | false, showDeprecationWarning?: boolean): void;
  forceReRender(): void;
  clearDecorators: ClientApiClass<TFramework>['clearDecorators'];
  getStorybook: ClientApiClass<TFramework>['getStorybook'];
  setAddon: ClientApiClass<TFramework>['setAddon'];
  addArgsEnhancer: ClientApiClass<TFramework>['addArgsEnhancer'];
  addArgTypesEnhancer: ClientApiClass<TFramework>['addArgTypesEnhancer'];
  raw: ClientApiClass<TFramework>['raw'];
}

// TODO -- this is untyped for now, we could import each framework's Framework type
export interface Loader {
  load: (
    options: StoryshotsOptions
  ) => {
    framework: SupportedFramework;
    renderTree: RenderTree;
    renderShallowTree: any;
    storybook: ClientApi<Framework>;
  };
  test: (options: StoryshotsOptions) => boolean;
}
