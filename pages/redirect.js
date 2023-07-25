import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Add your Bitly client ID and secret here
    const clientID = 5b1121217f398a80af7f5957b8422cd52de2bb26;
    const clientSecret = f1ca3010649ca6f5d4ae38adb74d1295b85b36da;

    // Get the query parameter "code" from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');

    // Function to make a POST request to Bitly API
    const callBitlyAPI = async () => {
      const accessTokenURL = 'https://api-ssl.bitly.com/oauth/access_token';
      const accessTokenData = {
        client_id: clientID,
        client_secret: clientSecret,
        code: authCode,
      };

      try {
        const response = await fetch(accessTokenURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(accessTokenData),
        });

        const data = await response.json();
        const accessToken = data.access_token;

        // Save the access token to use in your extension
        // You can store it in localStorage or cookies as needed
        // For this example, we'll just log it for demonstration purposes
        console.log('Access Token:', accessToken);

        // Replace 'YOUR_EXTENSION_URL' with the actual URL of your Etsy URL Shortener Extension
        window.location.replace('YOUR_EXTENSION_URL');
      } catch (error) {
        console.error('Error:', error);
        // Redirect the user back to your extension with an error message
        window.location.replace('YOUR_EXTENSION_URL?error=1');
      }
    };

    if (authCode) {
      // Call the Bitly API to exchange the authorization code for an access token
      callBitlyAPI();
    } else {
      // Redirect the user back to your extension with an error message if no code is provided
      window.location.replace('YOUR_EXTENSION_URL?error=1');
    }
  }, []);

  return null;
};

export default RedirectPage;
module.exports = {
  async redirects() {
    return [
      {
        source: '/redirect',
        destination: '/redirect',
        permanent: false,
      },
    ];
  },
};
