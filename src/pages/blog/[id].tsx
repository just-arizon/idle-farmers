import { useParams, Link } from "react-router-dom";
// import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Img1 from "@/assets/agritechImg.jpg";
import Img2 from "@/assets/disabilityImg.jpg";
import Img3 from "@/assets/businessImg.jpg";
import Img4 from "@/assets/TractorImg.jpg";

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

## Barriers to Tech Adoption in Rural Africa
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
    date: "2025-03-25",
    readTime: "5 min read",
    tags: ["tech", "agriculture", "farming"],
    image: Img1,
  },
  {
    id: 2,
    title:
      "A New Era for Inclusive Agriculture: Inclusion and Empowerment in Nigeria's Farm Cities Project",
    description:
      "",
    content: `

At IdleFarmer, our vision is to empower every farmer to be a thriving agri-entrepreneur. We believe that to build a resilient and prosperous agricultural sector, we must build a system that is inclusive of everyone. That's why we are incredibly excited by the new partnership between the National Commission for Persons with Disabilities (NCPWD) and the Peace for Humanity Foundation to establish the **₦70 billion Farm Cities Project**.

The collaboration between the NCPWD and the Peace for Humanity Foundation is a significant development that also directly aligns with the mission of empowering farmers and promoting inclusion. This bold initiative represents a significant leap forward for Nigerian agriculture and a robust validation of our conviction that inclusive innovation is the future.

## Beyond Charity: A Foundation for Economic Empowerment

For too long, Persons with Disabilities (PWDs) have faced systemic barriers to participating in agriculture. The Farm Cities Project, however, is a game-changer. It moves the conversation from one of charity to one of economic empowerment. These integrated agricultural hubs are designed to create a holistic ecosystem for PWDs, enabling them to become self-sufficient and contribute to the nation's food security.

The project is so much more than just farmland. It includes:

- **Integrated Farming**:  Dedicated spaces for both crop and animal farming, including poultry, fishery, and dairy production.

- **Skills Acquisition Centers**: Training in essential, modern trades like ICT and tailoring, ensuring PWDs have diverse skills beyond farming.

- **Holistic Support**: Special healthcare services, recreational facilities, and even scholarships for the children of PWDs.

This is a testament to the belief that with the proper support and resources, every individual can contribute meaningfully to Nigeria's growth. It aligns perfectly with IdleFarmer's mission to remove the mundane burdens of farming so that our farmers can focus on what truly matters.

## IdleFarmer's Commitment to an Inclusive Future
At IdleFarmer, our role is to make farming more innovative and more accessible. Our core technology, from our fund-pooling cluster system to our digital marketplace, is built to empower every farmer, regardless of their circumstances.

We are committed to supporting initiatives like the Farm Cities Project by ensuring our platform and services are tailored to serve the unique needs of this community. Our technology can provide:

**Financial Tracking**: Building the credit history of farmers within the Farm Cities, making it easier for them to access future investments and grants.

**Digital Marketplace**: Directly connecting PWD farmers to buyers, ensuring they get the best possible price for their produce without having to navigate complex supply chains.

**Resource Sharing**: Facilitating the collective purchase and rental of equipment, reducing financial barriers for individuals.

This collaboration is a powerful symbol of dignity and opportunity. It proves that by investing in our people, we can unlock immense potential and build a more equitable, productive agricultural sector for all.

IdleFarmer is not just a champion of this trend, but a participant in ensuring technology serves as a tool for empowerment and social and economic transformation across the entire continent.


    `,
    author: "Kosisochukwu Charity Ani",
    date: "2025-08-06",
    readTime: "3 min read",
    tags: ["health", "support", "skill","marketplace"],
    image: Img2,
  },
  {
    id: 3,
    title: "From Burden to Business: How IdleFarmer is Empowering a New Generation of Agri-Entrepreneurs",
    description:
      "",
    content: `
The job of a farmer is a complex one. They are parents to their crops, nurturing each plant from seed to harvest. They are financiers, saving, budgeting and investing in inputs like seeds and fertilizer. They are logistics and human resource managers, coordinating equipment and labor. They are salespersons, navigating markets to sell their produce and make profit. A farmer is, in every sense of the word, never idle.

This is the powerful paradox behind our name, **IdleFarmer**. Our vision isn’t to make farmers literally idle, but to free them from the daily, mundane tasks that drain their time and resources. We are here to alleviate the burden, enabling you to focus on the strategic decisions that truly enhance your yield, sales, and livelihood. To help you move from burden to a more profitable agri-entrepreneur.

## Pre-Planting: Laying the Groundwork for Prosperity

Before a single seed goes into the soil, the groundwork for the entire season is laid. This pre-planting phase is the most critical time for planning. It’s when you prepare the soil, select the best seed varieties, maintain your equipment, and secure the finances for the season ahead. These tasks require time, accurate data, and often, significant capital.

This is where IdleFarmer’s model takes root. We believe in the power of community, and our solution is built around the cluster system. By bringing together groups of up to 20 farmers in the same area, we create a robust network for:


- **Fund Pooling**:  Farmers can pool their funds to buy quality fertilizers and seeds in bulk, securing significant discounts and ensuring access to essential resources at affordable rates.

- **Shared Resources**: The cost of farming equipment and storage facilities can be a significant barrier to entry. Within a cluster, farmers can collectively rent machinery and use shared storage, reducing individual financial strain and increasing efficiency.

- **Building a Financial Profile**: Every activity   from purchasing seeds to renting a tractor   is tracked on the IdleFarmer software. This digital record helps build a robust, credit-worthy financial report for each farmer. For the first time, you have the data you need to confidently access formal credit, investments, and grants that were previously out of reach.

## The Planting Phase: Precision in Every Seed
With the groundwork laid, the planting phase is a race against the clock. Precision is everything. Every seed must be planted at the right time, with the right amount of fertilizer and water, to ensure a strong start.
The IdleFarmer platform serves as your digital companion during this crucial period. It helps you manage and record every action   from **seeding** and **fertilizing** to **irrigation** schedules and **pest control** applications. This meticulous **record-keeping** allows you to monitor your fields with confidence and make informed decisions, ensuring your young crops have the best possible chance to grow strong and healthy.

### The Harvest: From Field to Fortune

The harvest is the moment when all your hard work comes to fruition. But this final phase comes with its own set of challenges, from protecting your produce from spoilage to navigating the volatile market.

IdleFarmer ensures the value you’ve worked so hard to create doesn’t get lost in the final stretch.


- **Logistics & Processing**: We provide a fleet of vehicles and equipment for harvesting, processing, and transporting your produce. This ensures your crops are handled efficiently and delivered in perfect condition.

- **Inventory Tracking**: Our inventory tracker helps you digitally document your harvest rates, sales, and stock levels. This gives you a clear overview of your business performance, making it easier to plan for the future.

- **A Digital Marketplace**: Perhaps most importantly, our digital marketplace connects you directly to buyers, bypassing the intermediaries who often eat into your profits. By giving you direct access to the market, we help you secure better prices and build lasting business relationships.

IdleFarmer doesn’t just provide a service; we offer a partnership and community. We take on the “mundane” so you can focus on being the visionary, the leader, and the successful agri-entrepreneur you were meant to be.

    `,
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
      "",
    content: `
Agricultural practices in Africa are often traditions that are passed down from generation to generation. As time evolves, traditional farming practices have also evolved, especially with the increasing rate of climate change, water scarcity, soil degradation, biodiversity, pests and diseases, market access, and fair pricing. The need for farmers to evolve and adopt modern farming practices, harness technology, and boost economic growth is essential.

Across Africa, agritech innovations are reshaping the agricultural landscape, driving both economic growth and food security. With precision agriculture technologies now at the forefront, farmers across the continent are achieving unprecedented improvements in crop yields, water efficiency, trade and resource management.From AI-driven innovations to the revival of traditional farming methods enhanced by cutting-edge technology, here are some standout examples of how agritech is revolutionizing agriculture across Africa.


## Nigeria: Education, Credit, Leasing and Pooling Resources
For some farmers, embracing modern farming practices is not the issue, but at what cost? Not every farmer has the capacity to buy a tractor, trailer, or sprinkler; that's where the IdleFarmer comes in, providing both small-scale and large-scale farmers a platform to lease their idle tools and machinery, rent storage and processing plants, share knowledge via the train-the-trainer model, build credit worthy financial reports by managing farm transactions  through the IdleFarmer software and more. The platform offers data-driven insights to optimize irrigation, fertilization, and pest control, improving crop yields and sustainability. Idle Farmer also enhances market access by directly connecting farmers with buyers and eliminating middlemen ensuring the farmer is fully empowered to not just farm but to make money from sales. Through training and capacity-building programs, it empowers farmers with the skills needed to embrace modern farming techniques. By democratizing precision agriculture tools, Idle Farmer is helping create a more affordbale, productive, and sustainable agricultural sector in Africa.

## Kenya: AI-Driven Coffee Farming
In Kenya's rich coffee-growing regions, farmers are tapping into the power of artificial intelligence (AI) to optimize their yields. The introduction of AI tools like the Virtual Agronomist has revolutionized fertilizer application, increasing coffee yields from 2.3 tonnes per hectare to 7.3 tonnes per hectare. Similarly, the PlantVillage app is empowering farmers to manage pests more effectively, enhancing crop health and reducing losses. This tech-driven approach not only boosts productivity but also supports sustainable farming practices. Kenya's small-scale farmers are demonstrating that AI can be a game-changer in the fight against low agricultural productivity.

## Uganda: Smart IoT for Maize Farmers
In central Uganda, precision farming is helping farmers adapt to the challenges posed by climate change. By integrating innovative Internet of Things (IoT) systems that combine weather data and soil moisture sensors, farmers receive real-time recommendations on irrigation. This innovative approach is leading to improved water usage and more robust maize crops, resulting in increased yields and ensuring the sustainability of these crops. Uganda's adoption of IoT-driven farming showcases the potential of technology in improving resource management in the face of climate variability.

## Burkina Faso: The Zaï Technique   A Traditional Method with Modern Impact
Burkina Faso's Yacouba Sawadogo is a symbol of how combining traditional farming techniques with modern innovations can yield impressive results. Sawadogo's Zaï technique, which involves digging small pits and filling them with organic matter to restore soil fertility, has dramatically improved agricultural productivity. In some cases, this method has resulted in a 500% increase in crop yields. Moreover, the technique helps restore groundwater levels, showing that even ancient practices, when combined with modern knowledge, can have a profound impact on food security and environmental sustainability.

## Côte d’Ivoire: Smart Valleys Rice Project
In Côte d'Ivoire, the Smart Valleys project is using technology to transform rice farming in the country's inland valleys. By introducing water management practices that control flooding, the project has helped farmers double their rice yields. This intervention has not only boosted productivity but also improved the management of water resources   crucial in a region prone to flooding and droughts. Through these smart agricultural techniques, Côte d'Ivoire is moving toward a more resilient and sustainable farming system.

## West Africa: Precision Cocoa Farming
Cocoa farming in West Africa, which is vital to the economies of Ghana and Côte d'Ivoire, is being revolutionized with precision farming technologies. By utilizing systems to optimize irrigation and pest control, farmers are significantly increasing their yields. Farmonaut's precision farming technology, which includes drones and sensors, enables farmers to manage their crops more efficiently, resulting in increased yields and improved sustainability. With cocoa being one of Africa's largest agricultural exports, such innovations are crucial for the industry's future and the livelihoods of millions of farmers.

## Zimbabwe: The Exchange Irrigation Scheme
Zimbabwe's Exchange Irrigation Scheme is another example of how technology can improve agricultural practices in semi-arid regions. Through the use of smallholder irrigation, farmers have increased their maize yields to an impressive 7,000 kg per hectare. This system not only boosts crop production but also ensures that water is used efficiently in areas where it is scarce. The success of this initiative demonstrates the vital role irrigation technologies play in enhancing agricultural output and combating the challenges posed by water scarcity.

## The Future of Agritech in Africa
These case studies showcase the transformative potential of precision agriculture across Africa for farmers, economies and consumers.. By blending technology with traditional farming techniques, African farmers are overcoming critical challenges like climate change, water scarcity, and low productivity. 
As agritech continues to evolve, its influence on Africa's agricultural landscape is set to expand, offering new opportunities for farmers and advancing food security across the continent. With the ability to increase crop yields by up to 300% and reduce water usage by 60%, precision farming is proving to be a game-changer, not just an innovation. 
The collaboration of government, CSO, policymakers and tech innovators is necessary to improve food security, boost trade and productivity,  and increase adoption of technology especially for rural farmers. 

As these technologies gain wider adoption, they hold the power to significantly improve the lives of farmers and ensure a more food-secure future for Africa. 

The future of farming on the continent is not only innovative and sustainable but also brimming with potential. 


    `,
    author: "Kosisochukwu Charity Ani",
    date: "2025-04-05",
    readTime: "3 min read",
    tags: ["Tractors", "GPS", "AI"],
    image: Img4,
  },
