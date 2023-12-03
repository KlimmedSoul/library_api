export class ApiErrors extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static IncorrectDataError() {
        return new ApiErrors(500, 'Incorrect data')
    }

    static BadRequest(message, errors = []) {
        return new ApiErrors(400, message, errors);
    }
}