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
          This landing page provides information about the Etsy URL Shortener Firefox Extension.
        </p>
        <p>Download the extension from the Firefox Add-ons store.</p>

        <section>
          <h2>About the Extension</h2>
          <p>
            The Etsy URL Shortener Extension is a powerful and convenient tool designed exclusively
            for Etsy sellers like you. Simplify and streamline your Etsy listing sharing process
            with this user-friendly browser extension, specially crafted to enhance your
            productivity and boost your online presence.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>Instant URL Shortening: With a single click, shorten your Etsy listing URLs and create easily shareable links.</li>
            <li>Context Menu Integration: Seamlessly shorten Etsy URLs directly from your browser's right-click menu.</li>
            <li>Clipboard Copying: Copy shortened URLs to your clipboard with a simple click.</li>
            <li>History Tracking: Keep track of all your shortened Etsy URLs in a convenient history section.</li>
            <li>Dark Mode Support: Enjoy a modern and clean design with the option to enable Dark Mode.</li>
          </ul>
          <p>
            Experience a seamless and efficient Etsy selling journey with the Etsy URL Shortener Extension.
            Empower your promotional efforts, improve your Etsy listing's visibility, and reach a wider audience effortlessly.
          </p>
          <p>
            Download the extension now from the Firefox Add-ons store and elevate your Etsy selling experience to new heights.
            Get started today and witness the impact of streamlined URL sharing on your online business success.
          </p>
        </section>
      </main>
      <style jsx>{`
        body {
          font-family: 'Courier New', monospace;
          background-color: #121212;
          color: #f58020;
          margin: 0;
          padding: 0;
        }

        main {
          text-align: center;
          margin: 20px;
        }

        h1 {
          color: #f58020;
        }

        h2 {
          color: #f58020;
        }

        h3 {
          color: #f58020;
        }

        ul {
          list-style-type: disc;
          padding-left: 40px;
        }

        li {
          margin-bottom: 8px;
        }

        p {
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
