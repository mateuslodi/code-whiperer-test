import { IUser } from "../interfaces/IUser";
import { v4 as uuid } from "uuid";

export class RegisteredUser implements IUser {
	id: string;
	name: string;
	email?: string;

	/**
	 * Creates a new RegisteredUser instance.
	 * @param name The name of the user.
	 * @param email The email of the user.
	 */
	constructor(name: string, email?: string) {
		this.id = uuid();
		this.name = name;
		this.email = email;
	}
}
