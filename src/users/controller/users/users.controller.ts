import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return [{username: 'Tirtha', email: 'gmail@gmail.com'}]
    }

    @Post('create')
    createUser(@Body() userData: CreateUserDto){
        console.log(userData);
        return {};
    }

    @Get(':id/:postId')
    getUserById(@Param('id') id: string, @Param('postId') postId: string){
        console.log(id);
        return{id, postId};

    }
}
