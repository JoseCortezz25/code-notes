import JSZip from "jszip";
import { saveAs } from 'file-saver';

export interface CodeTemplate {
  html: string
  css: string
  js: string
}

export const downloadCode = (code: CodeTemplate) => {
  const zip = new JSZip();
  zip.file('index.html', code.html);
  zip.file('script.js', code.js);
  zip.file('style.css', code.css);

  zip.generateAsync({ type: 'blob' })
    .then((content: Blob) => {
      saveAs(content, 'codenotes.zip');
    });
}