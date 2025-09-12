"use client";
import { Book } from "@/types/book";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  CircularProgress,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/api/books/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBook(data.book);
        }
      } catch (error) {
        console.error("Failed to fetch book detail", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id !== undefined) {
      fetchData();
    }
  }, [id]);

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress sx={{ color: "#8d6e63" }} />
      </Box>
    );

  return (
    <Box
      p={3}
      sx={{
        backgroundColor: "#f5f0e6",
        minHeight: "100vh",
        borderRadius: 3,
      }}
    >
      {book ? (
        <Card
          sx={{
            p: 3,
            backgroundColor: "#efebe9",
            borderRadius: 3,
            boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ color: "#5d4037" }}>
              {book.title}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ color: "#6d4c41" }}>
              ผู้แต่ง: {book.author}
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ color: "#795548" }}>
              ประเภท: {book.genre}
            </Typography>

            <Typography variant="body1" sx={{ color: "#795548" }}>
              ปีที่พิมพ์: {book.year}
            </Typography>

            <Typography variant="body1" sx={{ color: "#795548" }}>
              ราคา: {book.price} บาท
            </Typography>

            <Typography variant="body1" sx={{ mt: 1, color: "#5d4037" }}>
              สถานะ:
            </Typography>
            {book.available ? (
              <Chip
                label="มีจำหน่าย"
                sx={{ backgroundColor: "#a1887f", color: "white" }}
                size="small"
              />
            ) : (
              <Chip
                label="หมด"
                sx={{ backgroundColor: "#bcaaa4", color: "white" }}
                size="small"
              />
            )}

            <Typography variant="body2" sx={{ mt: 2, color: "#4e342e" }}>
              รายละเอียด: {book.description}
            </Typography>

            <Typography
              variant="caption"
              display="block"
              sx={{ mt: 2, color: "#6d4c41" }}
            >
              เพิ่มโดย: {book.addedBy.username} ({book.addedBy.email})
            </Typography>

            <Typography variant="caption" display="block" sx={{ color: "#6d4c41" }}>
              สร้างเมื่อ: {new Date(book.createdAt).toLocaleString()}
            </Typography>

            <Typography variant="caption" display="block" sx={{ color: "#6d4c41" }}>
              แก้ไขล่าสุด: {new Date(book.updatedAt).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography align="center" sx={{ color: "#6d4c41" }}>
          ไม่พบข้อมูลหนังสือ
        </Typography>
      )}
    </Box>
  );
}
