// api/get-access-token.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { code, code_verifier } = req.body;

      const response = await fetch(`https://quickstart-08bb39ab.myshopify.com/67842605294/auth/oauth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic <credentials>'
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: 'shp_b0517be2-8fb6-433a-af4d-316f2a9a2093',
          redirect_uri: 'https://quickstart-08bb39ab.myshopify.com/callback',
          code,
          code_verifier
        })
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
