interface IAccount{
    id: number,
    name: string,
    balance?: ()=> number
}
class InvestmentAccount implements IAccount{

     constructor( public id, public name){
        
    }
}