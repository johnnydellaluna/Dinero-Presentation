USE dinero_db;

INSERT INTO user (id, username, email, password, budget) VALUES ("1", "Nate", "Spry", "nspry", "nate123", "2000");
INSERT INTO user (id, username, email, password, budget) VALUES ("2", "Nate2", "Spry", "nspry", "nate123", "3500");
INSERT INTO user (id, username, email, password, budget) VALUES ("3", "Nate3", "Spry", "nspry", "nate123", "3000");

INSERT INTO income (name, type, amount) VALUES ("VisaCredit", "Credit", "20000");
INSERT INTO income (name, type, amount) VALUES ("Wallet", "Cash", "100");
INSERT INTO income (name, type, amount) VALUES ("VisaDebit", "Debit", "5000");

INSERT INTO expenses (name, category, amount_due, due_date) VALUES ("Drink", "Food", "200", "213131249141");
INSERT INTO expenses (name, category, amount_due, due_date) VALUES ("Eats", "Food", "100", "2131132131232");
INSERT INTO expenses (name, category, amount_due, due_date) VALUES ("Gas", "Utilities", "50", "1321315421412");