const shared = (base: string) => ({
  credit: `${base}/credit`,
  about: `${base}/about`,
});

const paths23 = (base: string) => ({
  ...shared(base),
  wander: `${base}/wander`,
  video: `${base}/video/:name`,
  program: {
    default: `${base}/program`,
    pattern: `${base}/program/:programName`,
  },
});

const paths22 = (base: string) => ({
  ...shared(base),
  wander: `${base}/wander`,
  story: `${base}/story/:name`,
  video: `${base}/video/:name`,
});

const Paths = {
  default: "/",
  "22": { ...paths22("/22") },
  "23": { ...paths23("/23") },
};

export default Paths;
