module.exports = class ExportWithStatus extends Error {
    constructor(message = '', status = 200) {
        super(message);

        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    }
};
