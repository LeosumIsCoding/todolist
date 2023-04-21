export default class User {
  private id: number;
  private name: string;
  private email: string;
  private password: string;
  private role: string;
  private createdAt: Date;
  private updatedAt: Date;
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    role: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export class UserVO {
  private id: number;
  private name: string;
  private email: string;
  private role: string;
  private createdAt: Date;
  private updatedAt: Date;
  constructor(
    id: number,
    name: string,
    email: string,
    role: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
