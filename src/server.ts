import dotenv from 'dotenv';
dotenv.config()
import { serverHttp } from './http';
import './websocket';






const port = process.env.PORT;
serverHttp.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
