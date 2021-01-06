import { EnumUtil } from '@zy/shared/util';

export type ContainerType = 'body' | 'dialog' | 'popover';

export enum ContainerSelector {
    body = 'body',
    dialog = '.modal',
    popover = '.popover'
}

export function isContainerSelector(selector: string): boolean {
    return EnumUtil.isValueInEnum(ContainerSelector, selector);
}
