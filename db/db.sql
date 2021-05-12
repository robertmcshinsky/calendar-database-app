DROP DATABASE IF EXISTS cal_appts_db;

CREATE DATABASE cal_appts_db;

USE cal_appts_db;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL
);

CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  appointment VARCHAR(100) NOT NULL,
  date VARCHAR(10) NOT NULL,
  holiday BOOLEAN
);

INSERT INTO users (username, password)
VALUES  ('Testuser1', 'testpassword1'), 
        ('Testuser2', 'testpassword2');

INSERT INTO appointments (appointment, date, holiday)
VALUES  ('New Years Day', '2021-01-01', 1), 
        ('Opposite Day', '2021-01-25', 1), 
        ('Ground Hog Day', '2021-02-02', 1), 
        ('Super Bowl Sunday', '2021-02-07', 1), 
        ('Chineese New Years', '2021-02-12', 1), 
        ('International Womens Day', '2021-03-08', 1), 
        ('St. Patricks Day', '2021-03-17', 1), 
        ('April Fools', '2021-04-01', 1), 
        ('Earth Day', '2021-04-22', 1), 
        ('Cinco de Mayo', '2021-05-05', 1), 
        ('Memorial Day', '2021-05-31', 1), 
        ('D Day WWII', '2021-06-06', 1), 
        ('Fathers Day', '2021-06-20', 1), 
        ('Independance Day', '2021-07-04', 1), 
        ("Robert's Birth-Day", '2021-07-17', 1), 
        ('National Smores Day', '2021-08-10', 1), 
        ('Left Handers Day', '2021-08-13', 1), 
        ('Labor Day', '2021-09-06', 1), 
        ('International Peace Day', '2021-09-21', 1), 
        ('Boss Day', '2021-10-15', 1), 
        ('Halloween', '2021-10-31', 1), 
        ('Veterans Day', '2021-11-11', 1), 
        ('Thanksgiving', '2021-11-25', 1), 
        ('Pearl Harbor', '2021-12-07', 1), 
        ('Christmas', '2021-12-25', 1), 
        ('New Years Eve', '2021-12-31', 1);
