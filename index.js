'use strict';

require('dotenv').load();
const exec = require('child_process').exec;
const fs = require('fs');
const Q = require('q');

const container = process.env.CONTAINER;
const imageName = process.env.IMAGE;

function generateDockerfile(volumes){
    fs.writeFileSync('Dockerfile', 'FROM busybox\nMAINTAINER automatic\n');
    volumes.forEach((volume) => {
        fs.appendFileSync('Dockerfile', `RUN mkdir -p ${volume}\nADD ./data${volume} ${volume}\nVOLUME ${volume}\n`);
    });
    fs.appendFileSync('Dockerfile', 'CMD /bin/true\n');
}

function getVolumesData(volumes) {
    let promises = [];
    volumes.forEach((volume) => {
        let deferred = Q.defer();
        let target = `./data${volume}`.split('/');
        target.pop();
        target = target.join('/');
        exec(`mkdir -p ./data${volume}; docker cp ${container}:${volume} ${target}`,
            (err, stdout, stderr) => (err) ? deferred.reject(stderr): deferred.resolve(stdout));
        promises.push(deferred.promise);
    });
    return Q.all(promises);
}

function verifyDockerVersion() {
    let deferred = Q.defer();
    exec(`docker version -f={{.Server.Version}}`,
        (err, stdout, stderr) => (err) ? deferred.reject(stderr): deferred.resolve(stdout));
    return deferred.promise;
}

function generateImage() {
    exec(`docker inspect -f='{{range.Mounts}}{{.Destination}} {{end}}' ${container}`, (err, volumes) => {
        if (err) {
            throw err
        }
        volumes = volumes.split(' ');
        volumes.pop();
        console.log('Volumes:');
        volumes.forEach((volume) => console.log(`- ${volume}`));
        generateDockerfile(volumes);
        return getVolumesData(volumes)
            .then(() => {
                exec(`docker build --tag=${imageName} .`, (error, stdout) => {
                    if (error) {
                        throw error;
                    }
                    console.log(stdout);
                });
            })
    });
}

verifyDockerVersion()
    .then(generateImage)
    .catch((stderr) => {
        console.log(stderr);
        console.log('If your server API version is 1.23, use docker-autobuild-data-container:1.11');
    });
