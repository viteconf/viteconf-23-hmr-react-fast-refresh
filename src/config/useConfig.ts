import { create } from 'zustand';
import initialConfig from './initialConfig.json';

export type Config = typeof initialConfig;
export const useConfig = create<{
  config: Config;
  updateConfig: (key: string, value: string) => void;
}>((set) => ({
  config: initialConfig,
  updateConfig: (key, value) =>
    set(({ config }) => ({ config: { ...config, [key]: value } })),
}));

import.meta.hot.accept(['./initialConfig.json'], ([mod]) => {
  if (mod) useConfig.setState({ config: mod['default'] });
});
