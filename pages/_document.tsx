import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <style>{`
          .goog-te-banner-frame, .skiptranslate iframe { display: none !important; }
          body { top: 0 !important; }
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'ko',
                includedLanguages: 'en',
                autoDisplay: false
              }, 'google_translate_element');
            }`,
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
      </Head>
      <body className="antialiased">
        <div id="google_translate_element" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
