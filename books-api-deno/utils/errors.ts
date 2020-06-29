export class UnauthorizedError extends Error {
  status = 401;
  message = "Unauthorized Error";
}

export class ParameterRequired extends Error {
  status = 401;
  message = "ParameterRequired Error";
}
