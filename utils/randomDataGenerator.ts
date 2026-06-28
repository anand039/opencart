import {faker} from '@faker-js/faker';


export class RandomDataUtil{

    static getFirstname()
    {
        return faker.person.firstName();
    }
    static getlastname()
    {
        return faker.person.lastName();

    }
static getFullname()
{
    return faker.person.fullName();
}
static getemail(){

return faker.internet.email();

}
static getPhoneNumber()
{
    return faker.phone.number();

}

static getusername():string{

return faker.internet.username();

}

static getpassword():string{

return faker.internet.password();

}
static getRandomCountry():string{

return faker.location.country();

}
static getRandomState():string{

return faker.location.state();

}

static getRandomPin():string{

return faker.location.zipCode();

}
static getRandomAlphaNumeric(length:number):string{

return faker.string.alphanumeric(length);

}
static getRandomNumeric(length:number):string{

return faker.string.numeric(length);

}
}