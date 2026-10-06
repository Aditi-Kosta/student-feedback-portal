-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Database: `student_feedback`

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_feedback`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `studentName` varchar(100) NOT NULL,
  `subject` varchar(150) NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback`
(`id`, `studentName`, `subject`, `rating`, `comment`, `createdAt`)
VALUES
(1, 'Aarya G', 'WP', 5, 'Understanding of the subject is good', '2026-10-01 14:45:34'),

(2, 'Aditi Kosta', 'Web Programming', 5, 'Excellent coursework structure and practical exercises.', '2026-10-01 15:00:00'),

(3, 'Aarya Gaikwad', 'Database Systems', 4, 'Lectures are well organized, but more practical examples would help.', '2026-10-01 15:05:00'),

(4, 'Rahul Sharma', 'Data Structures', 5, 'The concepts were explained clearly and the coding examples were useful.', '2026-10-01 15:10:00'),

(5, 'Sneha Patil', 'Artificial Intelligence', 4, 'Good explanation of AI concepts and algorithms.', '2026-10-01 15:15:00'),

(6, 'Rohan Mehta', 'Web Programming', 3, 'The topics are useful but some concepts need more detailed explanation.', '2026-10-01 15:20:00'),

(7, 'Priya Shah', 'Database Systems', 5, 'Practical SQL sessions were very helpful for understanding the subject.', '2026-10-01 15:25:00'),

(8, 'Karan Joshi', 'Data Structures', 4, 'Good balance between theory and programming exercises.', '2026-10-01 15:30:00'),

(9, 'Neha Desai', 'Machine Learning', 5, 'The practical demonstrations made the ML concepts easier to understand.', '2026-10-01 15:35:00'),

(10, 'Aditya Kulkarni', 'Computer Networks', 4, 'The lectures are informative and the diagrams help in understanding concepts.', '2026-10-01 15:40:00'),

(11, 'Isha More', 'Artificial Intelligence', 3, 'The subject is interesting but some topics are quite difficult to understand.', '2026-10-01 15:45:00'),

(12, 'Vivek Singh', 'Database Systems', 5, 'Excellent practical sessions and clear explanations of SQL queries.', '2026-10-01 15:50:00'),

(13, 'Ananya Rao', 'Data Structures', 4, 'The faculty explains algorithms clearly with useful examples.', '2026-10-01 15:55:00'),

(14, 'Omkar Patil', 'Machine Learning', 5, 'Hands-on implementation was very useful and improved my understanding.', '2026-10-01 16:00:00'),

(15, 'Riya Shah', 'Web Programming', 4, 'Good practical work and useful assignments throughout the course.', '2026-10-01 16:05:00'),

(16, 'Akash Verma', 'Computer Networks', 3, 'The content is useful, but more practical demonstrations would be helpful.', '2026-10-01 16:10:00'),

(17, 'Meera Joshi', 'Web Programming', 2, 'The practical sessions are useful, but the pace of teaching is sometimes too fast.', '2026-10-01 16:15:00'),

(18, 'Arjun Nair', 'Database Systems', 1, 'The concepts are difficult to follow and more explanation is needed.', '2026-10-01 16:20:00'),

(19, 'Tanvi Shah', 'Data Structures', 2, 'Some algorithms are explained well, but the practical sessions could be improved.', '2026-10-01 16:25:00'),

(20, 'Yash Gupta', 'Machine Learning', 1, 'The subject is interesting, but I found the lectures difficult to understand.', '2026-10-01 16:30:00'),

(21, 'Simran Khan', 'Computer Networks', 2, 'More practical demonstrations and real-world examples would be helpful.', '2026-10-01 16:35:00'),

(22, 'Aditi Kosta', 'Machine Learning', 4, 'Good explanation of concepts with useful practical examples.', '2026-10-01 16:40:00'),

(23, 'Arya', 'Database Systems', 4, 'Well structured lectures and helpful practical sessions.', '2026-10-01 16:45:00');

--
-- Indexes for dumped tables
--

ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;