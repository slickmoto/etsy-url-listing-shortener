// pages/index.js
import Head from 'next/head';

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Etsy URL Shortener Extension</title>
        <meta name="description" content="Etsy URL Shortener Extension Landing Page" />
      </Head>
      <main>
        <style jsx>{`
          body {
            background-color: #121212;
            color: #f58020;
            font-family: 'Courier New', monospace;
            margin: 0;
            padding: 0;
          }

          .container {
            text-align: center;
            padding: 20px;
          }

          h1 {
            font-size: 24px;
            margin-bottom: 20px;
          }

          p {
            font-size: 16px;
            margin-bottom: 10px;
          }
        `}</style>
        <div className="container">
          <h1>Welcome to the Etsy URL Shortener Extension</h1>
          <p>
            This landing page provides information about the Etsy URL Shortener Firefox Extension.
          </p>
          <p>Download the extension from the Firefox Add-ons store.</p>
        </div>
      </main>
    </div>
  );
}
