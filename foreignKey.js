/*
** Foreign Key Constrain **
-> Timestamp means current date and time
-> control + l, to clear the terminal
01. Student Table
a. student_id
b. student_fname
c. student_lname
d. student_mname
e. student_email
f. student_phone
g. student_alternate_phone
h. enrollment_date
i. years_of_exp
j. student_company
k. batch_date
l. source_of_joining
m. location varchar(30)
02. create table students(
    student_id int AUTO_INCREMENT,
    student_fname varchar(30) NOT NULL,
    student_lname varchar(30) NOT NULL,
    student_mname varchar(30),
    student_email varchar(30) NOT NULL,
    student_phone varchar(15) NOT NULL,
    student_alternate_phone varchar(15),
    enrollment_date TIMESTAMP NOT NULL,
    years_of_exp int NOT NULL,
    student_company varchar(30),
    batch_date varchar(30) NOT NULL,
    source_of_joining varchar(30) NOT NULL,
    location varchar(30) NOT NULL,
    PRIMARY KEY(student_id),
    UNIQUE KEY(student_email)
);
03. SEED DATA?
Ans: seed data means intially inserted data into the table.
04. INSERT INTO students(
    student_fname,
    student_lname,
    student_mname,
    student_email,
    student_phone,
    student_alternate_phone,
    enrollment_date,
    years_of_exp,
    student_company,
    batch_date,
    source_of_joining,
    location
) VALUES(
    'Nusaiba',
    'Jahan',
    'Sadifa',
    'nusaiba123@gmail.com',
    '180335',
    '180335',
    '2022-01-01',
    2,
    'trendytech',
    '2022-01-01',
    'intern',
    'Dhaka'
);
05. INSERT INTO students(
    student_fname,
    student_lname,
    student_mname,
    student_email,
    student_phone,
    student_alternate_phone,
    enrollment_date,
    years_of_exp,
    student_company,
    batch_date,
    source_of_joining,
    location
) VALUES(
    'Farjana',
    'Akter',
    'Maya',
    'maya123@gmail.com',
    '180335',
    '180335',
    '2022-01-01',
    5,
    'trendytech',
    '2022-01-01',
    'intern',
    'Dhaka'
);
06. select student_id, enrollment_date, student_fname, student_email, years_of_exp, student_company, batch_date, source_of_joining, location from students;
Ans: select statement is used to select data from the table to show into the terminal and it is used to show seed data.
*/

/*
01. create table courses(
    course_id int NOT NULL,
    course_name varchar(30) NOT NULL,
    course_duration int NOT NULL,
    course_fee int NOT NULL,
    PRIMARY KEY(course_id)
);

02. Insert some seed data?
Ans: Yes, we can insert seed data into the table.
03. INSERT INTO courses(
    course_id,
    course_name,
    course_duration,
    course_fee
) VALUES(
    1,
    'big data',
    6,
    5000
);
02. INSERT INTO courses(
    course_id,
    course_name,
    course_duration,
    course_fee
) VALUES(
    2,
    'web development',
    3,
    2000
);
03. INSERT INTO courses(
    course_id,
    course_name,
    course_duration,
    course_fee
) VALUES(
    3,
    'data science',
    6,
    4000
);
04. INSERT INTO courses(
    course_id,
    course_name,
    course_duration,
    course_fee
) VALUES(
    4,
    'devops',
    1,
    10000
);
*/

/*
01. drop table students;
// create new students table with new data-> selected_course
02. create table students(
    student_id int AUTO_INCREMENT,
    student_fname varchar(30) NOT NULL,
    student_lname varchar(30) NOT NULL,
    student_mname varchar(30),
    student_email varchar(30) NOT NULL,
    student_phone varchar(15) NOT NULL,
    student_alternate_phone varchar(15),
    enrollment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    selected_course int NOT NULL DEFAULT 1,
    years_of_exp int NOT NULL,
    student_company varchar(30),
    batch_date varchar(30) NOT NULL,
    source_of_joining varchar(30) NOT NULL,
    location varchar(30) NOT NULL,
    PRIMARY KEY(student_id),
    UNIQUE KEY(student_email)
);
03. insert into students(student_fname, student_lname, student_email,student_phone, selected_course, years_of_exp, student_company, batch_date, source_of_joining, location) values('Emran', 'Hossain', 'emran0335@gmail.com', '180335', 2, 6, 'walmart', '05-02-2023', 'LinkedIn', 'Munshiganj');

04. insert into students(student_fname, student_lname, student_email,student_phone, years_of_exp, student_company, batch_date, source_of_joining, location) values('Nusaiba', 'Jahan', 'nusaiba0335@gmail.com', '493359', 3, 'Flipkart', '05-05-2023', 'LinkedIn', 'Dhaka');

05. insert into students(student_fname, student_lname, student_email,student_phone, selected_course, years_of_exp, batch_date, source_of_joining, location) values('Farjana', 'Akter', 'farjana0335@gmail.com', '403350', 3, 12, '19-02-2023', 'google', 'Gazaria');
06. insert into students(student_fname, student_lname, student_email,student_phone, selected_course, years_of_exp, batch_date, source_of_joining, location) values('Omaer', 'Atiqur', 'omaer0335@gmail.com', '4300034', 4, 3, 12, 'Google', 'Munshiganj');

// select few record from the students table;
01. select student_id, enrollment_date, selected_course, student_fname, years_of_exp, student_company, batch_date, source_of_joining, location from students;

** Foreign Key **
// the courses table has four courses. But I will seed data of number 5 in the students table to do wrong and then using foreign key we will fix it. Now after that we cannot insert number 5 course in the courses table. Here parent table is courses table as students(child table) table selected_course depends on it.
01. insert into students(student_fname, student_lname, student_email,student_phone, selected_course, years_of_exp, student_company, batch_date, source_of_joining, location) values('Nahiyan', 'Prodhan', 'nahiyan0335@gmail.com', '493359', 5, 3, 'Flipkart', '05-05-2023', 'LinkedIn', 'Dhaka'); 
-> With Foregin Key <-
=> After droping the table students <=
-> parent table - courses table
-> child table - students table
01. create table students(
    student_id int AUTO_INCREMENT,
    student_fname varchar(30) NOT NULL,
    student_lname varchar(30) NOT NULL,
    student_mname varchar(30),
    student_email varchar(30) NOT NULL,
    student_phone varchar(15) NOT NULL,
    student_alternate_phone varchar(15),
    enrollment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    selected_course int NOT NULL DEFAULT 1,
    years_of_exp int NOT NULL,
    student_company varchar(30),
    batch_date varchar(30) NOT NULL,
    source_of_joining varchar(30) NOT NULL,
    location varchar(30) NOT NULL,
    PRIMARY KEY(student_id),
    UNIQUE KEY(student_email),
    FOREIGN KEY(selected_course) REFERENCES courses(course_id)
);
*/
