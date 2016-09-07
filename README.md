docker-autobuild-data-container
==============================

Generate image for data container from docker container (in runtime).

### Demo

[![asciicast](https://asciinema.org/a/ek6n2c6yh26kkziyfp282idp6.png)](https://asciinema.org/a/ek6n2c6yh26kkziyfp282idp6)

### From docker hub: [link](https://hub.docker.com/r/fedeg/docker-autobuild-data-container/)

[![Docker Automated buil](https://img.shields.io/docker/automated/jrottenberg/ffmpeg.svg)](https://hub.docker.com/r/fedeg/docker-autobuild-data-container/)

```bash
docker run --rm -v /var/lib/docker:/var/lib/docker -v /var/run/docker.sock:/var/run/docker.sock -e CONTAINER=<run_container_name> -e IMAGE=<image_name> docker-autobuild-data-container:latest
```

##### Docker version:

- 1.12, 1.12.1, latest:

[![](https://images.microbadger.com/badges/version/fedeg/docker-autobuild-data-container:latest.svg)](http://microbadger.com/images/fedeg/docker-autobuild-data-container:latest "Get your own version badge on microbadger.com") [![](https://images.microbadger.com/badges/image/fedeg/docker-autobuild-data-container:latest.svg)](http://microbadger.com/images/fedeg/docker-autobuild-data-container:latest "Get your own image badge on microbadger.com")

```bash
docker run --rm -v /var/lib/docker:/var/lib/docker -v /var/run/docker.sock:/var/run/docker.sock -e CONTAINER=<run_container_name> -e IMAGE=<image_name> docker-autobuild-data-container:latest
```

- 1.11, 1.11.2:

[![](https://images.microbadger.com/badges/version/fedeg/docker-autobuild-data-container:1.11.svg)](http://microbadger.com/images/fedeg/docker-autobuild-data-container:1.11 "Get your own version badge on microbadger.com") [![](https://images.microbadger.com/badges/image/fedeg/docker-autobuild-data-container:1.11.svg)](http://microbadger.com/images/fedeg/docker-autobuild-data-container:1.11 "Get your own image badge on microbadger.com")

```bash
docker run --rm -v /var/lib/docker:/var/lib/docker -v /var/run/docker.sock:/var/run/docker.sock -e CONTAINER=<run_container_name> -e IMAGE=<image_name> docker-autobuild-data-container:1.11
```

### From repo:

```bash
docker build --tag=docker-autobuild-data-container .
docker run --rm -v /var/lib/docker:/var/lib/docker -v /var/run/docker.sock:/var/run/docker.sock -e CONTAINER=<run_container_name> -e IMAGE=<image_name> docker-autobuild-data-container
```
