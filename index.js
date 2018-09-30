/**
 * @file bos-ghost-store
 *
 * @other-info 终于写好了，写这个东西发现坑是真多，调试也不方便，下面把遇到的坑统一记下：
 *     1.save方法中不能嵌套使用Promise，否则上传会pengding
 *     2.file.path拿到的是一个二进制的流，如果不设置Content-Type的话，BOS会直接以二进制流的方式提供，会导致图片压缩
 *     3.不能使用ES6的import语法
 *
 * @author darrenywyu@gmail.com
 */

'use strict';

const BaseAdapter = require('ghost-storage-base');
const Promise = require('bluebird');
const util = require('./lib/util');

const BosClient = require('bce-sdk-js').BosClient;

class bosAdapter extends BaseAdapter {
    constructor(options) {
        super(options);
        this.options = options || {};
        this.bosClient = new BosClient(options);
    }
    
    exists(file) {
        return new Promise((resolve, reject) => {
            resolve(false);
        });
    }

    /**
     * 上传图片
     * @param  {Object} file 上传图片信息
     * @return {Promise}  Promise对象
     */
    save(file) {
        return new Promise((resolve, reject) => {
            const name = util.getFileName(file, this.options)
            this.bosClient.putObjectFromFile(
                this.options.bucket,
                name,
                file.path,
                {
                    'Content-Type': file.type
                }
            ).then(response => {
                let url = this.options.origin.replace(/\/$/, '')
                    + '/'
                    + name.replace(/^\//, '');
                if (this.options.stylename) {
                    url = url + '@' + this.options.stylename.replace(/^@/, '');
                }
                else if (this.options.command) {
                    url = url + '@' + this.options.command.replace(/^@/, '');
                }
                resolve(url);
            }).catch(err => {
                reject(err)
            });
        });
    }

    serve() {
        return (req, res, next) => {
            next();
        }
    }

    delete(file) {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }

    read(file) {
        return new Promise((resolve, reject) => {
            this.bosClient.getObject(this.options.bucket, file.path)
            .then(response => {
                const content = response.body;
                resolve(content);
            })
            .catch(err => {
                reject(new errors.GhostError({
                    err: err,
                    message: `[bos-ghost-store] Could not read file: ${options.path}`,
                }));
            });
        });
    }
};

module.exports = bosAdapter;
