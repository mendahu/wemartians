import Head from "next/head";

export type TwitterSummaryCardLarge = {
  type: "summary_large_image";
  url: string;
};

export type TwitterPlayerCard = {
  type: "player";
  url: string;
  audioUrl: string;
  width: string;
  height: string;
};

export type CommonHeadProps = {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: {
    url: string;
    height: string;
    width: string;
    contentType: string;
  };
  twitterCard?: TwitterPlayerCard | TwitterSummaryCardLarge;
};

export default function CommonHead({
  title = "WeMartians Podcast",
  description = "A biweekly podcast about the exploration and science of the Moon, Mars and beyond.",
  url = "https://www.wemartians.com",
  ogImage = {
    url: "https://www.wemartians.com/facebook_card_image_wemartians.png",
    height: "628",
    width: "1200",
    contentType: "image/png",
  },
  twitterCard = {
    type: "summary_large_image",
    url: "https://www.wemartians.com/twitter_card_image_wemartians.png",
  },
}: CommonHeadProps) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
        key="apple-favicon"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
        key="32_favicon"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
        key="16_favicon"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" key="manifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#2e2927"
        key="safari-mask"
      />
      <meta name="msapplication-TileColor" content="#2e2927" key="ms_colour" />
      <meta name="theme-color" content="#2e2927" key="theme-colour" />

      <meta
        content="text/html; charset=UTF-8"
        httpEquiv="Content-Type"
        key="content-type"
      />
      <meta name="robots" content="index, follow" key="robots" />

      <link rel="preconnect" href="https://fonts.gstatic.com" key="fonts-url" />
      <link
        href={
          "https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto&display=swap"
        }
        rel="stylesheet"
        key="font-url"
      />

      <title key="title">{title}</title>
      <meta name="twitter:title" content={title} key="tw_title" />
      <meta property="og:title" content={title} key="og_title" />

      <meta name="description" content={description} key="description"></meta>
      <meta name="twitter:description" content={description} key="tw_desc" />
      <meta property="og:description" content={description} key="og_desc" />

      <meta
        name="twitter:card"
        content={twitterCard.type}
        key="twitter-card-type"
      />
      <meta
        name="twitter:site"
        content="@we_martians"
        key="site_twitter_handle"
      />
      <meta
        name="twitter:creator"
        content="@JakeOnOrbit"
        key="author_twitter_handle"
      />

      <meta property="og:url" content={url} key="og_url" />
      <meta property="og:type" content="website" key="og_type" />

      <meta property="og:image" content={ogImage.url} key="og_image" />
      <meta property="og:image:width" content={ogImage.width} key="og_width" />
      <meta
        property="og:image:height"
        content={ogImage.height}
        key="og_height"
      />
      <meta
        property="og:image:type"
        content={ogImage.contentType}
        key="og_content_type"
      />
      <meta
        name="twitter:image"
        content={twitterCard.url}
        key="twitter_image_url"
      />

      {twitterCard.type === "player" && (
        <>
          <meta
            name="twitter:player"
            content={twitterCard.audioUrl}
            key="twitter_player_audio_url"
          />
          <meta
            name="twitter:player:width"
            content={twitterCard.width}
            key="twitter_player_width"
          />
          <meta
            name="twitter:player:height"
            content={twitterCard.height}
            key="twitter_player_height"
          />
        </>
      )}
    </Head>
  );
}
