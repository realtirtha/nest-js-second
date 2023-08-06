import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return [{username: 'Tirtha', email: 'gmail@gmail.com'}]
    }

    @Get('posts')
    getUsersPosts(){
        return [
        {
            username: 'Tirtha',
            email: 'gmail@gmail.com',
            posts: [{
                id:1, 
                title: 'Post 1',
            },
            {
                id:2,
                title:'Post 2',
            },
            ],
        }]
    }

    @Get('posts/comments')
    getUserPostComments(){
        return[
            {
                id: 1,
                title: 'Post 1',
                comments: []
            }
        ]
    }
}
