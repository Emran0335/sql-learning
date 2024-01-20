/*
-> To open the terminal of mysql, run the below command
mysql -h localhost -P 3306 -u root -p
DDL command
show databases;
create database (set name for database);
drop database (name of database);
use (name of the database- to go the database(it will show database changed message on the terminal));
create table (set name) (type of the data in the first brackets) or source (file's name);
show tables; (empty if not created)
drop table (the table's name)
describe (name of the table) or desc (name of the table)
select * from (table's name) to see the data of the table of the database;
INSERT INTO (table's name)(data's name) VALUES(names of the each data's value)
select * from (table's name)
*/

/*
CRUD Operations
01. create - insert statements
02. read - select statements
03. update - update statements
04. delete - delete statements
*/

/*
creation of table
employee table
01. CREATE TABLE employee (
    firstname varchar(20),
    middlename varchar(20),
    lastname varchar(20),
    age int,
    salary int,
    location varchar(20)
);
02. INSERT INTO employee(firstname,middlename,lastname,age,salary,location) VALUES(
    'Emran',
    'Hossain',
    'Arman',
    35,
    21000,
    'Munshiganj'
);

03. CREATE TABLE employee (
    firstname varchar(20) NOT NULL,
    middlename varchar(20),
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    salary int NOT NULL,
    location varchar(20) NOT NULL
);
*/
/*
Default Values
01. CREATE TABLE employee (
    firstname varchar(20) NOT NULL,
    middlename varchar(20),
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    salary int NOT NULL,
    location varchar(20) DEFAULT 'Munshiganj'
);
02. INSERT INTO employee(firstname,lastname,age,salary) VALUES(
    'Nusaiba',
    'Sadifa',
    2,
    21000
);
03. INSERT INTO employee(firstname,lastname,age,salary, location) VALUES(
    'Nusaiba',
    'Sadifa',
    2,
    21000,
    'Gazaria'
);
04. INSERT INTO employee(firstname,lastname,age,salary, location) VALUES(
    'Atikur',
    'Rahman',
    1,
    21000,
    null
);

combination of not null and default
05. CREATE TABLE employee (
    firstname varchar(20) NOT NULL,
    middlename varchar(20),
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    salary int NOT NULL,
    location varchar(20) NOT NULL DEFAULT 'Munshiganj'
);
05. INSERT INTO employee(firstname,lastname,age,salary, location) VALUES(
    'Atikur',
    'Rahman',
    1,
    21000,
    null(null does not work here)
);
*/

