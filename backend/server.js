import app from "./app.js";

const PORT = process.env.PORT || 4001; // Default to 4001 if PORT is not set

const server = app.listen(PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});

server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    
    const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;
    
    // Handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            console.log('Attempting to use port 4002 instead...');
            const altPort = 4002;
            app.listen(altPort, () => {
                console.log(`Server is now running on port ${altPort}`);
            });
            break;
        default:
            throw error;
    }
});
