const defaultImgUrl =
  'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

const myTools = [
  // [{ header: [1, 2, 3, 4, 5, 6, false] }], // 標題
  // [{ header: 1 }, { header: 2 }], // 標題1、標題2
  // [{ color: [] }, { background: [] }], // 顏色
  // [{ font: [] }], // 字體
  // [{ 'direction': 'rtl' }], // 文字方向
  // [{ 'align': [] }], // 文字方向
  // [{ 'script': 'sub' }, { 'script': 'super' }], // 上標、下標
  // [{ indent: '-1' }, { indent: '+1' }], // 縮排
  ['bold', 'italic', 'underline', 'strike'], // 粗體、斜體、底線和刪節線
  ['blockquote', 'code-block'], // 區塊、程式區塊
  [{ 'list': 'ordered' }, { 'list': 'bullet' }], // 清單
  [{ size: ['small', false, 'large', 'huge'] }], // 文字大小
  ['link'],
  ['image'],
  ['clean'] // 清除文字格式
];

const options = {
  debug: 'info',
  modules: {
    imageResize: {
      displaySize: true, // 縮放大小
    },
    toolbar: { // 工具列列表
      container: myTools,
      handlers: {
        image: imageHandler,
      },
    },
  },
  placeholder: 'Compose an epic...',
  theme: 'snow', // 模板
};

const editor = new Quill("#editor", options);

function imageHandler() {
  const input = document.createElement("input");
  input.type = "file";
  input.click();

  input.addEventListener("change", (e) => {
    const range = this.quill.getSelection(); // 檢索用戶的選擇範圍
    const { value } = e.target;
    if (value) {
      this.quill.insertEmbed( // 向編輯器中嵌入内容：insertEmbed(index: Number, type: String, value: any, source: String = 'api')
        range.index,
        "image",
        defaultImgUrl,
        Quill.sources.USER
      );
    }
  });
}