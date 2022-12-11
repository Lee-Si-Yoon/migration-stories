// REACT
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { isMobile } from "react-device-detect";
// STYLING
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Layout = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  /* border: 3px solid pink; */
`;
const HeadphoneContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 999;
  /* border: 3px solid green; */
`;

const HeadphoneButton = styled(motion.button)`
  width: 4rem;
  height: 2.5rem;
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid white;
  border-radius: 1rem;
  cursor: pointer;
`;

const VideoPlayerContainer = styled(motion.div)`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  -webkit-touch-callout: none;
  user-select: none;
`;

const stories = [
  { name: "sajana", src: "https://vimeo.com/752516468" },
  {
    name: "chamikara",
    src: "https://vimeo.com/764912398",
  },
  { name: "kemra", src: "https://vimeo.com/764825589" },
  { name: "sunyena", src: "https://vimeo.com/764826134" },
  {
    name: "ting",
    src: "https://vimeo.com/763707073",
  },
  { name: "akanain", src: "https://vimeo.com/763705479" },
  {
    name: "dpiak",
    src: "https://vimeo.com/770192478",
  },
];

export default function Video() {
  const [showVideo, setShowvideo] = useState(false);
  const [name, setName] = useState("");
  const [playtarget, setPlayTarget] = useState("");

  let location = useLocation();

  useEffect(() => {
    setName(location.pathname.split("/")[2]);
  }, [location.pathname]);

  useEffect(() => {
    stories.forEach((s) => {
      if (s.name === name) {
        setPlayTarget(s.src);
      } else return;
    });
  }, [name]);

  return (
    <Layout>
      <AnimatePresence>
        {showVideo ? (
          <VideoPlayerContainer>
            {isMobile ? (
              <ReactPlayer
                volume={1}
                width={"100%"}
                height={"100%"}
                controls={true}
                // light={true}
                url={`${playtarget}`}
                fallback={<p>Loading...</p>}
                onError={(err) => {
                  console.log(err);
                }}
              />
            ) : (
              <ReactPlayer
                playing
                volume={1}
                width={"100%"}
                height={"100%"}
                // controls={true}
                // light={true}
                url={`${playtarget}`}
                fallback={<p>Loading...</p>}
                onError={(err) => {
                  console.log(err);
                }}
              />
            )}
          </VideoPlayerContainer>
        ) : (
          <HeadphoneContainer
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            {/* 이야기를 재생하시겠습니까? br (헤드폰이 있다면 헤드폰을 착용하세요) */}
            <h1 style={{ color: "rgb(255,255,255)", fontSize: "1.2rem" }}>
              이야기를 재생하시겠습니까?
            </h1>
            <h4
              style={{
                color: "rgba(255,255,255)",
                fontSize: "1rem",
                marginTop: "0.5rem",
                opacity: "0.8",
              }}
            >
              (헤드폰이 있다면 헤드폰을 착용하세요)
            </h4>
            <HeadphoneButton
              whileHover={{
                backgroundColor: "rgb(255,255,255)",
                color: "rgb(0,0,0)",
              }}
              onClick={() => setShowvideo(true)}
            >
              네
            </HeadphoneButton>
          </HeadphoneContainer>
        )}
      </AnimatePresence>
    </Layout>
  );
}
