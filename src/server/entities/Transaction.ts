export default class Transaction {
  public id: string;
  public type: number;
  public date: string;
  public productDescription: string;
  public value: number;
  public transactionOwnerName: string;

  constructor(transaction: TransactionConstructor) {
    this.id = transaction.id;
    this.type = transaction.type;
    this.date = transaction.date;
    this.productDescription = transaction.productDescription;
    this.value = transaction.value;
    this.transactionOwnerName = transaction.transactionOwnerName;
  }
}

type TransactionConstructor = {
  id: string;
  type: number;
  date: string;
  productDescription: string;
  value: number;
  transactionOwnerName: string;
}