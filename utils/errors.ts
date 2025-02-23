// utils/errors.ts
export class APIError extends Error {
  constructor(message: string, public status?: number, public code?: string) {
    super(message);
    this.name = "APIError";
  }
}
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
