export default {
    server: {
        port: 8000
    },
    db: {
        username: 'postgres',
        password: 'super',
        database: 'goodjob',
        host: 'localhost',
        post: 5432,
        dialect: 'postgres'
    },
    mail: {
        
    },
    jwt: {
        access: {
            secret: 'fdfggewgwfw',
            expire: 60 * 30 * 30,   // 30 minutes
        },
        refresh: {
            secret: 'dsbfdwwgwvw',
            expire:  60 * 60 * 24 * 30,   // 30 days
        }
    }
};