<div align="center">
  <a href="https://www.migrationstoriesproject.net/">
    <img src="https://user-images.githubusercontent.com/76679207/208481156-17593cfd-0b19-4641-868c-c99eab65a3e4.jpg" width="600" alt="logo">
  </a>
  </br>
  <b>click image to enter</b>
</div>

## Preview

<div align="center">
  <h3>main flow</h3>
  <img src="https://user-images.githubusercontent.com/76679207/208481524-15d0e6e9-84e8-4bfd-9479-890213ac2bd4.gif" width="800" alt="mainFlow">
  <h3>sub pages</h3>
  <img src="https://user-images.githubusercontent.com/76679207/208482748-8b1e4e1f-fce1-4bab-bad0-724feff68b9c.gif" width="800" alt="subPages">
</div>

## About Project

The Migration Stories Project was created so that the audience can listen to the stories of migrants from various backgrounds through an exhibition that spreads them out in one space in the form of a web page that the audience clicks on and proceeds with. The stories of people living in the strange space of Korea over thousands of kilometers reveal memories of their hometowns, memories of present-day Korea, industrial sites in Korea, and various landscapes and objects. I wanted to draw these images on the screen and zoom in to look into their memories. We want to make time to focus and listen to the distant but close stories that we haven't heard but have always been around us.

‘이주 이야기 프로젝트’는 관객이 직접 클릭하며 진행시켜가는 웹페이지의 형태와 이를 한 공간에 펼쳐놓는 전시의 형태를 통해 다양한 층위에서 이주민들의 이야기를 들어볼 수 있도록 제작했습니다. 수천 킬로미터의 먼 거리를 넘어 한국이라는 낯선 공간에서 살아가는 사람들의 이야기들에는 고향에서의 기억과 현재 한국에서의 기억, 그리고 이들의 일터인 한국의 산업 현장의 모습과 여러 풍경과 사물들이 등장합니다. 이 이미지들을 화면 속에 그려보고 확대해보며 그 기억을 들여다보고자 했습니다. 듣지 못했을 뿐 항상 우리 주변에 존재했던, 멀지만 가까운 이야기에 집중하고 귀 기울일 수 있는 시간을 만들어보고자 합니다. (김양우)

> By Kim YangWoo

## Using

react, framer-motion, three.js, gsap, gltf-pipeline, gltfjsx

## Focused on

<div align="center">
  <img src="https://user-images.githubusercontent.com/76679207/208484727-aaea1fbe-dc73-4a0b-b399-8a51fec1a083.PNG" width="600" alt="bigFiles">
</div>

how to upload these huge obj files with minimum loading

<details>
  <summary>details</summary>
  
  1. [obj → gltf convert, gltf-pipeline]("https://github.com/CesiumGS/gltf-pipeline")
  2. [gltf → jsx]("https://github.com/pmndrs/gltfjsx")
  3. [react suspense]("https://17.reactjs.org/docs/concurrent-mode-suspense.html)

```js
const Akinain = React.lazy(() => import("../gltf/Akinain"));
...
<Suspense fallback={<p>loading...</p>}>
  <Akinain />
</ Suspense>
```

</details>

## Exhibition View

<div align="center">
  <img src="https://user-images.githubusercontent.com/76679207/208488390-f51e8b68-d8da-48a4-8156-82ded85d27f1.gif" width="600" alt="exhibition1">
  <img src="https://user-images.githubusercontent.com/76679207/208488812-1e6bae4e-f4c3-4488-bce7-a2e970f560b2.jpg" width="600" alt="exhibition2">
  <img src="https://user-images.githubusercontent.com/76679207/208488887-d53157da-1397-4dc9-886a-ace97bd8d689.jpg" width="600" alt="exhibition3">
</div>

---

## Notes

<details>
  <summary>ToDo</summary>
- [x] 12월 9일까지 홈페이지 완성

- [x] 맥미니 해상도에 맞추기, 3840\*2160
- [x] 전시장 설치날, 12일-13일, 9-18시, 화성문화원, 향남읍행정복지센터
- [x] 데이터를 담을 USB 7개(32GB), 여기에 7개로 파일분리

  - [x] 홈페이지 1개 전체 파일 : 맥북 15인치 (랩탑)에 설치 예정
  - [x] 홈페이지의 3D 이미지 장면부터 각각의 부분을 나누어 설치할 파일 6개
    - 차미카라, 팅, 아카나인, 선예나, 디팍, 캠라 님 총 6분의 것만 3D이미지
  - [x] 영상파일 원본

- [x] ABOUT
  - [x] [포스터 수정본]("https://drive.google.com/drive/folders/1ldaTcgmThndrPhr9FW0l7Im19GJ0AKkc")
  - [x] [타국어 글]("https://drive.google.com/file/d/1g0vj4M1D_j8pmnS72rWcvHoDDyZCylc1/view?usp=share_link")
- [x] CREDIT
  - [x] 크레딧에 दीपक बञ्जारा Dipak Banjara 디팍 반자라 추가
  - [x] 후원 : 한국문화예술위원회 (2022년 다원예술 창작지원사업)
  - [x] [로고링크]("https://drive.google.com/drive/folders/1lw-0OVLnyh05L3OkOn1i12Swr3gbD79_")
- [x] WANDER
  - [x] [팝업 글 수정]("https://docs.google.com/document/d/1Yb1yMnYyirXxnYH-4ZpCNjq4xw2zD0eWu3jyiYmxxwA/edit")
  - [x] css 해야함
- [x] STORY
  - [x] [3D 변환]("https://drive.google.com/drive/folders/1wZ5mVGdlBqWAu05HhPiPpsjVnYYyfM9Q")
  - [x] [영상 링크]("https://docs.google.com/document/d/1Yb1yMnYyirXxnYH-4ZpCNjq4xw2zD0eWu3jyiYmxxwA/edit")
  - [x] 스크롤을 올려서 진행해주세요
  - [x] 이야기를 재생하시겠습니까? br (헤드폰이 있다면 헤드폰을 착용하세요)
  </details>
