import { randomUUID } from 'crypto';
import { DomainValidationError } from '../../errors/domain_validation_error';

const roleTags = { ADMIN: 'ADMIN', USER: 'USER' } as const;
type Role = (typeof roleTags)[keyof typeof roleTags];

export type UserProps = {
  id?: number;
  uuid: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export class User {
  private constructor(private props: UserProps) {}

  public static createNew(name: string, email: string, password: string, role: Role) {
    return new User({
      name,
      email,
      password,
      role,
      uuid: randomUUID(),
    });
  }

  public static fromData(props: UserProps) {
    if (props.id === undefined) {
      throw new DomainValidationError('User ID must be provided');
    }
    return new User(props);
  }

  public get id() {
    return this.props.id;
  }

  public get uuid() {
    return this.props.uuid;
  }

  public get name() {
    return this.props.name;
  }

  public get email() {
    return this.props.email;
  }

  public get password() {
    return this.props.password;
  }

  public get role() {
    return this.props.role;
  }

  public withUpdatedName(newName: string): User {
    return new User({ ...this.props, name: newName });
  }

  public withUpdatedEmail(newEmail: string): User {
    return new User({ ...this.props, email: newEmail });
  }

  public withUpdatedPassword(newPassword: string): User {
    return new User({ ...this.props, password: newPassword });
  }

  public withUpdatedRole(newRole: Role): User {
    return new User({ ...this.props, role: newRole });
  }
}
