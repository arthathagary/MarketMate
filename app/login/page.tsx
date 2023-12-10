"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const usersRef = collection(db, "users");
    const q = query(
      usersRef,
      where("username", "==", username),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const user = querySnapshot.docs[0].data();
      if (user.username === "admin" && user.password === "admin123") {
        router.push("/dashboard"); // Redirect to dashboard
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <form
        onSubmit={handleLogin}
        className="grid w-full max-w-sm items-center gap-1.5 mb-6"
      >
        <Label htmlFor="username">User Name</Label>
        <Input
          type="text"
          id="username"
          placeholder="User Name"
          onChange={handleUsernameChange}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          className="mb-3"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
