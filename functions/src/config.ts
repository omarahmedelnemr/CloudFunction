import { ConnectionOptions, Connection, createConnection, getConnection,  } from "typeorm";
import 'reflect-metadata';

export const prod = process.env.NODE_ENV ==='production';

export const config: ConnectionOptions = {
    name:'dev',
    type:'mysql',
    host:"mysql-64469-0.cloudclusters.net",
    port:12458,
    username:'admin',
    password:'pMvhMtS3',
    database:'test',
    synchronize:true,
    logging:false,
    entities:[
        'lib/entity/**/*.js'
    ],
    ...(prod &&{
        database:'production',
        logging:false,
    })
}



export const connect =async () => {
    let connection:  Connection;
    try{
        connection = getConnection(config.name);
    }catch(err){
        connection = await createConnection(config)
    }
    return connection;
    
}