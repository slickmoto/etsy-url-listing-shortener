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
        <h1>Welcome to the Etsy URL Shortener Extension</h1>
        <p>
          This landing page provides information about the Etsy URL Shortener Extension.
          Customize this page as needed for your extension's details and features.
        </p>
        <p>Download the extension from the Firefox Add-ons store.</p>
      </main>
    </div>
  );
}
