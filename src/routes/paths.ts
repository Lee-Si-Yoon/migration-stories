const shared = (base: string) => ({
  credit: `${base}/credit`,
  about: `${base}/about`,
});

const paths23 = (base: string) => ({
  ...shared(base),
  wander: `${base}/wander`,
  video: `${base}/video/:name`,
  program: `${base}/program`,
});

const paths22 = (base: string) => ({
  ...shared(base),
  wander: `${base}/wander`,
  story: `${base}/story`,
  video: `${base}/video`,
});

const Paths = {
  default: "/",
  "22": { ...paths22("/22") },
  "23": { ...paths23("/23") },
};

export default Paths;
