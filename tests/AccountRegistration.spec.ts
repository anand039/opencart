import { Expect,Page,Locator,test, expect } from '@playwright/test';
import { homepage } from '../pages/homepage';
import { registration } from '../pages/registration';
import { RandomDataUtil} from '../utils/randomDataGenerator';
import { TestConfig} from '../test.config';

let homepage1:homepage;
let regispage: registration;
let config: TestConfig;

test.beforeEach(async({page})=>{

const config =new TestConfig();
await page.goto(config.appUrl); // navigate to application url
 homepage1 = new homepage(page);

regispage= new registration(page);

})

test.afterEach(async({page})=>{
    await page.close();
})

test('user registratiin test',async()=>
{
// go to my account and click on register
homepage1.clickmyaccount();
homepage1.clickRegister();

// filling thedata in registration page
await regispage.setfname(RandomDataUtil.getFirstname());
await regispage.setlname(RandomDataUtil.getlastname());
await regispage.setemail(RandomDataUtil.getemail());
await regispage.setphone(RandomDataUtil.getPhoneNumber());

const pass= RandomDataUtil.getpassword();
await regispage.setpassword(pass);
await regispage.cnfpassword(pass);
await regispage.clickprivacy();
await regispage.clickcontine();

const confirmationmsg = await regispage.getcnfmsg();
expect(confirmationmsg).toContain('Your Account Has Been Created!')
})