# book-app

## API

http://localhost:3000/

## API Document

http://localhost:3000/api-docs

## Mongodb express -> ดูข้อมูลในฐานข้อมูล

http://localhost:8081/
-> username -> admin  
-> password -> password123

```json
{
  "username": "teacher",
  "email": "teacher@kku.ac.th",
  "password": "password123"
}
```

# register
<img width="1905" height="1026" alt="Screenshot 2025-09-19 000014" src="https://github.com/user-attachments/assets/395992ac-1230-4e5b-b909-aab9245b68d1" />
# Data
<img width="1254" height="166" alt="Screenshot 2025-09-19 000130" src="https://github.com/user-attachments/assets/f23a34ed-1ce0-43fd-a369-cbb61a43723a" />

# Login
<img width="1919" height="1025" alt="Screenshot 2025-09-19 000038" src="https://github.com/user-attachments/assets/fa8bcda2-fb6a-4817-8230-bdb1242cdf71" />
# หน้าแรก อัปเดตแสดง ชื่อและอีเมลuser ด้านขวาบน
<img width="1918" height="1033" alt="Screenshot 2025-09-19 000105" src="https://github.com/user-attachments/assets/df66d10e-a52e-44f9-a99a-7daa83724662" />

---
- **หน้าแรก**  
  แสดงรายการหนังสือทั้งหมดจาก API  
  ใช้ Grid Layout (3 คอลัมน์) แสดงปกหนังสือ + ชื่อ + ผู้แต่ง  
  คลิกที่หนังสือแต่ละเล่มจะลิงก์ไปยังหน้ารายละเอียด  
  ใช้โทนน้ำตาลอ่อน พร้อม UI  
  ![หน้าแรก](https://github.com/user-attachments/assets/ece5edbe-a73a-4dbb-b78a-5a8d8a7640cf)

- **หน้ารายละเอียดหนังสือ**  
  แสดงรายละเอียดหนังสือแต่ละเล่ม (Title, Author, Genre, Year, Price, Status, Description)  
  มีข้อมูลผู้เพิ่มหนังสือ และวันเวลาในการสร้าง/แก้ไขล่าสุด  
  ใช้โทนน้ำตาลอ่อน พร้อม UI  
  ![หน้ารายละเอียด](https://github.com/user-attachments/assets/f381093e-b5b8-4e8f-a787-b9b2dccf71e5)
