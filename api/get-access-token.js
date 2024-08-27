// api/get-access-token.js

const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, code_verifier } = req.body;
  const clientId = 'shp_b0517be2-8fb6-433a-af4d-316f2a9a2093';
  const redirectUri = 'https://quickstart-08bb39ab.myshopify.com/callback';
  const shop = 'quickstart-08bb39ab.myshopify.com'; // e.g., "quickstart-08bb39ab.myshopify.com"

  const body = new URLSearchParams();
  body.append('grant_type', 'authorization_code');
  body.append('client_id', clientId);
  body.append('redirect_uri', redirectUri);
  body.append('code', code);
  body.append('code_verifier', code_verifier);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    // Confidential Client: add client secret if needed
    // 'Authorization': 'Basic <base64_encoded_credentials>'
  };

  try {
    const response = await fetch(`https://${shop}/67842605294/auth/oauth/token`, {
      method: 'POST',
      headers: headers,
      body: body.toString()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
