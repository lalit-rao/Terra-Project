import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db('eco-swap');

  if (req.method === 'POST') {
    try {
      const { name, phoneNumber, email, itemName, description, price, imageUrl } = req.body;

      const newItem = {
        name,
        phoneNumber,
        email,
        itemName,
        description,
        price,
        imageUrl,
        createdAt: new Date()
      };

      await db.collection('items').insertOne(newItem);

      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).json({ error: 'Error adding item' });
    }
  } else if (req.method === 'GET') {
    try {
      const items = await db.collection('items').find({}).toArray();
      res.status(200).json(items);
    } catch (e) {
      res.status(500).json({ error: 'Error fetching items' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
