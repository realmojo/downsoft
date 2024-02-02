import "ant-design-vue/dist/reset.css";
import Antd from "ant-design-vue";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd);
});

// import {
//   Button,
//   Card,
//   Divider,
//   Input,
//   Layout,
//   List,
//   ListItem,
//   Radio,
//   RadioGroup,
//   Spin,
//   Row,
//   Col,
//   Popover,
//   Textarea,
//   Tag,
//   Select,
//   Steps,
//   Step,
//   Space,
//   Progress,
//   Carousel,
//   RadioButton,
// } from "ant-design-vue";
// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp
//     .use(Button)
//     .use(Card)
//     .use(Divider)
//     .use(Input)
//     .use(Layout)
//     .use(List)
//     .use(Radio)
//     .use(Spin)
//     .use(Row)
//     .use(Col)
//     .use(Popover)
//     .use(Tag)
//     .use(Select)
//     .use(Steps)
//     .use(Space)
//     .use(Progress)
//     .use(Carousel);
// });
