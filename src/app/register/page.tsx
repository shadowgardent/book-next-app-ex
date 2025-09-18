"use client";
import AuthService from "@/libs/AuthService";
import { RegisterForm } from "@/types/RegisterForm";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Input,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
import type { RegistrationRes } from "@/types/RegisterRes";

export default function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setError(null);

    // ตรวจสอบรหัสผ่านตรงกัน
    if (registerForm.password !== registerForm.confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }

    const data: RegisterForm = {
      username: registerForm.username,
      email: registerForm.email,
      password: registerForm.password,
    };

    const { response, result } = await AuthService.Register(data);

    if (response.status === 201) {
      // สำเร็จ
      window.location.href = "/login";
    } else {
      // แสดง error message จาก backend ถ้ามี
      setError(result?.message || "เกิดข้อผิดพลาดในการสมัครสมาชิก");
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">Register Page</Typography>
            <Input
              placeholder="Username"
              name="username"
              value={registerForm.username}
              onChange={handleChange}
              fullWidth
            />
            <Input
              placeholder="Email"
              name="email"
              value={registerForm.email}
              onChange={handleChange}
              fullWidth
            />
            <Input
              placeholder="Password"
              name="password"
              type="password"
              value={registerForm.password}
              onChange={handleChange}
              fullWidth
            />
            <Input
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              value={registerForm.confirmPassword}
              onChange={handleChange}
              fullWidth
            />
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
          </Stack>
        </CardContent>
        <Button onClick={handleRegister} fullWidth>
          Register
        </Button>
      </Card>
    </Container>
  );
}
