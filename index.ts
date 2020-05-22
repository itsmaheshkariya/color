class Clc {
    str: any;
    constructor(){
        this.str = '';
    }
    get reset(){  this.str+='\x1b[0m'; return this}
    get bright(){  this.str+='\x1b[1m'; return this}
    get dim(){  this.str+='\x1b[2m'; return this}
    get underscore(){  this.str+='\x1b[4m'; return this}
    get blink(){  this.str+='\x1b[5m'; return this}
    get reverse(){  this.str+='\x1b[7m'; return this}
    get hidden(){  this.str+='\x1b[8m'; return this}

    get black(){  this.str+='\x1b[30m'; return this}
    get red(){  this.str+='\x1b[31m'; return this}
    get green(){  this.str+='\x1b[32m'; return this}
    get yellow(){  this.str+='\x1b[33m'; return this}
    get blue(){  this.str+='\x1b[34m'; return this}
    get magenta(){  this.str+='\x1b[35m'; return this}
    get cyan(){  this.str+='\x1b[36m'; return this}
    get white(){  this.str+='\x1b[37m'; return this}

    get bgBlack(){  this.str+='\x1b[40m'; return this}
    get bgRed(){  this.str+='\x1b[41m'; return this}
    get bgGreen(){  this.str+='\x1b[42m'; return this}
    get bgYellow(){  this.str+='\x1b[43m'; return this}
    get bgBlue(){    this.str+='\x1b[44m'; return this}
    get bgMagenta(){  this.str+='\x1b[45m'; return this}
    get bgCyan(){  this.str+='\x1b[46m'; return this}
    get bgWhite(){  this.str+='\x1b[47m'; return this}
    text(val:any){
        let temp:string = this.str
        this.str = ''
        return temp+val
    }


}
let clc = new Clc()
export default clc;