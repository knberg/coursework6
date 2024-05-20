class ApiError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status || 500;
        this.message = message || 'Internal Server Error';
    }

    static badRequest(message) {
        return new ApiError(400, message || 'Bad Request');
    }

    static unauthorized(message) {
        return new ApiError(401, message || 'Unauthorized');
    }

    static forbidden(message) {
        return new ApiError(403, message || 'Forbidden');
    }

    static notFound(message) {
        return new ApiError(404, message || 'Not Found');
    }

    static conflict(message) {
        return new ApiError(409, message || 'Conflict');
    }
}

export default ApiError;