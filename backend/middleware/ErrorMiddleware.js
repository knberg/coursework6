import ApiError from "../ApiError.js";

const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    } else {
        
    }
    res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;