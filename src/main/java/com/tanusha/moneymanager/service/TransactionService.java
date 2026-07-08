package com.tanusha.moneymanager.service;

import com.tanusha.moneymanager.entity.Transaction;
import com.tanusha.moneymanager.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    // Get all transactions
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    // Save transaction
    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    // Get transaction by ID
    public Optional<Transaction> getTransactionById(Long id) {
        return transactionRepository.findById(id);
    }

    // Update transaction
    public Transaction updateTransaction(Long id, Transaction updatedTransaction) {

        Optional<Transaction> optionalTransaction =
                transactionRepository.findById(id);

        if (optionalTransaction.isPresent()) {

            Transaction transaction = optionalTransaction.get();

            transaction.setTitle(updatedTransaction.getTitle());
            transaction.setAmount(updatedTransaction.getAmount());
            transaction.setType(updatedTransaction.getType());
            transaction.setCategory(updatedTransaction.getCategory());
            transaction.setDate(updatedTransaction.getDate());

            return transactionRepository.save(transaction);
        }

        return null;
    }

    // Delete transaction
    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }
}