import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "@heroui/link";
// import { notFound } from "next/navigation";
import { Button } from "components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

// Sample blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    description:
      "Learn the fundamentals of Next.js 15 and build your first modern web application with the latest features.",
    content: `
# Getting Started with Next.js 15

Next.js 15 introduces several exciting features that make building React applications even more powerful and developer-friendly. In this comprehensive guide, we'll explore the key improvements and learn how to leverage them in your projects.

## What's New in Next.js 15

The latest version of Next.js brings significant improvements to performance, developer experience, and new features that streamline the development process.

### Enhanced App Router

The App Router continues to evolve with better performance optimizations and more intuitive APIs. The new version includes:

- Improved server components with better streaming
- Enhanced client-side navigation
- Better error boundaries and loading states

### Turbopack Integration

Next.js 15 comes with improved Turbopack integration, offering:

- Faster development builds
- Better hot module replacement
- Reduced memory usage during development

## Getting Started

To create a new Next.js 15 project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This will set up a new project with all the latest features and best practices configured out of the box.

## Key Features to Explore

1. **Server Components**: Build faster applications with server-side rendering
2. **Streaming**: Improve user experience with progressive loading
3. **Suspense Integration**: Better loading states and error handling
4. **Improved TypeScript Support**: Enhanced type safety and developer experience

## Conclusion

Next.js 15 represents a significant step forward in React framework development. With its focus on performance, developer experience, and modern web standards, it's an excellent choice for building production-ready applications.

Start exploring these features in your next project and experience the improved development workflow firsthand.
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    image: "/nextjs-development.png",
  },
  {
    id: 2,
    title: "Mastering TypeScript for React",
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { id } = useParams(); // Get the dynamic 'id' from the URL
  const postId = parseInt(id as string); // Convert to a number
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link href="/">
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
                .replace(/\n/g, "<br />")
                .replace(
                  /```([^`]+)```/g,
                  '<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>'
                )
                .replace(
                  /`([^`]+)`/g,
                  '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>'
                )
                .replace(
                  /^# (.+)$/gm,
                  '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>'
                )
                .replace(
                  /^## (.+)$/gm,
                  '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>'
                )
                .replace(
                  /^### (.+)$/gm,
                  '<h3 class="text-xl font-medium mt-4 mb-2">$1</h3>'
                ),
            }}
          />
        </article>

        {/* Back to Blog Button */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/">
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
