import App from "./app";

export default class Server {

    constructor(private port: number) {
    }

    public start() {
        App.listen(this.port, () => {
            console.log('Server start');
        })
    }

}