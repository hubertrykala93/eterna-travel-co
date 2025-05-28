import { FormControl } from '@angular/forms';
import { AuditableDto } from '../core.model';

export enum AuthenticationTabs {
  REGISTER = '/register',
  LOGIN = '/login',
}

export interface UserRequest {
  email?: string;
  username: string;
  password: string;
  repassword?: string;
}

export interface UserDto extends AuditableDto {
  email: string;
  username: string;
  lastLogin: Date;
  userPermissions: string[];
  isActive: boolean;
  isVerified: boolean;
}

export interface AuthenticationControls {
  email: FormControl<string | null>;
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  repassword: FormControl<string | null>;
}

export enum AuthenticationFormControlNames {
  EMAIL = 'email',
  USERNAME = 'username',
  PASSWORD = 'password',
  REPASSWORD = 'repassword',
}
