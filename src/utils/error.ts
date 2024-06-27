class APIError extends Error {
  public statusCode: number;
  public message: string;
  public error: any;
  private data: any;
  private success: boolean;

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    error: any = [],
    stack: string = ""
  ) {
    super(message);

    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = this.error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
