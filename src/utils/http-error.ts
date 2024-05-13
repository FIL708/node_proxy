export class HttpError extends Error {
    statusCode: number;

    constructor(
        message: string = 'Internal Server Error',
        statusCode: number = 500
    ) {
        super(message);

        Object.setPrototypeOf(this, HttpError.prototype);

        this.statusCode = statusCode;
    }
}
