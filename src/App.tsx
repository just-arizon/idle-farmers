import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog/page";  // Blog listing page
import BlogPostPage from "@/pages/blog/[id]";  // Individual blog post page
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<BlogPostPage />} path="/blog/:id" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
