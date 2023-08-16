export const metadata = {
  title: 'Tutor Help Me - Personalized Online Tutoring',
  description: 'Get expert 1:1 tuition, homework help, and exam preparation for Maths, English, Science, and 11 Plus.',
}

import Features from '@/components/features'
import Link from "next/link";
import Head from 'next/head';


export default function Home() {
  return (
    <>
      {/* <div>
        <Head>
          <title>My page title</title>
          <script src="https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js"></script>
        <script>
          const myLandbotLivechat = new LandbotLivechat({
            index: 'https://landbot.io/u/example/index.html',
          open: false,
          });
        </script>
        </Head>
        <p>Hello world!</p> */}


        {/* <script>
window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
var myLandbot;
function initLandbot() {
  if (!myLandbot) {
    var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
    s.addEventListener('load', function() {
      var myLandbot = new Landbot.Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1692134-AEFN8V4TXB6PYTHJ/index.json',
      });
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}
</script> */}

        {/* <script
                    src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"
                  >
                    window.addEventListener('mouseover', initLandbot, {once: true });
                    window.addEventListener('touchstart', initLandbot, {once: true });
                    var myLandbot;
                    function initLandbot() {
                        if (!myLandbot) {
                            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
                    s.addEventListener('load', function () {
                            var myLandbot = new Landbot.Livechat({
                        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1692134-AEFN8V4TXB6PYTHJ/index.json',
                            });
                            });
                    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                        }
                </script> */}
      {/* </div> */}
      <Features />
    </>

  )
}

// import { Helmet } from "/next/react/re";

// const AnalyticsComponent = () => {
//   return (
//     <div>
//       <Helmet>
//         <script src="/example/script.js" />
//       </Helmet>
//     </div>
//   );
// };

// export default AnalyticsComponent;

