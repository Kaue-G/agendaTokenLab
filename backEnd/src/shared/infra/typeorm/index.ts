import { Connection, createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
}

export default async (host = 'databaseToken'): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOptions, {
            host,
        }),
    );
};
