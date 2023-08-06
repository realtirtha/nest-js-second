import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    username: String;

    @IsEmail()
    @IsNotEmpty()
    email:  String;
}