//   {
//     id: 5,
//     title: "API Design Best Practices",
//     description:
//       "Learn how to design clean, maintainable APIs that scale with your application and provide great developer experience.",
//     content: `
// # API Design Best Practices

// Designing good APIs is crucial for building maintainable and scalable applications. This guide covers essential principles and patterns for creating developer-friendly APIs.

// ## RESTful Design Principles

// ### Resource-Based URLs

// Design URLs around resources, not actions:

// \`\`\`
// Good:
// GET /api/users
// POST /api/users
// GET /api/users/123
// PUT /api/users/123
// DELETE /api/users/123

// Bad:
// GET /api/getUsers
// POST /api/createUser
// GET /api/getUserById/123
// \`\`\`

// ### HTTP Methods

// Use appropriate HTTP methods:

// - **GET**: Retrieve data
// - **POST**: Create new resources
// - **PUT**: Update entire resources
// - **PATCH**: Partial updates
// - **DELETE**: Remove resources

// ## Response Structure

// ### Consistent Response Format

// \`\`\`json
// {
//   "success": true,
//   "data": {
//     "id": 1,
//     "name": "John Doe",
//     "email": "john@example.com"
//   },
//   "message": "User retrieved successfully"
// }
// \`\`\`

// ### Error Responses

// \`\`\`json
// {
//   "success": false,
//   "error": {
//     "code": "VALIDATION_ERROR",
//     "message": "Invalid input data",
//     "details": [
//       {
//         "field": "email",
//         "message": "Email is required"
//       }
//     ]
//   }
// }
// \`\`\`

