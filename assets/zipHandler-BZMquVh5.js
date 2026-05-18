import{ab as a}from"./index-D56I7RF9.js";async function s(e){const t=new a,n={name:e.name,version:e.version,author:e.author,description:e.description,tags:e.tags,source:e.source,tools:e.tools};return t.file("skill.json",JSON.stringify(n,null,2)),e.files&&e.files.length>0?e.files.forEach(o=>{t.file(o.path,o.content)}):t.file("README.md",r(e)),t.generateAsync({type:"blob"})}function r(e){var t;return`# ${e.name}

## 描述
${e.description||"暂无描述"}

## 版本
${e.version||"1.0.0"}

## 作者
${e.author||"未知"}

## 标签
${(t=e.tags)!=null&&t.length?e.tags.map(n=>`- ${n}`).join(`
`):"- 暂无标签"}

---

> 此技能暂无源代码文件。
> 你可以通过编辑功能添加相关文件。
`}function i(e,t){const n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download=t,o.click(),URL.revokeObjectURL(n)}export{i as d,s as e};
