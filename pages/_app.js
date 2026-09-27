export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
          font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #FAFAF8;
          color: #0F0F0F;
          -webkit-font-smoothing: antialiased;
          line-height: 1.5;
        }
        input, select, textarea, button { font-family: inherit; }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #7C3AED !important;
          box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
