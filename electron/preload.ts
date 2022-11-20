import { ipcRenderer, contextBridge } from 'electron';
import { IWheel } from './wheel';

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const api: IWheel = {
  ping: () => ipcRenderer.invoke('ping'),
  counter: (callback) => ipcRenderer.on('counter', callback),
};

contextBridge.exposeInMainWorld('wheel', api);
