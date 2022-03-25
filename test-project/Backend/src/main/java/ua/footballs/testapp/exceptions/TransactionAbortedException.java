package ua.footballs.testapp.exceptions;

public class TransactionAbortedException extends Exception{
    public TransactionAbortedException(String message) {
        super(message);
    }
}
