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

url /register

---

## ฟีเจอร์หน้าเว็บ

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
