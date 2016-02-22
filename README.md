# JavaScript Sanctuary Style

![HOOQ](https://hooq.tv/img/logo.png)

## Usage

To use it as a global node program, you can installed `asylum` globally:

```
npm install asylum -g
```

Then you can use asylum to check all JavaScript files in the current working directory:

```
$ asylum
asylum: Here is our asylum (https://github.com/HOOQsters/asylum#readme)
  /Users/diorahman/Experiments/hooq/src/receiver/app.js:1:1: Strings must use singlequote.
```

### Text editor plugins

First, install `asylum`.

#### [Vim](http://www.vim.org/)

Install **[Syntastic][vim-1]** and add this **[asylum.vim][vim-2]** to `syntastic/syntax_checkers/javascript`.

Then add this line to `.vimrc`:

```vim
let g:syntastic_javascript_checkers = ['asylum']
```

[vim-1]: https://github.com/scrooloose/syntastic
[vim-2]: https://raw.githubusercontent.com/HOOQsters/asylum/master/rc/vim/bundle/syntastic/syntax_checkers/javascript/asylum.vim

## License

MIT. Copyright (c) [HOOQ](https://hooq.tv/is)
