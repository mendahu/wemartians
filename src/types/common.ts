import { SanityImageAssetDocument } from "@sanity/client";

export type Episode = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  publishDate: string;
  id: string;
  duration: number;
};

export type Guest = {
  name: string;
  affiliation: string;
  social: {
    platform: string;
    label: string;
    url: string;
  };
  bio: string;
  image: SanityImageAssetDocument;
};

export type Stream = {
  title: string;
  slug: string;
  date: string;
  url: string;
  cta: {
    short: string;
    long: string;
  };
  socialImages: {
    square: SanityImageAssetDocument;
    twitter: SanityImageAssetDocument;
    facebook: SanityImageAssetDocument;
  };
  hosts?: Guest[];
  guests?: Guest[];
};
