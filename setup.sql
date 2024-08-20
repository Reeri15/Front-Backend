CREATE DATABASE IF NOT EXISTS BloodDonation;

USE BloodDonation;

CREATE TABLE IF NOT EXISTS Patients (
    Patient_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age INT NOT NULL,
    Gender ENUM('Male', 'Female', 'Other') NOT NULL,
    Diagnosis VARCHAR(100) NOT NULL
);

INSERT INTO Patients (Name, Age, Gender, Diagnosis) 
VALUES
('John Doe', 45, 'Male', 'Hypertension'),
('Jane Smith', 34, 'Female', 'Diabetes'),
('Alice Johnson', 25, 'Female', 'Anemia'),
('Bob Brown', 54, 'Male', 'Cardiovascular Disease');

SELECT * FROM Patients;