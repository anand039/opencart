import{ Page, Expect, Locator} from '@playwright/test'

export class registration
{
private readonly page :Page;
private readonly chkprivacy: Locator;
private readonly lastname: Locator;
private readonly firstname: Locator;
private readonly emailname: Locator;
private readonly phone: Locator;
private readonly password: Locator;
private readonly confirmpassword:Locator;
private readonly continuebtn: Locator;
private readonly msgconfirmation:Locator;

constructor(page:Page)
{
this.page=page;

this.firstname=  page.locator('#input-firstname');
this.lastname=  page.locator('#input-lastname');
this.emailname= page.locator('#input-email');
this.phone= page.locator('#input-telephone');
this.password= page.locator('#input-password');
this.confirmpassword= page.locator('#input-confirm');
this.chkprivacy= page.locator('input[name="agree"]');
this.continuebtn= page.locator('input[value="Continue"]');
this.msgconfirmation=page.locator('h1:has-text("Your Account Has Been Created!")');
}


async setfname(firstname:string):Promise<void>
{
await this.firstname.fill(firstname);
}

async setlname(lastname:string):Promise<void>
{
await this.lastname.fill(lastname);
}


async setemail(emailname:string):Promise<void>
{
await this.emailname.fill(emailname);
}


async setphone(phone:string):Promise<void>
{
await this.phone.fill(phone);
}

async setpassword(password:string):Promise<void>
{
await this.password.fill(password);
}

async cnfpassword(confirmpassword:string):Promise<void>
{
await this.confirmpassword.fill(confirmpassword);
}

async clickprivacy():Promise<void>
{
await this.chkprivacy.check();
}

async clickcontine():Promise<void>
{
await this.continuebtn.click();
}


async getcnfmsg():Promise<string>
{
    return await this.msgconfirmation.textContent() ?? '';
}



}