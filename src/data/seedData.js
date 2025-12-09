const db = require('../config/database');

// Mock content data - diverse, high-quality content
const mockContent = [
  // Text Content
  {
    id: 'text-001',
    type: 'text',
    content: 'The greatest glory in living lies not in never falling, but in rising every time we fall. Each challenge we overcome makes us stronger and more resilient.',
    thoughtCount: 12,
    createdAt: new Date('2025-12-09T10:00:00Z').toISOString()
  },
  {
    id: 'text-002',
    type: 'text',
    content: 'Technology is best when it brings people together. The real power of innovation lies not in the complexity of the code, but in the simplicity of the solution it provides to real-world problems.',
    thoughtCount: 8,
    createdAt: new Date('2025-12-09T09:30:00Z').toISOString()
  },
  {
    id: 'text-003',
    type: 'text',
    content: 'The only way to do great work is to love what you do. Passion fuels persistence, and persistence leads to excellence.',
    thoughtCount: 15,
    createdAt: new Date('2025-12-09T08:45:00Z').toISOString()
  },
  {
    id: 'text-004',
    type: 'text',
    content: 'In a world of rapid change, the ability to learn is more valuable than what you already know. Stay curious, stay humble, and keep learning.',
    thoughtCount: 6,
    createdAt: new Date('2025-12-08T18:20:00Z').toISOString()
  },
  {
    id: 'text-005',
    type: 'text',
    content: 'Success is not final, failure is not fatal: it is the courage to continue that counts. Every setback is a setup for a comeback.',
    thoughtCount: 10,
    createdAt: new Date('2025-12-08T14:00:00Z').toISOString()
  },

  // Image Content
  {
    id: 'image-001',
    type: 'image',
    content: 'https://picsum.photos/800/600?random=1',
    caption: 'A serene mountain landscape at sunrise - nature\'s reminder that every day is a new beginning',
    thoughtCount: 24,
    createdAt: new Date('2025-12-09T07:15:00Z').toISOString()
  },
  {
    id: 'image-002',
    type: 'image',
    content: 'https://picsum.photos/800/600?random=2',
    caption: 'Modern architecture meets innovative design - pushing the boundaries of what\'s possible',
    thoughtCount: 18,
    createdAt: new Date('2025-12-09T06:00:00Z').toISOString()
  },
  {
    id: 'image-003',
    type: 'image',
    content: 'https://picsum.photos/800/600?random=3',
    caption: 'Abstract art in motion - creativity knows no bounds',
    thoughtCount: 14,
    createdAt: new Date('2025-12-08T22:30:00Z').toISOString()
  },
  {
    id: 'image-004',
    type: 'image',
    content: 'https://picsum.photos/800/600?random=4',
    caption: 'Technology hub at night - where innovation never sleeps',
    thoughtCount: 20,
    createdAt: new Date('2025-12-08T16:45:00Z').toISOString()
  },
  {
    id: 'image-005',
    type: 'image',
    content: 'https://picsum.photos/800/600?random=5',
    caption: 'Ocean waves crashing on the shore - the perfect metaphor for persistence',
    thoughtCount: 16,
    createdAt: new Date('2025-12-08T12:00:00Z').toISOString()
  },

  // Video Content
  {
    id: 'video-001',
    type: 'video',
    content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    metadata: {
      title: 'The Power of Positive Thinking',
      duration: '4:23'
    },
    thoughtCount: 32,
    createdAt: new Date('2025-12-09T05:00:00Z').toISOString()
  },
  {
    id: 'video-002',
    type: 'video',
    content: 'https://www.youtube.com/embed/9bZkp7q19f0',
    metadata: {
      title: 'What is Node.js? A Beginner\'s Guide',
      duration: '8:15'
    },
    thoughtCount: 28,
    createdAt: new Date('2025-12-09T03:30:00Z').toISOString()
  },
  {
    id: 'video-003',
    type: 'video',
    content: 'https://www.youtube.com/embed/8pTEmbeENF4',
    metadata: {
      title: 'How the Internet Works',
      duration: '12:35'
    },
    thoughtCount: 22,
    createdAt: new Date('2025-12-08T20:00:00Z').toISOString()
  },
  {
    id: 'video-004',
    type: 'video',
    content: 'https://www.youtube.com/embed/B2iAodr0fOo',
    metadata: {
      title: 'The Science of Productivity',
      duration: '10:47'
    },
    thoughtCount: 19,
    createdAt: new Date('2025-12-08T10:30:00Z').toISOString()
  },

  // Additional mixed content
  {
    id: 'text-006',
    type: 'text',
    content: 'Innovation distinguishes between a leader and a follower. True leaders create the future rather than waiting for it to arrive.',
    thoughtCount: 11,
    createdAt: new Date('2025-12-08T08:00:00Z').toISOString()
  },
  {
    id: 'image-006',
    type: 'image',
    content: 'https://picsum.photos/800/600?random=6',
    caption: 'A workspace designed for creativity - where great ideas come to life',
    thoughtCount: 13,
    createdAt: new Date('2025-12-08T06:15:00Z').toISOString()
  },
  {
    id: 'text-007',
    type: 'text',
    content: 'The best time to plant a tree was 20 years ago. The second best time is now. Start today, not tomorrow.',
    thoughtCount: 9,
    createdAt: new Date('2025-12-08T04:00:00Z').toISOString()
  },
  {
    id: 'video-005',
    type: 'video',
    content: 'https://www.youtube.com/embed/b1kbLwvqugk',
    metadata: {
      title: 'Understanding Cloud Computing',
      duration: '15:20'
    },
    thoughtCount: 17,
    createdAt: new Date('2025-12-08T02:30:00Z').toISOString()
  },
  {
    id: 'image-007',
    type: 'image',
    content: 'https://picsum.photos/800/600?random=7',
    caption: 'Urban jungle meets natural beauty - finding balance in a busy world',
    thoughtCount: 21,
    createdAt: new Date('2025-12-08T00:00:00Z').toISOString()
  },
  {
    id: 'text-008',
    type: 'text',
    content: 'Creativity is intelligence having fun. The intersection of knowledge and imagination is where magic happens.',
    thoughtCount: 7,
    createdAt: new Date('2025-12-07T22:00:00Z').toISOString()
  }
];

// Seed function
async function seedDatabase(exitOnComplete = true) {
  try {
    console.log('Starting database seeding...');
    console.log(`Database: ${db.getConnectionInfo()}`);

    // Initialize database (create tables if needed)
    await db.initialize();

    // Clear existing data
    console.log('Clearing existing data...');
    await db.clear();

    // Insert mock content
    console.log(`Inserting ${mockContent.length} content items...`);
    for (const item of mockContent) {
      await db.put(item);
      if (exitOnComplete) {
        console.log(`✓ Added ${item.type} content: ${item.id}`);
      }
    }

    console.log(`\n✅ Successfully seeded ${mockContent.length} items!`);
    if (exitOnComplete) {
      console.log('\nContent breakdown:');
      console.log(`  - Text: ${mockContent.filter(i => i.type === 'text').length}`);
      console.log(`  - Images: ${mockContent.filter(i => i.type === 'image').length}`);
      console.log(`  - Videos: ${mockContent.filter(i => i.type === 'video').length}`);
    }

    if (exitOnComplete) {
      process.exit(0);
    }
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    if (exitOnComplete) {
      process.exit(1);
    }
    throw error;
  }
}

// Run seeding if called directly
if (require.main === module) {
  seedDatabase(true);
}

module.exports = { mockContent, seedDatabase };
