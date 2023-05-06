interface Process {
    env: {
        SECRET_SESSION: string;
        NODE_ENV: string;
        PORT: number | string;
        DB_URL: string;
        SECRET: string;
        FRONTEND: string;
    }
}

export { Process };