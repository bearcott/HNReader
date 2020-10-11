import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export const intDisplay = (num: number) => {
  return !num ? "--" : num;
};

export function decodeHtml(html) {
  if (!document) return html;
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  const val = txt.value;
  txt.remove();
  return val;
}

TimeAgo.addLocale(en);
export const timeAgo = new TimeAgo("en-US");
