import { Body, Controller, Get, Param, Post, Query, UsePipes, ParseBoolPipe, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean){
        return [{username: 'Tirtha', email: 'gmail@gmail.com'}]
    }
    

    @Post('create')
    @UsePipes(new ValidationPipe)
    createUser(@Body() userData: CreateUserDto){
        console.log(userData);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        console.log(id);
        return{id};

    }
}
