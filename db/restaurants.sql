-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2023 at 05:50 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL
  `createdAt` date DEFAULT NULL,
   `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `type`, `imageurl`) VALUES
(1, 'McDonald (แมคโดนัลด์)', 'แฮมเบอร์เกอร์, ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/AWh64KYIZXYdMpch2Zem/hero/f193b34375f84a0fb1b2b58e4320be3f_1688317413588921068.webp'),
(2, 'Pizza Hut (พิซซ่าฮัท)', 'Coupon, พิซซ่า', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-CYTDJNKYC6X2JT/hero/1bf86d6f3bb14bcc84a0bbc1cb6a2968_1687332447386762578.webp'),
(3, 'ข้าวทิพย์ แอนด์ เฮลท์ฟู้ด', 'Coupon, อาหารสุขภาพ', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C3TZUADTJU5VNA/hero/Optimized_449f6cec2b5b444488b3c2ef1a801630_1661688071012760036.webp'),
(4, 'Coffee Beans by Dao (คอฟฟี่บีน บาย ดาว)', 'Coupon, อาหารตามสั่ง, Rice noodles', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/THGFIST000006ph/hero/3392da742ed241f1b85ef2da1dba4af4_1688459345723695498.webp'),
(5, 'ไอฟราย Snack', 'ของทอด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C3BWRE2TKAUYLJ/hero/7f32731c622c40289f95a93a5f039dfb_1643613789315777578.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
