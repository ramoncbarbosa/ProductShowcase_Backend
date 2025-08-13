import { isAuthenticated } from '@middlewares/isAuthenticated/isAuthenticated';
import { isAuthorized } from '@middlewares/isAuthorized/isAuthorized';
import { Role } from '@prisma/client';
import { RequestHandler } from 'express';

class Permissions {
  static isAdmin(): RequestHandler[] {
    return [isAuthenticated, isAuthorized([Role.ADMIN, Role.ROOT])];
  }

  static isRoot(): RequestHandler[] {
    return [isAuthenticated, isAuthorized([Role.ROOT])];
  }

  static isAuthenticated(): RequestHandler[] {
    return [isAuthenticated];
  }
}

export { Permissions };