// ## Status Codes

// Use appropriate HTTP status codes:

// - **200**: Success
// - **201**: Created
// - **400**: Bad Request
// - **401**: Unauthorized
// - **403**: Forbidden
// - **404**: Not Found
// - **500**: Internal Server Error

// ## Pagination

// Implement consistent pagination:

// \`\`\`json
// {
//   "data": [...],
//   "pagination": {
//     "page": 1,
//     "limit": 20,
//     "total": 100,
//     "totalPages": 5,
//     "hasNext": true,
//     "hasPrev": false
//   }
// }
// \`\`\`

// ## Filtering and Sorting

// Support query parameters for filtering:

// \`\`\`
// GET /api/users?status=active&sort=createdAt&order=desc&limit=10
// \`\`\`

// ## Versioning

// Version your APIs for backward compatibility:

// \`\`\`
// /api/v1/users
// /api/v2/users
// \`\`\`

// Or use headers:

// \`\`\`
// Accept: application/vnd.api+json;version=1
// \`\`\`

// ## Security Best Practices

// ### Authentication

// Use JWT tokens or API keys:

// \`\`\`
// Authorization: Bearer <token>
// \`\`\`

// ### Rate Limiting

// Implement rate limiting to prevent abuse:

// \`\`\`json
// {
//   "error": {
//     "code": "RATE_LIMIT_EXCEEDED",
//     "message": "Too many requests",
//     "retryAfter": 60
//   }
// }
// \`\`\`

