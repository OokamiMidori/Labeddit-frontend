import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/login/login";
import { CommentPage } from "../Pages/comments/comments";
import { SignupPage } from "../Pages/signup/signup";
import { HomePage } from "../Pages/HomePage/HomePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/posts/:id" element={<CommentPage />} />
            </Routes>
        </BrowserRouter>
    )
}