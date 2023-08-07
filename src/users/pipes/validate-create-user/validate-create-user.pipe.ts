import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside ValidateUserPipe!');
    console.log(value);
    console.log(metadata);

    console.log('before conversion: ', value.age);
    const parseAgeToInt = parseInt(value.age.toString());
    console.log('after conversion: ', parseAgeToInt);

    if (isNaN(parseAgeToInt)){
      console.log(`${value.age} is not a number`);
      throw new HttpException('Invalid Data Type for property age. Expected Number', HttpStatus.BAD_REQUEST);
    }
    console.log(`${parseAgeToInt} is a number. Returning....`);
    return {...value, age: parseAgeToInt};

  }
}
