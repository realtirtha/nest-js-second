import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {

    private fakeUsers = [
        {username: 'Tirtha', email: 'gmail@gmail.com'},
        {username: 'Cory', email: 'cory@gmail.com'},
        {username: 'Greg', email: 'greg@gmail.com'}
    ]

    fetchUsers(){
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType){
        console.log('Received userData:', userDetails);
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number){
        return {id, username: 'bhatta', email: 'bhatta@email.com'};
    }
}
