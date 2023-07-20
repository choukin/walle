---
title: Docs with VitePress
editLink: true
---
# Markdown 扩展 示例

本示例展示 VitePress 内置的 MarkDown 扩展使用方式；

## 语法高亮

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers{#my-anchor}

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 自定义标题
```
::: danger STOP
危险区域，请勿继续！
:::

::: details 点击查看代码

console.log('Hello, vitePress!')
:::
:::

::: danger STOP
危险区域，请勿继续！
:::

::: details 点击查看代码
```js
console.log('Hello, vitePress!')
```

```


## Github 风格的 Tables

**Input**

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

```

**Output**

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |


## Emoji :tada:

**Input** 

```
:tada: :100:
```

**Output**

:tada: :100:

[可用的 emoji ](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)列表；

## 内容目录

**Input**
```
[[toc]]
```

**Output**
[[toc]]


## 自定义锚点{#custom-anchor}

自定义特殊的锚点标签
```
# 自定义锚点 {#custom-anchor}
```


## raw

特殊的容器，可以防止和 VitePress 冲突

```
:::raw
Wraps in a <div class="vp-raw">
:::

```


<!-- :::raw
Wraps in a <div class="vp-raw">
::: -->


## 在代码块内语法高亮

VitePress 使用 [Shiki]() 在 Markdown 代码块中突出显示语言语法，使用彩色文本； Shiki 支持多种编程语言；你只需要在代码块的开始部分写上有效的编程语言；

**Input**

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
 ```html
 <ul>
    <li v-for="todo in todos" :key="todo.id">
          {{todo.text}}
    </li>
 </ul>
 ```
````


**Output**

```js
  export default {
  name:'MyComponent',
  // ...
  }
```

 ```html
 <ul>
    <li v-for="todo in todos" :key="todo.id">
          {{todo.text}}
    </li>
 </ul>
 ```

[Shiki 支持的语言列表](https://github.com/shikijs/shiki/blob/main/docs/languages.md)

你也可以自定义语法高亮配置，查看 [markdown](https://vitepress.dev/reference/site-config#markdown) 配置项 获取更多信息


## 在代码块内行内高亮

**Input**

````
```js{4}
  export default{
    data(){
      return {
        msg:'Highlighted!'
      }
    }
  }
```
````


**Output**

```js{4}
  export default{
    data(){
      return {
        msg:'Highlighted!'
      }
    }
  }
 ``` 

 除了指定单行，我们还可以指定多个单行，指定范围、或者混合使用：
 - 指定一个范围例如：`{5-8}`,`{3-10}`
 - 指定多个单行例如:`{4,6,8}`
 - 混合使用:`{3,5-8}`


 **输入**

 ````
 ```js{1,4,6-8}
 export default {
  data () {
    return {
      msg:`高亮,
      这一行不高亮，
      本行和下一行都高亮`,
      motd:'ViePress 很棒'
      lorem:'ipsum'
    }
  }
 }
 ```
 ````

 **输出**
  ```js{1,4,6-8}
 export default {
  data () {
    return {
      msg:`高亮,
      这一行不高亮，
      本行和下一行都高亮`,
      motd:'ViePress 很棒'
      lorem:'ipsum'
    }
  }
 }
 ```

 或者，也可以直接在代码行后面添加 // [!code hl] 来设置高亮展示


 **输入**

 ````
 ```js
 export default {
  data () {
    return {
      msg:`Highlighted!` // [!code hl]
    }
  }
 }
 ```
 ````

 **输出**
  ```js
 export default {
  data () {
    return {
      msg:`Highlighted!` // [!code hl]
    }
  }
 }
 ```

 ## 代码块中的焦点事件

 在代码块的某一行添加 `// [!code focus]` 注释，会给当前行聚焦，而让其它行失去焦点。
 或者，也可以使用 `// [!code focus:<numbers>]` 来定义多行代码的焦点

 **输入**

````
```js
// [!code focus:2,3]
export default{ 
  data(){
    return {
      msg: `focused!`
    }
  }
}
```
````
```js

export default{ // [!code focus:2]
  data(){
    return {
      msg: `focused!` // [!code focus]
    }
  }
}
```

## 代码块中的变化部分的颜色差异
在一行中添加 //[!code --] 或者 // [!code ++] 注释，会创建当前行的差异，同时保留代码块的颜色。

**输入**
````
```js
export default {
  data(){
    return {
      msg:`Remove`, // [!code --]
      msg:'Added' //[!code ++]
    }
  }

}
```

````

**输出**
```js
export default {
  data(){
    return {
      msg:`Remove`, // [!code --]
      msg:'Added' //[!code ++]
    }
  }

}
```

## 代码块中的错误和警告
在一行中添加 `[!code warning]` 或者 `[!code error]` 注释，会创建当前行的错误和警告。

**输入**
````
```js
 export default {
  data(){
    return {
      msg:'Error',// [!code error]
      msg:'Warning',// [!code warning]
    }
  }
 }
```
````

## 行号
可以针对每个代码块单独启用展示行号配置 `doc/.vitepress/config.ts` 中
```js
export default {
  markdown:{
    lineNumbers: true
  }
}
```

可以查看 [`markdown` options](https://vitepress.dev/reference/site-config#markdown) 查看更详细的介绍；

我们可以使用 `:line-numbers` / `:no-line-numbers` 标记代码块，来覆盖默认配置

**输入**
````
```ts{1}
// line-numbers is disable by default
const line2 = `This is line 2`
const line3 = `This is line 3`
```

```ts:line-numbers {1}
const line2 = `This is line 2`
const line3 = `This is line 3`
```

````
**输出**
```ts{1}
// line-numbers is disable by default
const line2 = `This is line 2`
const line3 = `This is line 3`
```

```ts:line-numbers {1}
const line2 = `This is line 2`
const line3 = `This is line 3`
```

## 导入代码片段

我们可以通过下面的表达式引入代码片段文件：
```
<<< @/filepath
```

也可以设置代码高亮

```md
<<< @/filepath{highlightLines}
```

**输入**
```md
<<< @/snippets/snippe.js.js{2}
```

**代码文件**

<<< @/snippets/snippet.js

**输出**

<<< @/snippets/snippet.js{2}


::: tip
@ 对应的的是资源的根目录，默认是 VitePress 项目的根，如果设置的 *srcDir* 就是相对鱼它；或者也可以使用相对路径:
```md
<<< ../snippets/snippet.js
```
:::

我们也可以使用 [VS Code region]() 只导入代码文件中相应的部分，可以在 文件路径`#`后面使用自定义的范围名称

**输入**
```md
<<< @/snippets/snippet-with-region.js#snippet{1}
```

**代码文件**

<<< @/snippets/snippet-with-region.js

**输出**

<<< @/snippets/snippet-with-region.js#snippet{1}

我们还可以在大括号中`({})` 指定语言类型:

```md
<<< @/snippets/snippet.cs{c#}


<!-- 带代码高亮 -->
<<< @/snippets/snippet.cs{1,2,4-6 c#}

<!-- 带行号 -->
<<< @/snippets/snippet.cs{1,2,4-6 c#line-numbers}

```
如果无法从扩展名推断出源语言，这个功能非常有用；

## 代码组
我们可以对多段代码进行分组

**输入**

````js
::: code-group
```js [config.js]
 /**
  * @type {import('vitepress').UserConfig}
  */
  const config = {
   // ..
  }
  
  export default config

```

```ts [config.ts]
import type {UserConfig} from 'vitePress'

const config:UserConfig = {
  // ...
}
export default config
```

::: 
````

**输出**

::: code-group
```js [config.js]
 /**
  * @type {import('vitepress').UserConfig}
  */
  const config = {
   // ..
  }
  
  export default config

```

```ts [config.ts]
import type {UserConfig} from 'vitePress'

const config:UserConfig = {
  // ...
}
export default config
```

:::

我们也可以在代码组中导入代码片段

**输入**

````
::: code-group

<!-- filename is used as title by default -->

<<< @/snippets/snippet.js

<!-- 我们也可以提供一个自定义的片段 -->

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers}  [snippet with region]
:::

````
**输出**
::: code-group

<!-- filename is used as title by default -->

<<< @/snippets/snippet.js

<!-- 我们也可以提供一个自定义的片段 -->

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]
:::

## Markdown 文件标记

我们可以在一个markdown文件中引入另一个markdown文件，或者嵌套

::: tip
我们可以使用`@` 来作为markdown文件路径的前缀
:::

例如：可以下面这样使用相对的 markdown 路径

**输入**
```md
# Docs
## Basics

<!--@include: ./parts/basics.md-->
```


**相应输出**

# Docs
## Basics
<!--@include: @/parts/basics.md-->


也可以设置选中行范围**没好用**

**输入**
```md
# Docs
## Basics

<!--@include: ./parts/basics.md-->
```

**输出**

# Docs
## Basics

<!--@include: ./parts/basics.md-->


## 高级配置
VuePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 做为MarkDown的渲染器，上面的许多扩展都是使用自定义插件实现的。我们可以使用`.vitepress/config.js` 中的markdown 选项进一步自定义 `markdown-it` 实例

```js
const anchor = require('markdown-it-anchor')
module.exports = {
  markdown:{
    // 配置 markdown-it-anchor 
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor:{
      permalink: anchor.permalink.headerLink()
    },

    // 配置 @mdit-uve-plugin-tod
    //https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: {level:[1,2]},
    config:(md)=>{
      // 使用更多的 markdown-it 插件
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).


