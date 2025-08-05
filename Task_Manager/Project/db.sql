-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.4.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for task_manager
DROP DATABASE IF EXISTS `task_manager`;
CREATE DATABASE IF NOT EXISTS `task_manager` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `task_manager`;

-- Dumping structure for table task_manager.icon
DROP TABLE IF EXISTS `icon`;
CREATE TABLE IF NOT EXISTS `icon` (
  `iconID` int(11) NOT NULL,
  `iconURL` text DEFAULT NULL,
  PRIMARY KEY (`iconID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table task_manager.notification
DROP TABLE IF EXISTS `notification`;
CREATE TABLE IF NOT EXISTS `notification` (
  `notificationID` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `issueDate` date NOT NULL,
  `type` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `userID` int(11) NOT NULL,
  `iconID` int(11) NOT NULL,
  PRIMARY KEY (`notificationID`),
  KEY `userID` (`userID`),
  KEY `iconID` (`iconID`),
  CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`),
  CONSTRAINT `notification_ibfk_2` FOREIGN KEY (`iconID`) REFERENCES `icon` (`iconID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table task_manager.task
DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `taskID` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `priority` varchar(50) DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `issueDate` date DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `iconID` int(11) DEFAULT NULL,
  PRIMARY KEY (`taskID`),
  KEY `iconID` (`iconID`),
  CONSTRAINT `task_ibfk_2` FOREIGN KEY (`iconID`) REFERENCES `icon` (`iconID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table task_manager.taskcontent
DROP TABLE IF EXISTS `taskcontent`;
CREATE TABLE IF NOT EXISTS `taskcontent` (
  `taskContentID` int(11) NOT NULL AUTO_INCREMENT,
  `taskID` int(11) NOT NULL,
  `text` text DEFAULT NULL,
  `image` tinytext DEFAULT NULL,
  `video` tinytext DEFAULT NULL,
  `audio` tinytext DEFAULT NULL,
  PRIMARY KEY (`taskContentID`),
  KEY `taskID` (`taskID`),
  CONSTRAINT `taskcontent_ibfk_1` FOREIGN KEY (`taskID`) REFERENCES `task` (`taskID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table task_manager.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dob` date DEFAULT NULL,
  `pfp` text NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userName` (`userName`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table task_manager.userphnnums
DROP TABLE IF EXISTS `userphnnums`;
CREATE TABLE IF NOT EXISTS `userphnnums` (
  `phnNumID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `phnNum` int(11) NOT NULL,
  PRIMARY KEY (`phnNumID`),
  UNIQUE KEY `phnNum` (`phnNum`),
  KEY `userID` (`userID`),
  CONSTRAINT `FK_user_phnNum` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table task_manager.usertask
DROP TABLE IF EXISTS `usertask`;
CREATE TABLE IF NOT EXISTS `usertask` (
  `userID` int(11) NOT NULL,
  `taskID` int(11) NOT NULL,
  PRIMARY KEY (`userID`,`taskID`),
  KEY `taskID` (`taskID`),
  CONSTRAINT `usertask_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`),
  CONSTRAINT `usertask_ibfk_2` FOREIGN KEY (`taskID`) REFERENCES `task` (`taskID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
