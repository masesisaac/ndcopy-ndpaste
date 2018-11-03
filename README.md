
# ndcopy-ndpaste

Commandline tools for copying and pasting text to and from the clipboard.

Inspired by mac osx's pbcopy and pbpaste

### Installation

```npm install -g ndcopy-ndpaste```

### ndcopy

Takes standard input and places it in the clipboard.

```$ ndcopy "some cool text"```

or

```$ cat file.txt | ndcopy```

### ndpaste

Returns standard output from the clipboard.

```$ ndpaste```

or

```$ ndpaste > file.txt```

#### Open to contributions
