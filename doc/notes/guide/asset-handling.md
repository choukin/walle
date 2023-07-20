# 资源处理
## 应用静态资源
所有的markdwon组件都会由Vite编译成 Vue 组件。我们只能通过相对路径应用静态资源：

```md
![An image](./image.png)
```

我们可以在markdown文件中引用静态资源，我们在主题文件夹中的`*.vue` 组件，样式和独立的`.css`即可以使用绝对路径也可以使用相对路径；后者类似于我们使用过的Vite、Vue CLI 或者 webpack 的 file-loader。

可自动检测常见的图像，媒体，字体文件类型，并将它识别为资源；

所有引用的资源，包括哪些通过绝对路径引用的资源，在构建的时候都会被打上hash并复制到输出文件中。没有被引用过的资源不会被复制。小于 4kb的图片会被转化成内链的base64，可以通过  `vite` 的配置项自定义。

所有的静态资源路径，包括绝对路径都应该相对于我们的工作文件夹结构；

## `public` 文件夹

有时候我们想要提供一些这样的文件：不在任何 markdown 文件或者主题组件中引用；或者想提供指定的一些可以通过源文件名访问的文件，例如：`robots.txt`, favicons ,以及 PWA 图标；

我们可以把这些文件放在项目根目录下，的public 文目录中