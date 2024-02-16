let name=prompt("Enter Your name")
 password=prompt("Enter password:")
const balance=500000;

if(password=="12345")
{
    let number=prompt("Welcome to 'Paypal bank' ATM! What function  u want to perform: 1.withdraw 2.deposit  3.checkbalance 4.exit,choose one: ")
    switch(number){
      case "1":
        let withdraw=prompt("Your current balance is 500000. Enter amount u want to withdraw:")
        num1 = balance - withdraw;
        alert("Current balance after withdrawal is :" +num1)
        break;
        
        case "2":
            let deposit=(prompt("Enter amount u want to deposit:"))
            num = balance + deposit;
            alert("New Balance is: "+num)
            break;
            
                 case "3":
                    alert("Your check balance is "+balance)
                    break;
                    
                    case "4":
                        alert(" ")
                        break;
                        
                        default:
                        alert("inalid");
                        break;
            
            
    }
}
else{
    alert("Wrong password!")
}