/*
Primary Key and Unique key
Auto Increment Keys
Primary key vs Unique Key


Primary key - uniquely indentify each record in the table
01. CREATE TABLE employee (
    id int PRIMARY KEY,
    firstname varchar(20) NOT NULL,
    middlename varchar(20),
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    salary int NOT NULL,
    location varchar(20) NOT NULL DEFAULT 'Munshiganj'
);

 02. INSERT INTO employee(id, firstname,lastname,age,salary, location) VALUES(
    1,
    'Nusaiba',
    'Sadifa',
    2,  
    21000,
    'Gazaria'
);
For a primary key NULL is not allowed and also repeated values are not allowed!
 03. INSERT INTO employee(id, firstname,lastname,age,salary, location) VALUES(
    NULL,(id NULL is not allowed)
    'Nusaiba',
    'Sadifa',
    2,
    21000,
    'Gazaria'
);
04. CREATE TABLE employee (
    id int,
    firstname varchar(20) NOT NULL,
    middlename varchar(20),
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    salary int NOT NULL,
    location varchar(20) NOT NULL DEFAULT 'Munshiganj',
    PRIMARY KEY(id) -> another way
);
=> Composite primary keys
05. CREATE TABLE employee (
    id int,
    firstname varchar(20) NOT NULL,
    middlename varchar(20),
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    salary int NOT NULL,
    location varchar(20) NOT NULL DEFAULT 'Munshiganj',
    PRIMARY KEY(id, name)
);

=> Id (Auto Increment)
06. CREATE TABLE employee (
    id int AUTO_INCREMENT,
    firstname varchar(20) NOT NULL,
    middlename varchar(20),
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    salary int NOT NULL,
    location varchar(20) NOT NULL DEFAULT 'Munshiganj',
    PRIMARY KEY(id)
);
07. INSERT INTO employee(firstname,lastname,age,salary, location) VALUES(
    'Nusaiba',
    'Sadifa',
    2,
    21000,
    'Gazaria'
);

=> UNIQUE KEY
Primary key cannot hold NULL. But UNIQUE key can hold NULL
01. In MySQL, UNIQUE key can hold any number of NULL values
02. But other DB's UNIQUE key can hold only one NULL value.
03. So the purpose of UNIQUE key is to make sure the values do not duplicate.
04. We can have multiple UNIQUE keys but only one PRIMARY key in a table.

01. CREATE TABLE employee (
    firstname varchar(20) NOT NULL,
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    primary key(firstname, lastname)
)
02. INSERT INTO employee values('Emran', 'Hossain', 35);

03. CREATE TABLE employee(
    id int UNIQUE KEY,
    firstname varchar(20),
    lastname varchar(20),
    age int NOT NULL
);
04. INSERT INTO employee values(
    1,
    'Emran',
    'Hossain',
    35
);
05. INSERT INTO employee values(
    NULL,
    'Emran',
    'Hossain',
    35
);
*/
/*
CRUD-> create, read, update, delete
create-> insert
read-> select
update-> update
Delete-> delete

** Select(Read operation) **

creating structure of the table
01. CREATE TABLE employee (
    id int PRIMARY KEY,
    firstname varchar(20) NOT NULL,
    middlename varchar(20),
    lastname varchar(20) NOT NULL,
    age int NOT NULL,
    salary int NOT NULL,
    location varchar(20) NOT NULL DEFAULT 'Munshiganj'
);
inserting the data(record) for the table employee;
02. INSERT INTO employee(id, firstname, lastname, age, salary) VALUES(1, 'Emran', 'Hossain', 35, 1000);

03. INSERT INTO employee(id, firstname, lastname, age, salary) VALUES(2, 'Farjana', 'Maya', 23, 10000);

03. INSERT INTO employee(id, firstname, lastname, age, salary) VALUES(3, 'Nusaiba', 'Sadifa', 2, 500);

SELECT(read) * from employee;
* means -> please provide me with all the columns.

For any column(for getting any specific column)
01. SELECT firstname, lastname from employee;
For conditional selecting(reading) where(filter condition) is used.
02. SELECT * from employee where age > 20;
03. SELECT * from employee where firstname='Nusaiba/nusaiba';
Case Insensitive
But if binary is after the where conditon, it acts as case sensitive
04. SELECT * from employee where binary firstname='nusaiba'; 
The above code will not work as it is 'Nusaiba';
For alias name-> then firstname and lastname will be name and surname respectively as output.
05. SELECT firstname as name, lastname as surname from employee;
*/

/*
** Update **
UPDATE means to update the data of the table.
01. UPDATE employee SET lastname='Jahan' WHERE firstname='Nusaiba';
Ans: This command will update the lastname of Nusaiba to Jahan where firstname='Nusaiba'
02. UPDATE employee SET location='Gazaria' WHERE firstname='Emran';
Ans: This command will update the location of Emran to Gazaria where firstname='Emran';
03. UPDATE employee SET location='Gazaria';
Ans: This command will update the location of all records of the employee table to Gazaria.
04. UPDATE employee SET salary=salary+5000;
Ans: This command will increase the current salary of each person with five thousands.
05. UPDATE employee SET location='Munshiganj' WHERE firstname='Farjana' and lastname='Maya';
Ans: This command will change the location of Farjana Maya to Munshiganj.
*/

/*
** Delete **
01. DELETE FROM employee WHERE id=3;
Ans: This command will delete the record of id 3 from the table employee. It deletes record one by one.
02. DELETE FROM employee WHERE firstname='Nusaiba' and lastname='Sadifa';
Ans: This command will delete the record of Nusaiba Sadifa from the table employee.
03. DELETE FROM employee WHERE firstname='Nusaiba';
Ans: This command will delete the record of Nusaiba from the table employee.
04. DELETE FROM employee;
Ans: This command will delete all the records of the table employee.
05. DELETE FROM employee WHERE firstname='Nusaiba' or lastname='Sadifa';
Ans: This command will delete the record of Nusaiba or Sadifa from the table employee.
06. DELETE FROM employee WHERE firstname='Nusaiba' and lastname='Sadifa' or age=2;
Ans: This command will delete the record of Nusaiba Sadifa or age 2 from the table employee.
07. DELETE FROM employee WHERE firstname='Nusaiba' and lastname='Sadifa' and age=2;
Ans: This command will delete the record of Nusaiba Sadifa and age 2 from the table employee.
*/

