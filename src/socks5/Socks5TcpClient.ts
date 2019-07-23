import * as Socks5Client from "socks5-client";
import * as EventEmitter from "events";

interface Socks5Option {
    hostname: string;
    port: number;
    username?: string;
    password?: string;
}

export default class Socks5TcpClient extends EventEmitter {

    private socket: Socks5Client.Socket;
    
    constructor(
        private host: string,
        private port: number,
        private username?: string,
        private password?: string
    ) {
        super();
    }

    public connect(isIpv4Address: boolean, targetHost?: Buffer, targetPort?: number) {
        this.socket = Socks5Client.createConnection({
            hostname: this.host, 
            port: this.port,
        })
        this.socket.socket.setNoDelay(true)
    }


    public disconnect() {
    }

    public write(data: Buffer): Promise<void> {
        return new Promise(function (resolve, reject) {
            //if (!this.isConnected) {
                //this.buffersCache.push(data);
                //return resolve();
            //}
            //this.socket.write(this.method.encryptData(data), resolve);
            this.socket.write(data, resolve)
        }.bind(this));
    }

    public pause(p: boolean = true) {
    }

    public destroy() {
    }
}
