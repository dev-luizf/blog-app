import { PrismaService } from './prisma.service';

const authors = [
  {
    username: 'luiz',
    password: "$argon2id$v=19$m=65536,t=3,p=4$ewWDLrhTYRzT1+2uVwxy6Q$qSsecWHY52OXRZWV8Fn0iD+Nh1H2p5RdXVGIuK1ZY/8",
    isAdmin: true,
  },
  {
    username: 'teste',
    password: "$argon2id$v=19$m=65536,t=3,p=4$ewWDLrhTYRzT1+2uVwxy6Q$qSsecWHY52OXRZWV8Fn0iD+Nh1H2p5RdXVGIuK1ZY/8",
    isAdmin: true,
  }
];

const posts = [
  {
    title: 'Introduction to Machine Learning',
    content:
      'Machine learning is a subset of artificial intelligence that focuses on the development of algorithms...',
    published: true,
    createdAt: '2023-07-05T10:15:30Z',
    updatedAt: '2023-07-05T14:20:45Z',
    authorId: 1,
  },
  {
    title: 'The Benefits of Regular Exercise',
    content:
      'Regular exercise has numerous benefits for both physical and mental health...',
    published: true,
    createdAt: '2023-07-04T09:45:15Z',
    updatedAt: '2023-07-04T11:55:20Z',
    authorId: 1,
  },
  {
    title: 'Exploring the Wonders of Space',
    content: 'Space has always been a subject of fascination for humans...',
    published: true,
    createdAt: '2023-07-03T15:30:00Z',
    updatedAt: '2023-07-03T18:40:10Z',
    authorId: 1,
  },
  {
    title: 'Delicious and Healthy Recipes for Summer',
    content:
      'Summer is the perfect time to try out new recipes that are both delicious and nutritious...',
    published: true,
    createdAt: '2023-07-02T12:20:45Z',
    updatedAt: '2023-07-02T14:30:55Z',
    authorId: 2,
  },
  {
    title: 'Tips for Improving Productivity',
    content:
      'Boosting productivity can have a significant impact on both personal and professional life...',
    published: true,
    createdAt: '2023-07-01T08:00:00Z',
    updatedAt: '2023-07-01T10:10:05Z',
    authorId: 2,
  },
];

const prisma = new PrismaService();

async function main() {
  await prisma.user.createMany({
    data: authors,
    skipDuplicates: true,
  });
  await prisma.post.createMany({
    data: posts,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
