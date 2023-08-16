// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//     return (
//         <Html>
//             <Head>
//                 {/* <script src="/path/to/script/here.js" /> */}
    //             <script
    //                 strategy="beforeInteractive"
    //                 src="https://static.landbot.io/landbot-3/landbot-3.0.0.js">
    //                 window.addEventListener('mouseover', initLandbot, {once: true });
    //                 window.addEventListener('touchstart', initLandbot, {once: true });
    //                 var myLandbot;
    //                 function initLandbot() {
    //                     if (!myLandbot) {
    //                         var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
    //                 s.addEventListener('load', function () {
    //                         var myLandbot = new Landbot.Livechat({
    //                     configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1692134-AEFN8V4TXB6PYTHJ/index.json',
    //                         });
    //                         });
    //                 s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    //                 var x = document.getElementsByTagName('script')[0];
    //                 x.parentNode.insertBefore(s, x);
    // }
    //             </script>
//             </Head>
//             <body>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//     )
// }

// import { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/script'
 
// export default function Document() {
//   return (
//     <Html>
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//         <script
//                     src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"
//                     strategy="beforeInteractive">
//                     window.addEventListener('mouseover', initLandbot, {once: true });
//                     window.addEventListener('touchstart', initLandbot, {once: true });
//                     var myLandbot;
//                     function initLandbot() {
//                         if (!myLandbot) {
//                             var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
//                     s.addEventListener('load', function () {
//                             var myLandbot = new Landbot.Livechat({
//                         configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1692134-AEFN8V4TXB6PYTHJ/index.json',
//                             });
//                             });
//                     s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
//                     var x = document.getElementsByTagName('script')[0];
//                     x.parentNode.insertBefore(s, x);
//                         }
//                 </script>
//       </body>
//     </Html>
//   )
// }