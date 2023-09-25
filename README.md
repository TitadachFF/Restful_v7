# Restaurant RESTful API and Frontend

การติดตั้ง
คลอนเรียกเอาท์เรปอสิทรีนี้ไปยังเครื่องคอมพิวเตอร์ของคุณ:
```bash
git clone https://github.com/ppyz8509/RESTFUL_work2.git
```
จากนั้นcd เพื่อเข้าถึงไฟล์
```bash
cd RESTFUL_work2
```
# การตั้งค่าฐานข้อมูล
สร้างฐานข้อมูล MySQL สำหรับโครงการนี้

อัพเดตการตั้งค่าฐานข้อมูลใน RESTFUL_work2/config/db_config.db ด้วยรายละเอียดของฐานข้อมูลของคุณ

# การเรียกใช้งานเซิร์ฟเวอร์
```bash
cd RESTFUL_work2
npm run dev
```
เซิร์ฟเวอร์ API จะเรียกที่ http://localhost:8080.


# RESTful API

**GET** `/restaurants`:คือการดึงรายการร้านอาหารทั้งหมด
**GET** `/restaurants/:id`:จะเป็นการ ดึงรายละเอียดของรายการร้านอาหารที่ระบุด้วย ID
**POST** `/restaurants`:คือการ สร้างรายการร้านอาหารใหม่
**PUT** `/restaurants:id`:เป็นการอัพเดตรายละเอียดของรายการร้านอาหารที่ระบุด้วย ID
 **DELETE** `/restaurants/:id`: คือการ ลบรายการร้านอาหารที่ระบุด้วย ID

# การใช้github
เข้าสู่บัญชี GitHub ของคุณ
คลิกที่ปุ่ม "New" หรือ "Create" เพื่อสร้างรีโพสิทอรีใหม่
ตั้งชื่อรีโพสิทอรีและเพิ่มคำอธิบาย (ถ้าต้องการ)
เลือกตัวเลือกให้มี .gitignore และเลือกภาษาหรือเฟรมเวิร์กที่เหมาะสม (ถ้าต้องการ)
คลิกที่ปุ่ม "Create repository" เพื่อสร้าง
เพิ่ม Remote Repository เป็น Origin:

หลังจากสร้างรีโพสิทอรีบน GitHub แล้ว คุณจะได้ URL ของรีโพสิทอรี (เช่น https://github.com/username/repo-name.git)
เปิดเทอร์มินอลหรือโปรแกรมใช้งาน Git บนคอมพิวเตอร์ของคุณ
เปิดโปรเจกต์ที่คุณต้องการ push ไปยัง GitHub
เพิ่ม URL ของรีโพสิทอรีเป็น remote repository โดยใช้คำสั่ง:
bash
```bash
git remote add origin https://github.com/username/repo-name.git
```
ทำการ Commit และ Push งาน:

หลังจากที่คุณได้ทำการแก้ไขและ commit งานในโปรเจกต์ของคุณ คุณสามารถ push งานไปยัง GitHub ได้โดยใช้คำสั่ง:
bash
```bash
git push origin master
```
ในกรณีที่คุณใช้แบรนช์อื่นนอกจาก master คุณควรเปลี่ยน master เป็นชื่อแบรนช์ที่คุณใช้เมื่อใช้คำสั่ง push