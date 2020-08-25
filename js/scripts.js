// Business Logic BankAccount
function BankAccount() {
  this.accounts = [],
  this.accountId = 0
}

BankAccount.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

BankAccount.prototype.assignId = function() {
  this.accountId += 1;
  return this.accountId;
}

BankAccount.prototype.findAccount = function(id) {
  for (let i=0; i< this.accounts.length; i++) {
    if (this.accounts[i]) {
      if (this.accounts[i].id == id) {
        return this.accounts[i];
      }
    }
  };
  return false;
}

Accounts.prototype.moreDeposit = function(deposit) {
  this.account += deposit; 
}

Accounts.prototype.withdrawal = function(withdrawal) {
  this.account -= withdrawal;
}

function balanceCheck(userID, deposit, withdrawal){
  const accounts = bankAccount.findAccount(userID);
  if (deposit === 0 && withdrawal ===0) {                           // error if 0 entered
    $("#error").text("You must add a value to deposit or withdrawal from your acount");
  } else if (deposit > 0 && withdrawal > 0) {                       // error if something in both
    $("#error").text("Please add a value into either 'Deposit Amount' or 'Withdrawal Amount'.");
  } else if (deposit > 0) {                                         // something in deposit only
    accounts.moreDeposit(deposit);
  } else if (withdrawal > 0) {                                      // something in withdrawl only
    accounts.withdrawal(withdrawal);
  }
}


// Business Logic Account
// userName, accountBalance

function Accounts(userName, balance) {
  this.userName = userName;
  this.account = balance
}



// User Interface
$(documnet).ready(function() {
  $("form#new-account").SVGNumberList(function() {
    let name = $("input#name").val();
    let initialDeposit = $("input#initialDeposit").val();

    let newAccout = new Accounts(name, initialDeposit);
    
  });
  $("form#addTake").submit(function() {
    let deposit = $("input#deposit").val();
    let withdrawl = $("input#withdrawl").val();

    balanceCheck
  })
});




