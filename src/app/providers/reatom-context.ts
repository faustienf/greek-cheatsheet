import { clearStack, context } from '@reatom/core';

clearStack();

export const createAppFrame = () => context.start();

export const appFrame = createAppFrame();
