"use client";
import AuthService from "@/libs/AuthService";
import { Container, Card, CardContent, Typography, Input, Stack, Button } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const response = await AuthService.Login(form);
    if (response.status === 200) {
      const res = await response.json();
      console.log("เข้าสู่ระบบสำเร็จ", res);

      // เก็บ token และ user ไว้ใน localStorage
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      window.location.href = "/";
    } else {
      alert("เข้าสู่ระบบไม่สำเร็จ");
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">Login Page</Typography>
            <Input
              name="email"
              placeholder="Email"
              fullWidth
              value={form.email}
              onChange={handleChange}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              fullWidth
              value={form.password}
              onChange={handleChange}
            />
            <Button onClick={handleLogin} fullWidth>
              Login
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
