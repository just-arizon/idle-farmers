import { useParams, Link } from "react-router-dom";
// import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Img1 from "@/assets/agritechImg.jpg";

// Sample blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title:
      "Agritech Adoption in Rural Africa: Breaking Barriers and Building Trust",
    description: "",
    content: `

A century ago, people had basic needs like food, water and shelter. Farmers were committed to having many children, who would grow up to become farmhands, leading to larger cultivation and bigger yields, the definition of wealth in 19th- and 20th-century African society. The industrial revolution and technology are changing not just how we define wealth, but also how we grow food, build wealth, nurture relationships, and even raise children.

In recent years, the African continent has seen a surge in technological innovation, with digital tools and platforms helping to shape everything from healthcare to agriculture. Yet, despite the promise of technology, rural areas across Africa remain a significant challenge for widespread tech adoption. This is due to various factors such as, limited access to infrastructure, low digital literacy rates, a lack of trust in digital systems and wrong tools which do not address the needs of the average rural farmer.Technology is revolutionizing every sector, and agriculture in rural Africa can't be an exception. 


## The Importance of Technology in Rural Africa

According to the World Bank, agriculture contributes to 23% of Africa’s Gross Domestic Product (GDP) and employs 65% of the continent’s labor force. This highlights the critical role that agriculture plays in Africa’s economic development.
Rural Africa holds significant potential for tech-driven growth, especially in agriculture, which remains the backbone of many economies. While the continent has made strides in tech development, rural areas continue to lag behind in adopting digital solutions that can boost productivity and international trade, empower farmers, improve livelihoods, and even transform local economies. 

However, the adoption of tech solutions in these areas faces many obstacles, limiting its full potential. The barriers and opportunities of tech adoption in rural Africa exist because of the insurmountable gaps in infrastructure, accessibility and illiteracy.

When we think of agricultural innovations, free seedlings or subsidized fertilizers come to mind. While seeds and fertilizers are important the do not bridge the gap in modern farming practices or boost access 
Imagine an Uber for farmers where they can list their Tractors, Plows, Seed Drills, Sprayers, Reapers, Shellers, Milling Machines for other farmers to rent. 
An Airbnb for farmers to list storage and processing facilities for rent which serves as a central point for other farmers to store or process their produce for easy access to the buyers.

Better still an Amazon which serves as a digital global marketplace for farmers to sell their produce, an offline app for weather forecasting and data-driven tools to improve crop yields can make a massive difference in rural communities,  These tools don’t have to be high-tech or complicated; they just need to be simple, accessible, and affordable.

### Tech adoption in rural Africa is not an option but a crucial step for:

- **Economic Empowerment**: Digital tools can help farmers increase productivity, improve market access, attract investment and drive economic growth.

- **Educational Advancement**: Technology can bring quality education to remote areas, bridging the urban-rural divide.

- **Healthcare Improvement**: Mobile health solutions provide vital information and resources, improving health outcomes in underserved communities.

- **Financial Inclusion**: Mobile money and digital banking services open up financial access to those previously excluded, boosting economic participation.

- **Data Driven Decision-Making**:  data gathered over the years can be harnessed to solve local and unique problems affecting our crops such as pests, diseases, drought and also improve modern farming practices.

### Barriers to Tech Adoption in Rural Africa

While the advantages of technology are clear, several barriers stand in the way of its adoption in rural Africa. These challenges include:

- **Infrastructure Gaps**: According to the World Bank Group, “nearly 600 million people in Sub-Saharan Africa live without access to electricity”. The lack of basic infrastructure such as good road networks, reliable internet access and electricity is one of the biggest hurdles. Many rural communities still face frequent power outages, and internet connectivity can be either sporadic or completely absent. Even when infrastructure exists, the high costs of accessing it can make it out of reach for the farmers who need it most. 

- **Digital Literacy** : Many people in rural Africa are not familiar with how to use digital tools effectively. The absence of basic digital literacy skills makes it difficult for individuals to engage with and benefit from new technologies. This knowledge gap is often compounded by a lack of accessible training resources. A report by the African Development Bank shows that the adoption of precision agriculture technologies can increase crop yields by up to 300% and reduce water usage by up to 60%. 

- **Cultural Resistance and Trust Issues** : In rural areas, people often rely on traditional agricultural practices passed down through generations. New technologies are sometimes met with skepticism or fear, especially when they come from outside the community. Issues such as data privacy, security, land grabbing and the true intentions of technology providers further fuel this mistrust.



### Breaking Barriers: Strategies for Overcoming Challenges

Despite these challenges, numerous efforts are underway to drive technology adoption in rural Africa. Here are some strategies that are already making an impact:

**Mobile Solutions**: A Game Changer

Mobile phones are a powerful tool for tech adoption in rural areas. With more than 80% of Africans owning mobile phones, these devices are often the gateway to digital services.

In agriculture, mobile apps are transforming how farmers access information. For instance, mobile weather forecasting apps help farmers plan their planting and harvesting schedules, while digital marketplaces like M-Farm in Kenya enable farmers to connect directly with buyers, eliminating middlemen and IdleFarmer in Nigeria enable farmers to lease tractors, trailers and other farm machines at affordable rates.

Mobile money platforms like M-Pesa have also empowered rural communities to engage in digital financial services, including mobile banking, payments, and money transfers, significantly enhancing financial inclusion.

**Community-Based Education and Training**

To address the digital literacy gap, community-based training programs are essential. These programs are often designed to teach basic digital skills and demonstrate how to use mobile apps and websites effectively.
The “train the trainer” model has been particularly successful in rural Africa. Local champions or community leaders who are already trusted figures in their communities are trained to teach others. As a result, technology adoption becomes more organic, with community buy-in and engagement.

**Building Trust Through Local Partnerships**
For tech adoption to succeed, it must be designed with the local context in mind. International tech providers must collaborate with local organizations, governments, civil societies  and community leaders to ensure that solutions meet the needs of rural farmers and resonate with their values.
Partnerships with local organizations can help alleviate fears about new technologies and foster trust. Additionally, transparent communication about data privacy and security can help mitigate concerns about the misuse of personal information.

**Government and Policy Support**
Governments play a critical role in creating the conditions for successful tech adoption. By prioritizing rural infrastructure, security, investing in digital literacy programs, and incentivizing tech companies to reach underserved areas, governments can reduce many of the barriers to adoption.

Countries like **Rwanda** and **Kenya** have been at the forefront of building digital ecosystems and promoting policies that encourage tech-driven growth. Rwanda’s government has launched initiatives such as Smart Agriculture, which incorporates ICT tools to boost agricultural productivity. These efforts have helped make tech more accessible and effective for rural communities.


## The Path Ahead: The Future of Tech in Rural Africa
While the road to widespread tech adoption in rural Africa is not without its challenges, the potential rewards are immense. With the right investments in infrastructure, education, and trust-building, technology can empower rural communities to thrive in an increasingly digital world.

Tech in rural Africa is not just about providing technology it's about creating solutions that work for the people. By overcoming barriers and fostering trust through education and collaboration, rural communities can leverage technology to drive economic growth, improve livelihoods, and bridge the divide between urban and rural areas.

The future is bright, and with continued effort, technology will be the key to unlocking the immense potential of rural communities across the continent. Tech adoption in rural Africa has the power to revolutionize agriculture, enhance access to education and healthcare, and foster economic empowerment. However, it requires a collective effort governments, Pan-African technology providers, and local communities must work together to break down the barriers that stand in the way.

    `,
    author: "Kosisochukwu Charity Ani",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["tech", "agriculture", "farming"],
    image: Img1,
  },
  {
    id: 2,
    title:
      "From Burden to Business: How IdleFarmer is Empowering a New Generation of Agri-Entrepreneurs",
    description:
      "Dive deep into TypeScript patterns and best practices for building type-safe React applications.",
    content: `
# Mastering TypeScript for React

TypeScript has become an essential tool for React developers. In this comprehensive guide, we'll explore advanced patterns and best practices for building type-safe React applications.

## Why TypeScript with React?

TypeScript brings several benefits to React development:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Improved Refactoring**: Safe code changes across large codebases

## Essential TypeScript Patterns

### Component Props

Always define interfaces for your component props:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
\`\`\`

### Hooks with TypeScript

Type your custom hooks properly:

\`\`\`typescript
function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue)
  
  const increment = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])
  
  const decrement = useCallback(() => {
    setCount(prev => prev - 1)
  }, [])
  
  return { count, increment, decrement }
}
\`\`\`

## Advanced Patterns

### Generic Components

Create reusable components with generics:

\`\`\`typescript
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
\`\`\`

## Best Practices

1. **Start with strict mode**: Enable strict TypeScript settings
2. **Use interfaces over types**: For object shapes, prefer interfaces
3. **Leverage utility types**: Use Pick, Omit, Partial, etc.
4. **Type your event handlers**: Properly type onClick, onChange, etc.

## Conclusion

TypeScript transforms React development by providing type safety and better tooling. Start incorporating these patterns in your projects to build more maintainable and robust applications.
    `,
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
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS revolutionizes how we approach styling in modern web development. This utility-first framework enables rapid UI development while maintaining design consistency.

## Why Tailwind CSS?

Tailwind CSS offers several advantages:

- **Utility-First**: Build complex designs with simple utility classes
- **Responsive Design**: Built-in responsive modifiers
- **Customizable**: Easily customize the design system
- **Performance**: Purge unused CSS for optimal bundle size

## Responsive Design Principles

### Mobile-First Approach

Always start with mobile styles and enhance for larger screens:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Content -->
</div>
\`\`\`

### Breakpoint System

Tailwind uses intuitive breakpoint prefixes:

- \`sm:\` - 640px and up
- \`md:\` - 768px and up  
- \`lg:\` - 1024px and up
- \`xl:\` - 1280px and up
- \`2xl:\` - 1536px and up

## Layout Patterns

### Flexbox Layouts

Create flexible layouts with Flexbox utilities:

\`\`\`html
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Main content</div>
  <div class="w-full md:w-64">Sidebar</div>
</div>
\`\`\`

### Grid Layouts

Build complex grids with CSS Grid utilities:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## Component Patterns

### Card Component

\`\`\`html
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <img class="w-full h-48 object-cover" src="image.jpg" alt="Card image">
  <div class="p-6">
    <h3 class="text-xl font-semibold mb-2">Card Title</h3>
    <p class="text-gray-600">Card description text goes here.</p>
  </div>
</div>
\`\`\`

### Navigation Bar

\`\`\`html
<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex-shrink-0">
        <img class="h-8 w-8" src="logo.svg" alt="Logo">
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <a href="#" class="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" class="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
        </div>
      </div>
    </div>
  </div>
</nav>
\`\`\`

## Best Practices

1. **Use consistent spacing**: Stick to the spacing scale (4, 8, 16, etc.)
2. **Leverage component classes**: Extract common patterns into components
3. **Optimize for performance**: Use PurgeCSS to remove unused styles
4. **Maintain design tokens**: Customize the theme for brand consistency

## Conclusion

Tailwind CSS empowers developers to build responsive, beautiful UIs quickly and efficiently. By following these patterns and best practices, you can create maintainable and scalable design systems.
    `,
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
    content: `
# State Management in Modern React

State management is one of the most important aspects of building React applications. This guide explores different approaches and helps you choose the right solution for your needs.

## Understanding State Types

### Local State

Use \`useState\` for component-specific state:

\`\`\`typescript
function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
\`\`\`

### Global State

For state shared across components, consider these options:

1. **Context API**: Built-in React solution
2. **Zustand**: Lightweight state management
3. **Redux Toolkit**: Powerful but complex
4. **Jotai**: Atomic state management

## Context API Pattern

\`\`\`typescript
interface AppState {
  user: User | null
  theme: 'light' | 'dark'
}

const AppContext = createContext<AppState | null>(null)

function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>({
    user: null,
    theme: 'light'
  })
  
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}
\`\`\`

## Zustand Example

\`\`\`typescript
import { create } from 'zustand'

interface CounterStore {
  count: number
  increment: () => void
  decrement: () => void
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

function Counter() {
  const { count, increment, decrement } = useCounterStore()
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
\`\`\`

## When to Use Each Solution

### useState
- Component-specific state
- Simple state logic
- No sharing needed

### Context API
- Theme, authentication
- Moderate complexity
- Avoid prop drilling

### Zustand
- Global state with actions
- TypeScript-friendly
- Simple API

### Redux Toolkit
- Complex state logic
- Time-travel debugging
- Large applications

## Best Practices

1. **Start simple**: Use local state first
2. **Avoid over-engineering**: Don't use global state for everything
3. **Separate concerns**: Keep different types of state separate
4. **Use TypeScript**: Type your state for better DX

## Conclusion

Choose the right state management solution based on your application's complexity and requirements. Start with local state and gradually introduce global solutions as needed.
    `,
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
    content: `
# API Design Best Practices

Designing good APIs is crucial for building maintainable and scalable applications. This guide covers essential principles and patterns for creating developer-friendly APIs.

## RESTful Design Principles

### Resource-Based URLs

Design URLs around resources, not actions:

\`\`\`
Good:
GET /api/users
POST /api/users
GET /api/users/123
PUT /api/users/123
DELETE /api/users/123

Bad:
GET /api/getUsers
POST /api/createUser
GET /api/getUserById/123
\`\`\`

### HTTP Methods

Use appropriate HTTP methods:

- **GET**: Retrieve data
- **POST**: Create new resources
- **PUT**: Update entire resources
- **PATCH**: Partial updates
- **DELETE**: Remove resources

## Response Structure

### Consistent Response Format

\`\`\`json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "message": "User retrieved successfully"
}
\`\`\`

### Error Responses

\`\`\`json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
\`\`\`

## Status Codes

Use appropriate HTTP status codes:

- **200**: Success
- **201**: Created
- **400**: Bad Request
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **500**: Internal Server Error

## Pagination

Implement consistent pagination:

\`\`\`json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
\`\`\`

## Filtering and Sorting

Support query parameters for filtering:

\`\`\`
GET /api/users?status=active&sort=createdAt&order=desc&limit=10
\`\`\`

## Versioning

Version your APIs for backward compatibility:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

Or use headers:

\`\`\`
Accept: application/vnd.api+json;version=1
\`\`\`

## Security Best Practices

### Authentication

Use JWT tokens or API keys:

\`\`\`
Authorization: Bearer <token>
\`\`\`

### Rate Limiting

Implement rate limiting to prevent abuse:

\`\`\`json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "retryAfter": 60
  }
}
\`\`\`

### Input Validation

Always validate and sanitize input:

\`\`\`typescript
const userSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().min(0).max(120)
})
\`\`\`

## Documentation

### OpenAPI/Swagger

Document your APIs with OpenAPI specifications:

\`\`\`yaml
paths:
  /users:
    get:
      summary: Get all users
      parameters:
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: Successful response
\`\`\`

## Testing

### API Testing

Write comprehensive tests:

\`\`\`typescript
describe('Users API', () => {
  test('GET /api/users returns user list', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200)
    
    expect(response.body.success).toBe(true)
    expect(Array.isArray(response.body.data)).toBe(true)
  })
})
\`\`\`

## Conclusion

Good API design is about creating intuitive, consistent, and well-documented interfaces. Follow these best practices to build APIs that developers love to use and that scale with your application.
    `,
    author: "Jordan Kim",
    date: "2024-01-05",
    readTime: "7 min read",
    tags: ["API", "Backend", "REST"],
    image: "/api-development.png",
  },
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id as string, 10);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <div className="p-8 text-center text-red-500">Post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-6 hover:bg-accent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6 text-pretty">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                // Convert code blocks
                .replace(
                  /```([\s\S]*?)```/g,
                  '<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>'
                )
                // Convert inline code
                .replace(
                  /`([^`]+)`/g,
                  '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>'
                )
                // Bold text (**text** or __text__)
                .replace(/\*\*(.+?)\*\*|__(.+?)__/g, "<strong>$1$2</strong>")
                // H1
                .replace(
                  /^# (.+)$/gm,
                  '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>'
                )
                // H2
                .replace(
                  /^## (.+)$/gm,
                  '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>'
                )
                // H3
                .replace(
                  /^### (.+)$/gm,
                  '<h3 class="text-xl font-medium mt-4 mb-2">$1</h3>'
                )
                // Bullet points (- item)
                .replace(
                  /(?:^|\n)- (.+)/g,
                  (match, item) =>
                    `<ul class="list-disc pl-6"><li>${item}</li></ul>`
                )
                // Line breaks
                .replace(/\n/g, "<br />"),
            }}
          />
        </article>

        {/* Back to Blog Button */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/blog">
            <Button className="w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Posts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
