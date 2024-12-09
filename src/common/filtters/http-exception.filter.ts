import type { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { Catch, HttpException } from "@nestjs/common";
import type { Response } from "express";
// esto solo es documentacion oficial de nest para el manejo personalizado de errores: https://docs.nestjs.com/exception-filters
@Catch(HttpException) // excepciones de tipo http unicamente, lo demas en mis servicios (debuggeo) .
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const error =
      typeof exceptionResponse === "string"
        ? { message: exceptionResponse }
        : (exceptionResponse as object);

    response.status(status).json({
      statusCode: status,
      path: ctx.getRequest().url,
      ...error,
      timestamp: new Date().toISOString(),
    });
  }
}
