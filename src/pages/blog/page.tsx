import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@heroui/link";
import { Badge } from "@/components/ui/badge";
import Img1 from "@/assets/agritechImg.jpg"

export default function BlogPage() {

  const blogPosts = [
  {
    id: 1,
    title: "Agritech Adoption in Rural Africa",
    description:
      "A century ago, people had basic needs like food, water and shelter.",
    content:
      "A century ago, people had basic needs like food, water and shelter. Farmers were committed to having many children, who would grow up to become farmhands...",
    author: "Kosisochukwu Charity Ani",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["tech", "agriculture"],
    image: Img1,
  },
  {
    id: 2,
    title: "Mastering TypeScript for React",
    description: "Dive deep into TypeScript patterns and best practices for building type-safe React applications.",
    content: "TypeScript has become an essential tool for React developers. In this comprehensive guide...",
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    tags: ["TypeScript", "React", "JavaScript"],
    image: "/typescript-code.png",
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind CSS",
    description:
      "Create beautiful, responsive user interfaces using Tailwind CSS utility classes and modern design principles.",
    content: "Tailwind CSS revolutionizes how we approach styling in modern web development...",
    author: "Emma Davis",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Tailwind CSS", "CSS", "UI/UX"],
    image: "/responsive-web-design.png",
  },
  {
    id: 4,
    title: "State Management in Modern React",
    description:
      "Explore different state management solutions and learn when to use each approach in your React applications.",
    content: "State management is one of the most important aspects of building React applications...",
    author: "Alex Rodriguez",
    date: "2024-01-08",
    readTime: "10 min read",
    tags: ["React", "State Management", "Zustand"],
    image: "/react-state-management.png",
  },
  {
    id: 5,
    title: "API Design Best Practices",
    description:
      "Learn how to design clean, maintainable APIs that scale with your application and provide great developer experience.",
    content: "Designing good APIs is crucial for building maintainable and scalable applications...",
    author: "Jordan Kim",
    date: "2024-01-05",
    readTime: "7 min read",
    tags: ["API", "Backend", "REST"],
    image: "/api-development.png",
  },
];
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">IdleFarmer Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Insights, tutorials, and best practices for modern web development
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-sm">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
}
