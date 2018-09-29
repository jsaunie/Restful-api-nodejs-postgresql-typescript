import express, {Request, Response} from "express";
import bodyParser from "body-parser";

class App {

    constructor() {
        this.app = express();
        this.config()
            .routes();
    }

    public app: express.Application;

    private config(): App {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        return this;
    }

    private routes(): App {
        const router = express.Router();

        router.get('/', (req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello World!'
            })
        });

        router.get('/user', function (req: Request, res: Response) {
            res.send('Hi user');
        });

        router.post('/user', (req: Request, res: Response) => {
            const data = req.body;
            // query a database and save data
            res.status(200).send(data);
        });

        this.app.use('/', router);

        return this;
    }
}

export default new App().app;