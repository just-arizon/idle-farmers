
import DefaultLayout from "@/layouts/default";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@heroui/link";
import { Badge } from "@/components/ui/badge";
import Img1 from "@/assets/agritechImg.jpg"
import Img2 from "@/assets/disabilityImg.jpg";
import Img3 from "@/assets/businessImg.jpg";
import Img4 from "@/assets/TractorImg.jpg";


export default function BlogPage() {

  const blogPosts = [
  {
    id: 1,
    title: "Agritech Adoption in Rural Africa: Breaking Barriers and Building Trust",
    description:
      "A century ago, people had basic needs like food, water and shelter. Farmers were committed to having many children, who would grow up to become farmhands, leading to larger cultivation and bigger yields...",
    author: "Kosisochukwu Charity Ani",
    date: "2025-03-25",
    readTime: "5 min read",
    tags: ["tech", "agriculture"],
    image: Img1,
  },
  {
    id: 2,
    title: "A New Era for Inclusive Agriculture: Inclusion and Empowerment in Nigeria's Farm Cities Project",
    description: "At IdleFarmer, our vision is to empower every farmer to be a thriving agri-entrepreneur. We believe that to build a resilient and prosperous agricultural sector...",
    author: "Kosisochukwu Charity Ani",
    date: "2025-09-06",
    readTime: "3 min read",
    tags: ["health", "support", "skills", "marketplace"],
    image: Img2,
  },
  {
    id: 3,
    title: "From Burden to Business: How IdleFarmer is Empowering a New Generation of Agri-Entrepreneurs",
    description:
      "The job of a farmer is a complex one. They are parents to their crops, nurturing each plant from seed to harvest. They are financiers, saving, budgeting and investing in inputs like seeds and fertilizer. They are logistics and human resource managers...",
    author: "Kosisochukwu Charity Ani",
    date: "2025-08-17",
    readTime: "2 min read",
    tags: ["business", "tech", "entrepreneurs"],
    image: Img3,
  },
  {
    id: 4,
    title: "Agritech Innovation in Africa: Transforming Agriculture with Precision Technologies",
    description:
      "Agricultural practices in Africa are often traditions that are passed down from generation to generation. As time evolves, traditional farming practices have also evolved, especially with the increasing rate of climate change...",
    author: "Kosisochukwu Charity Ani",
    date: "2025-04-5",
    readTime: "3 min read",
    tags: ["Tractors", "GPS", "AI"],
    image: Img4,
  },
  // {
  //   id: 5,
  //   title: "API Design Best Practices",
  //   description:
  //     "Learn how to design clean, maintainable APIs that scale with your application and provide great developer experience.",
  //   content: "Designing good APIs is crucial for building maintainable and scalable applications...",
  //   author: "Jordan Kim",
  //   date: "2024-01-05",
  //   readTime: "7 min read",
  //   tags: ["API", "Backend", "REST"],
  //   image: "/api-development.png",
  // },
];
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">IdleFarmer Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Insights, Agritech updates and best modern farming practices.
Where farming meets innovation
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
