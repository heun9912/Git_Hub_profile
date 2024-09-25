export const data = {
  props: {
    title: "React Props",
    content: "React props는 컴포넌트에 데이터를 전달하는 방법입니다.",
    backgroundColor: "#ffddc1",
    code: `function Card({ title, content, backgroundColor, textColor, img }) {}`,
  },
  component: {
    title: "Reusable Component",
    content: "Card 컴포넌트를 재사용하여 다양한 데이터를 보여줄 수 있습니다.",
    backgroundColor: "#c1d7ff",
    code: `function TabButton({ children, onSelect }) {}`,
  },
  styling: {
    title: "Dynamic Styling",
    content: "props를 이용해 동적으로 스타일을 변경할 수 있습니다.",
    backgroundColor: "#d1ffc1",
    code: `function Card({ title, content, backgroundColor, textColor, img }) {}`,
  },
};
