const {contextBridge,ipcRenderer} = require('electron');



contextBridge.exposeInMainWorld('version',{
    node : ()=> 30,
    ping : ()=>ipcRenderer.invoke('ping'),
})
