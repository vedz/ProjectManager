import { Channels } from 'main/preload';
import { IProject } from '../lib/types';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
        getProjects(): Promise<IProject[]>;
      };
    };
  }
}

export {};