/*
** Alter Commands **
01. What is alter command in sql?
Ans: Alter command is used to change the structure/schema of the table.
02. What are the differences between update and alter commands in sql?
Ans: Update command is used to update the data of the table. Alter command is used to change/alter the structure/schema of the table. Structure means schema.
03. ALTER TABLE employee ADD COLUMN jobtitle varchar(20);
Ans: This command will add a new column jobtitle to the table employee.
04. ALTER TABLE employee DROP COLUMN jobtitle;
Ans: This command will delete the column jobtitle from the table employee.
04. ALTER TABLE employee RENAME COLUMN jobtitle TO title;
Ans: This command will rename the column jobtitle to title.
05. ALTER TABLE employee modify COLUMN firstname varchar(30);
Anks: This command will modify the datatype of the column firstname to varchar(30).
06. ALTER TABLE employee drop PRIMARY KEY;
Ans: This command will delete the primary key of the table employee.
07. ALTER TABLE employee ADD PRIMARY KEY(id);
Ans: This command will add a primary key to the table employee.
*/

/*
** DDL vs DML **
01. What is DDL?
Ans: DDL stands for Data Definition Language. DDL is used to create table/alter table/drop table the structure/schema of the table.
02. What is DML?
Ans: DML stands for Data Manipulation Language. DML is used to insert/update/delete only the data(records) directly of the table.
03. What is DQL?
Ans: DQL stands for Data Query Language. DQL is used to read the data of the table.
04. What is DCL?
Ans: DCL stands for Data Control Language. DCL is used to grant/revoke/lock/unlock the access of the data.
05. What is TCL?
Ans: TCL stands for Transaction Control Language. TCL is used to commit/rollback the transaction.
06. What is DDL vs DML?
Ans: DDL stands for Data Definition Language. DDL is used to create/alter/delete the structure of the table. DML stands for Data Manipulation Language. DML is used to insert/update/delete the data of the table.
07. What are the differences between DDL vs DML?
Ans: DDL stands for Data Definition Language. DDL is used to create/alter/delete the structure of the table. DML stands for Data Manipulation Language. DML is used to insert/update/delete the data of the table.
08. What are the differences between DQL vs DML?
Ans: DQL stands for Data Query Language. DQL is used to read the data of the table. DML stands for Data Manipulation Language. DML is used to insert/update/delete the data of the table.
09. What are the differences between DCL vs DML?
Ans: DCL stands for Data Control Language. DCL is used to grant/revoke/lock/unlock the access of the data. DML stands for Data Manipulation Language. DML is used to insert/update/delete the data of the table.
10. What are the differences between TCL vs DML?
Ans: TCL stands for Transaction Control Language. TCL is used to commit/rollback the transaction. DML stands for Data Manipulation Language. DML is used to insert/update/delete the data of the table.
11. What are the differences between DDL vs DQL?
Ans: DDL stands for Data Definition Language. DDL is used to create/alter/delete the structure of the table. DQL stands for Data Query Language. DQL is used to read the data of the table.
12. What are the differences between DDL vs DCL?
Ans: DDL stands for Data Definition Language. DDL is used to create/alter/delete the structure of the table. DCL stands for Data Control Language. DCL is used to grant/revoke/lock/unlock the access of the data.
13. What are the differences between DDL vs TCL?
Ans: DDL stands for Data Definition Language. DDL is used to create/alter/delete the structure of the table. TCL stands for Transaction Control Language. TCL is used to commit/rollback the transaction.
*/

/*
01. What is truncate?
Ans: Truncate is used to delete all the records/data of the table. So, it means to remove all records. But it is a DDL command because Truncate internally drops the table and recreates the table. What the usefulness of it is when there are a lot of records and deleting is so painful, Truncate helps to overcome such situation. Delete is inefficient and difficult but Truncate is usefull as it recreates the table internally.
02. truncate TABLE employee;
Ans: This command will delete all the records of the table employee.
03. truncate TABLE employee WHERE id=3;
Ans: This command will delete the record of id 3 from the table employee.
04. truncate TABLE employee WHERE firstname='Nusaiba' and lastname='Sadifa';
Ans: This command will delete the record of Nusaiba Sadifa from the table employee.
05. truncate TABLE employee WHERE firstname='Nusaiba';
Ans: This command will delete the record of Nusaiba from the table employee.
06. truncate TABLE employee WHERE firstname='Nusaiba' or lastname='Sadifa';
Ans: This command will delete the record of Nusaiba or Sadifa from the table employee.
07. truncate TABLE employee WHERE firstname='Nusaiba' and lastname='Sadifa' or age=2;
Ans: This command will delete the record of Nusaiba Sadifa or age 2 from the table employee.
08. truncate TABLE employee WHERE firstname='Nusaiba' and lastname='Sadifa' and age=2;
09. What are the differences between truncate and delete?
Ans: 
*/

/*
** How tho make connection with mysql to javascript file **
install mysql package-> npm install mysql;
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'emranhossain180335',
  database: "join_us",
});
run the file in the terminal-> node server.js;
*/
