import { Channels } from 'main/preload';
import { IProject } from '../api/directory';

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
        getProjects(): IProject[];
      };
    };
  }
}

export {};