// ### Input Validation

// Always validate and sanitize input:

// \`\`\`typescript
// const userSchema = z.object({
//   name: z.string().min(1).max(100),
//   email: z.string().email(),
//   age: z.number().min(0).max(120)
// })
// \`\`\`

// ## Documentation

// ### OpenAPI/Swagger

// Document your APIs with OpenAPI specifications:

// \`\`\`yaml
// paths:
//   /users:
//     get:
//       summary: Get all users
//       parameters:
//         - name: limit
//           in: query
//           schema:
//             type: integer
//             default: 20
//       responses:
//         '200':
//           description: Successful response
// \`\`\`

// ## Testing

// ### API Testing

// Write comprehensive tests:

// \`\`\`typescript
// describe('Users API', () => {
//   test('GET /api/users returns user list', async () => {
//     const response = await request(app)
//       .get('/api/users')
//       .expect(200)
    
//     expect(response.body.success).toBe(true)
//     expect(Array.isArray(response.body.data)).toBe(true)
//   })
// })
// \`\`\`

// ## Conclusion

// Good API design is about creating intuitive, consistent, and well-documented interfaces. Follow these best practices to build APIs that developers love to use and that scale with your application.
//     `,
//     author: "Jordan Kim",
//     date: "2024-01-05",
//     readTime: "7 min read",
//     tags: ["API", "Backend", "REST"],
//     image: "/api-development.png",
//   },
];



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
        <header className="mb-5">
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
  /(?:^|\n)(- .+(?:\n- .+)*)/g,
  (items) => {
    const listItems = items
      .split("\n")
      .map((line) => line.replace(/^- (.+)/, "<li>$1</li>"))
      .join("");
    return `<ul class="list-disc pl-6"> ${listItems} </ul>`;
  }
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
