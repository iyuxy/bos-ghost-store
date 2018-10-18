# Bos-Ghost-Store

The Bos-Ghost-Store can help your store your image to [BaiduYun BOS](https://cloud.baidu.com/product/bos.html)

## Requirements

* Node > 6
* Ghost > 2

After testing, Bos-Ghost-Store works well in the following environment:

1. macOS(10.12.3) & node(v6.10.0) & ghost(v2.1.3) 

2. centos(7.1) & node(v6.14.3) & ghost(v2.1.3)

## Features
* 1.support custom file prefix & suffix
* 2.Use `/` in prefix can upload file to folder
* 3.support [BOS picture processing](https://cloud.baidu.com/doc/BOS/DevRef.html#.E4.BD.BF.E7.94.A8.E6.96.B9.E5.BC.8F) 

## Usage

1.Install via npm

```shell
# Go to the ghost workspace
cd ${your_ghost_workspace}

cd current && npm install bos-ghost-store --save

```

2.Create the storage folder if it doesn't exist yet in `content`

```shell
# Go to the ghost workspace

cd ${your_ghost_workspace}

mkdir -p content/adapters/storage

```
3.Move bos-ghost-store to `content/adapters/storage`


```shell
cp -R current/node_modules/bos-ghost-store content/adapters/storage/bos-ghost-store

```
4.Install dependencies

```shell
cd content/adapters/storage/bos-ghost-store

npm install

```


## Configuration

Add configuration of bos-ghost-store in `config.product.json` or `config.development.json`


example:

```javascript
"storage": {
    "active": "bos-ghost-store",
    "bos-ghost-store ": {
        "credentials": {
            "ak": "your access key",
            "sk": "your secret key" 
        },
        "bucket": "bucket",
        "origin": "visit url",
        "endpoint": "endpoint for your bucket",
        // optional
        "prefix": "image/",
        // optional, stylename & command only one can take effect
        "stylename": "stylename",
        // optional
        "command": "command"
    }
}
```
