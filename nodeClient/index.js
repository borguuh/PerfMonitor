
const os = require('os');

const cpus = os.cpus();
// What do we need to know from node about performance?
// - CPU load (current)
// - Memory Useage
//  - free
const freeMem = os.freemem();
//  - total
const totalMem = os.totalmem();
const usedMem = totalMem - freeMem;
const memUseage = Math.floor(usedMem/totalMem*100)/100;
// - OS type
const osType = os.type() == 'Darwin' ? 'Mac' : os.type();
// - uptime
const upTime = os.uptime();
// - CPU info
//  - Type
const cpuModel = cpus[0].model
//  - Number of Cores
const numCores = cpus.length;
//  - Clock Speed
const cpuSpeed = cpus[0].speed
