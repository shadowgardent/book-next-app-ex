"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Card,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import type { BookResponse, Book } from "../types/book";
import Link from "next/link";

export default function Home() {
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // เพิ่ม state สำหรับ user
  const [user, setUser] = useState<{ username: string; email: string } | null>(
    null
  );

  useEffect(() => {
    // ดึงข้อมูล user จาก localStorage
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch {
        setUser(null);
      }
    }
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/books");
      if (response.ok) {
        const data = await response.json();
        const resData: BookResponse = data;
        setBooksData(resData.books);
      }
    } catch (err) {
      console.error("Failed to fetch books", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <Container
      sx={{
        backgroundColor: "#f5f0e6",
        minHeight: "100vh",
        py: 4,
        borderRadius: 3,
      }}
    >
      {/* แสดงชื่อผู้ใช้และอีเมล */}
      <Box mb={3}>
        {user ? (
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box>
              <Typography variant="subtitle1" sx={{ color: "#5d4037" }}>
                👤 {user.username}
              </Typography>
              <Typography variant="body2" sx={{ color: "#8d6e63" }}>
                {user.email}
              </Typography>
            </Box>
            <Button
              onClick={handleLogout}
              color="error"
              variant="outlined"
              size="small"
            >
              ออกจากระบบ
            </Button>
          </Stack>
        ) : (
          <Typography align="right" color="error" variant="body2">
            กรุณาเข้าสู่ระบบ
          </Typography>
        )}
      </Box>

      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ color: "#5d4037", fontWeight: "bold" }}
      >
        รายการหนังสือ
      </Typography>

      {isLoading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress sx={{ color: "#8d6e63" }} />
        </Box>
      )}

      {!isLoading &&
        booksData.map((book) => (
          <Box key={book._id} sx={{ mb: 2 }}>
            <Card
              sx={{
                p: 2,
                backgroundColor: "#efebe9",
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent>
                <Link
                  href={`/book/${book._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="h6" sx={{ color: "#6d4c41" }}>
                    {book.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#8d6e63" }}>
                    ผู้แต่ง: {book.author}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Box>
        ))}
    </Container>
  );
}
