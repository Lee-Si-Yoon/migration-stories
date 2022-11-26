// REACT
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
// STYLING
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

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
`;

export default function Video() {
  const [showVideo, setShowvideo] = useState(false);
  // let location = useLocation();
  return (
    <Layout>
      <AnimatePresence>
        {showVideo ? (
          <VideoPlayerContainer>
            <ReactPlayer
              playing
              volume={1}
              width={"100%"}
              height={"100%"}
              controls={false}
              url={`https://vimeo.com/764912398`}
            />
          </VideoPlayerContainer>
        ) : (
          <HeadphoneContainer
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <h1 style={{ color: "rgb(255,255,255)" }}>헤드폰을 착용하셨나요?</h1>
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
