import styled from "styled-components";
import { motion } from "framer-motion";
// import { useLayoutEffect, useRef, useState } from "react";
import WanderOBJ from "../components/wanderOBJ";

const Layout = styled(motion.div)`
  color: ${(props) => props.theme.colors.text};
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  /* border: 2px solid green; */
  position: relative;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;
const ObjContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid red; */
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  background-size: 100%;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 25%,
    rgba(255, 255, 255, 1) 95%
  );
`;

const stories = [
  {
    name: "sajana",
    src: "/imgs/wander/sajana.png",
    text:
      "हामी छुट्टिएको 9 वर्ष भयो।" +
      "\n" +
      "मैले उनीहरूलाई कहिलेकाहीँ मात्र देख्न सक्छु।" +
      "\n" +
      "त्यसैले मलाई यो केही वर्षका लागि उनीहरूसँग रहनु धेरै राम्रो हुने छ जस्तो लाग्छ।",
    translation:
      "저는 지금까지 9년동안 헤어져 지내고 있고" +
      "\n" +
      "아주 가끔만 만날 수 있잖아요" +
      "\n" +
      "몇 년 동안이라도 같이 있었으면 좋겠다라고 생각해요",
  },
  {
    name: "chamikara",
    src: "/imgs/wander/chamikara.png",
    text:
      "ඒ විදිහට මමත් උදව්වක් අවශ්‍ය විදේශ මිතුරන්ට නැතිනම් අලුත් විදේශිකයන්ට උදව් ලබා දෙනවා" +
      "\n" +
      "උදව් ඔනි අයට උදව් කරන හිතින් ඒ වෙනුවෙන් මම මහන්සියෙන් සුදානම් වෙනවා",
    translation:
      "많은 도움을 다시 부족한 외국인 친구들한테" +
      "\n" +
      "돌려주고 싶은 마음으로 열심히 준비하고 있어요",
  },
  {
    name: "kemra",
    src: "/imgs/wander/kemra.png",
    text: "ខ្ញុំរីករាយនឹងទិដ្ឋភាពនោះណាស់។",
    translation: "풍경 보는 거 좋아해요",
  },
  {
    name: "sunyena",
    src: "/imgs/wander/sunyena.png",
    text:
      "Nếu tôi tìm cách, nếu tôi không bỏ cuộc mà tìm cách giải bài tập ấy," +
      "\n" +
      "thì tôi sẽ học được nhiều điều. Vậy nên tôi vẫn đang không ngừng nỗ lực",
    translation:
      "방법을 찾아서 포기하지 않고 방법을 찾아서 숙제를 풀고" +
      "\n" +
      "나한테도 공부하는 게 되는 거라고 생각해가지고 그래서 계속 노력하고 노력하고 있어요",
  },
  {
    name: "ting",
    src: "/imgs/wander/ting.png",
    text:
      "Nhưng tôi cũng cảm thấy may vì đã từng mắc lỗi" +
      "\n" +
      "Vì nếu không mắc lỗi thì tôi không thể giỏi lên được Vì không có kinh nghiệm mà",
    translation:
      "근데 실수가 있으면 다행이에요" +
      "\n" +
      "왜냐면 실수가 없으면 진짜 못해요 경험이 없잖아요",
  },
  {
    name: "akanain",
    src: "/imgs/wander/akanain.png",
    text:
      "သူတို့ပြောင်းလဲပေးနိုင်မယ်ဆို ရင်၊" +
      "\n" +
      "အဲဒါဆို ကျွန်တော်တို့ ပျော်ရွှင်ကြရမယ်လို့ ကျွန်တော် ထင်ပါတယ်။",
    translation: "그렇게 할 수 있으면 우리가 행복해요",
  },
  {
    name: "dpiak",
    src: "/imgs/wander/dpiak.png",
    text:
      "मानिसले गर्न नसक्ने कुनै पनि कुरा छैन। यदि उनीहरूले आफ्ना विचारहरू अनुसरण गरे भने," +
      "\n" +
      " तिनीहरू जहाँ पनि जान सक्छन्।",
    translation:
      "사람은 할 수 없는 거는 아무거나 없어요 생각 따라서 가면 다 갈 수 있어요",
  },
];

export default function Wander() {
  function onClickFromOBJ(func) {
    func();
  }
  return (
    <Layout>
      <Background src="/imgs/wander/wanderBackground.png" alt="background" />
      <ObjContainer>
        {stories.map((s) => (
          <WanderOBJ
            key={s.name}
            imgsrc={s.src}
            name={s.name}
            text={s.text}
            func={onClickFromOBJ}
          />
        ))}
      </ObjContainer>
    </Layout>
  );
}
