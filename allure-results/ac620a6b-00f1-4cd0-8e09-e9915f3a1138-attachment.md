# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> user registratiin test
- Location: tests\AccountRegistration.spec.ts:7:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('h1:has-text("Your Account Has Been Created!")')

```

# Test source

```ts
  1  | import{ Page, Expect, Locator} from '@playwright/test'
  2  | 
  3  | export class registration
  4  | {
  5  | private readonly page :Page;
  6  | private readonly chkprivacy: Locator;
  7  | private readonly lastname: Locator;
  8  | private readonly firstname: Locator;
  9  | private readonly emailname: Locator;
  10 | private readonly phone: Locator;
  11 | private readonly password: Locator;
  12 | private readonly confirmpassword:Locator;
  13 | private readonly continuebtn: Locator;
  14 | private readonly msgconfirmation:Locator;
  15 | 
  16 | constructor(page:Page)
  17 | {
  18 | this.page=page;
  19 | 
  20 | this.firstname=  page.locator('#input-firstname');
  21 | this.lastname=  page.locator('input-lastname');
  22 | this.emailname= page.locator('#input-email');
  23 | this.phone= page.locator('#input-telephone');
  24 | this.password= page.locator('#input-password');
  25 | this.confirmpassword= page.locator('#input-confirm');
  26 | this.chkprivacy=  page.locator('input[name="agree"]');
  27 | this.continuebtn= page.locator('input[name="agree"]');
  28 | this.msgconfirmation=page.locator('h1:has-text("Your Account Has Been Created!")');
  29 | }
  30 | 
  31 | 
  32 | async setfname(firstname:string):Promise<void>
  33 | {
  34 | await this.firstname.fill(firstname);
  35 | }
  36 | 
  37 | async setlname(lastname:string):Promise<void>
  38 | {
  39 | await this.firstname.fill(lastname);
  40 | }
  41 | 
  42 | 
  43 | async setemail(emailname:string):Promise<void>
  44 | {
  45 | await this.emailname.fill(emailname);
  46 | }
  47 | 
  48 | 
  49 | async setphone(phone:string):Promise<void>
  50 | {
  51 | await this.phone.fill(phone);
  52 | }
  53 | 
  54 | async setpassword(password:string):Promise<void>
  55 | {
  56 | await this.password.fill(password);
  57 | }
  58 | 
  59 | async cnfpassword(confirmpassword:string):Promise<void>
  60 | {
  61 | await this.confirmpassword.fill(confirmpassword);
  62 | }
  63 | 
  64 | async clickprivacy():Promise<void>
  65 | {
  66 | await this.chkprivacy.check();
  67 | }
  68 | 
  69 | async clickcontine():Promise<void>
  70 | {
  71 | await this.continuebtn.click();
  72 | }
  73 | 
  74 | 
  75 | async getcnfmsg():Promise<string>
  76 | {
> 77 |     return await this.msgconfirmation.textContent() ?? '';
     |                                       ^ Error: locator.textContent: Target page, context or browser has been closed
  78 | }
  79 | 
  80 | 
  81 | 
  82 | }
```