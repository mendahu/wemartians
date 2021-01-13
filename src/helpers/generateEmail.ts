export const generateEmail = (handle: string, domain: string): string => {
  return handle + "@" + domain;
};
