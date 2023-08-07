import { Body, Controller, Get, Param, Post, Query, UsePipes, ParseBoolPipe, ValidationPipe, ParseIntPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
    constructor(private userService: UsersService){
        
    }

    @Get()
    getUsers(){
        return this.userService.fetchUsers();
    }
    

    @Post('create')
    @UsePipes(new ValidationPipe)
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto){
        console.log(userData.age.toPrecision());
        return this.userService.createUser(userData);
  
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        const user = this.userService.fetchUserById(id);
        if(!user)
            throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
        return user;

    }
}
