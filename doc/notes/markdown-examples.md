
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
可以针对每个代码块单独启用展示行号配置
```js
export default {
  mark
}
```

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
