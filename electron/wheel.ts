import { IpcRendererEvent } from 'electron';

export interface IWheel {
  ping: () => Promise<string>;
  counter: (callback: (event: IpcRendererEvent, ...args: any[]) => void) => void;
}
