import { reatomContext } from '@reatom/react';
import type { PropsWithChildren } from 'react';

import type { createAppFrame } from './reatom-context';

type AppProviderProps = PropsWithChildren<{
  frame: ReturnType<typeof createAppFrame>;
}>;

export function AppProvider({ children, frame }: AppProviderProps) {
  return (
    <reatomContext.Provider value={frame}>{children}</reatomContext.Provider>
  );
}
