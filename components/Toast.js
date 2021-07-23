import Head from "next/head";

export const ToastComponent = ({ variant, message }) => {
  return (
    <Head>
      <title>{title} - GhostSlayer</title>
      <meta name="title" content={`${title} - GhostSlayer`}/>
      <meta name="description" content={description}/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://ghostslayer.tk/"/>
      <meta property="og:title" content={`${title} - GhostSlayer`}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content=""/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://ghostslayer.tk/"/>
      <meta property="twitter:title" content={`${title} - GhostSlayer`}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content=""/>
    </Head>
  );
}
