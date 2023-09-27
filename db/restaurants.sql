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

INSERT INTO restaurants ("id", "name", "type", "img", "createdAt", "updatedAt")VALUES
(1, 'รสเด็ดอร่อยตามสั่ง - บางซื่อ', 'Coupon, อาหารทะเล, อาหารตามสั่ง, ยำ', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2N2EY6FTXTHKA/hero/6709b61f83504e22a8b1f5a2ea5851e1_1623751631792385157.webp', '2023-08-29', '2023-08-29'),
(2, 'ขนมจีนข้ามศาล - จรัญสนิทวงศ์46', 'Coupon, อาหารสุขภาพ', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2VEAVLTA3TET2/hero/3a459d92-b269-4b4f-8671-00e31e8c85e5__store_cover__2023__03__23__08__06__53.webp','2023-08-29','2023-08-29'),
(3, 'สเต็กกินกับ อาหารคลีน เซ็นจูรี่ - ถนนรางน้ำ', 'อาหารสุขภาพ', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C3JDNAJ1N7ADRN/hero/26bcead9875e485f901170de92d6fd29_1650360117698875230.webp', '2023-08-29', '2023-08-29'),
(4, 'สเต็กกินกับ อาหารคลีน เซ็นจูรี่ - ถนนรางน้ำ', 'Fastfoods', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C3JDNAJ1N7ADRN/hero/26bcead9875e485f901170de92d6fd29_1650360117698875230.webp', '2023-07-19', '2023-07-19'),
(5, 'ช.กุ้งเผา วงเวียนใหญ่ - ธนบุรี', 'Coupon, อาหารสุขภาพ, น้ำผลไม้/สมูทตี้, ทานเล่น/ขนมขบเคี้ยว', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2NVKB4XGFAUET/hero/d586f9307c9d41f5a508225382f67cd0_1662939858900012103.webp', '2023-08-28', '2023-08-28'),
(6, 'Wine Connection - สุขุมวิท', 'เบรคฟาสต์/บรั๊นช์,แฮมเบอร์เกอร์,สเต็ก', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2XVN35ER8BXRE/hero/8774d602a3044150a5704300e060285e_1630124806505894238.webp', '2023-08-28', '2023-08-28');



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
