import { RegisterForm } from "@/types/RegisterForm";

//src/libs/AuthService.ts
export default class AuthService {
  static async Register(data: RegisterForm) {
    // ตรวจสอบข้อมูลก่อนส่ง
    console.log("Register data:", data);

    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // แสดงผลลัพธ์ที่ได้จาก backend
    let result = null;
    try {
      result = await response.json();
      console.log("Register response:", result);
    } catch (e) {
      console.log("Response is not JSON");
    }

    // ส่งคืนทั้ง response และผลลัพธ์
    return { response, result };
  }

  static async Login(data: { email: string; password: string }) {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }
}
