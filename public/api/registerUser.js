import { db } from '../firebase';  // Firebase bağlantısını import ettik

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email } = req.body;

    try {
      // Veriyi Firestore'a kaydediyoruz
      await db.collection('users').add({
        username,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      res.status(200).json({ message: 'User added successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving user data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
