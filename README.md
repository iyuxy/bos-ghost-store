# Bos-Ghost-Store

The Bos-Ghost-Store can help your store your image to [BaiduYun BOS](https://cloud.baidu.com/product/bos.html)

## Requirements

* Node > 6
* ghost > 2

*Only test in node(v6.10.0) & ghost(v2.1.4)*

## Features
* 1.support custom file prefix & suffix
* 2.Use `/` in prefix can upload file to folder
* 3.support [BOS picture processing](https://cloud.baidu.com/doc/BOS/DevRef.html#.E4.BD.BF.E7.94.A8.E6.96.B9.E5.BC.8F) 

## Usage

1.Install via npm

```
# go to the ghost workspace
cd ${your_ghost_workspace}

cd current && npm install bos-ghost-store --save

```

2. create the storage folder if it doesn't exist yet in `content`

```
# go to the ghost workspace

cd ${your_ghost_workspace}

mkdir -p content/adapters/storage

```

3.move bos-ghost-store to `content/adapters/storage`


```
cp -R current/node_modules/bos-ghost-store content/adapters/storage/bos-ghost-store

```


## Configuration

Add configuration of bos-ghost-store in `config.product.json` or `config.development.json`


example:

```
"storage": {
    "active": "bos-ghost-store",
    "bos-ghost-store ": {
        "credentials": {
            "ak": "your access key"",
            "sk": "your secret key" 
        },
        "bucket": "bucket",
        "origin": "visit url",
        "endpoint": "endpoint for your bucket",
        // optional
        "prefix": "image/",
        // optional
        "stylename": "stylename",
        // optional
        "command": "command"
    }
}
```
