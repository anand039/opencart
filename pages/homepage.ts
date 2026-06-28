import{expect,Page,Locator} from '@playwright/test'

export class homepage{

    //locators
private readonly register: Locator;
private readonly login:Locator;
private readonly linkmyaccount:Locator;
private readonly search :Locator;
private readonly searchbtn:Locator;
private readonly page:Page;

constructor(page:Page)
{
    this.page=page;
    this.linkmyaccount=page.locator('span:has-text("My Account")');
    this.register=page.getByText("Register");
    this.login=page.getByText("Login");
    this.search= page.getByPlaceholder('Search');
    this.searchbtn= page.locator('i.fa.fa-search');
}
async homepage(){
    let title:string  =await this.page.title();
    if (title){

        return true;
    }
    return false;
}
async clickmyaccount(){
    try{
        await this.linkmyaccount.click();
    } 
    catch(error){
        console.log(`exception occured while clicking ${error}`);
        throw error;
    }
}
async clickRegister(){
    try{
        await this.register.click();
    } 
    catch(error){
        console.log(`exception occured while clicking ${error}`);
        throw error;
    }
}
async clicklogin(){
    try{
        await this.login.click();
    }
    catch (error)
    {
        console.log(`exception occured during login: ${error}`)
        throw error;
    }
}
async clicksearch(){
    try{
        await this.searchbtn.click();
    }
    catch (error)
    {
        console.log(`exception occured during searching: ${error}`)
        throw error;
    }

}
}