docker-autobuild-data-container
==============================

Generate image for data container from docker container (in runtime).

### Demo

[![asciicast](https://asciinema.org/a/ek6n2c6yh26kkziyfp282idp6.png)](https://asciinema.org/a/ek6n2c6yh26kkziyfp282idp6)

### From docker hub:

```bash
docker run --rm -v /var/lib/docker:/var/lib/docker -v /var/run/docker.sock:/var/run/docker.sock -e CONTAINER=<run_container_name> -e IMAGE=<image_name> docker-autobuild-data-container:latest
```

##### Docker version:

- 1.12, 1.12.1, latest
```bash
docker run --rm -v /var/lib/docker:/var/lib/docker -v /var/run/docker.sock:/var/run/docker.sock -e CONTAINER=<run_container_name> -e IMAGE=<image_name> docker-autobuild-data-container:latest
```

- 1.11, 1.11.2
```bash
docker run --rm -v /var/lib/docker:/var/lib/docker -v /var/run/docker.sock:/var/run/docker.sock -e CONTAINER=<run_container_name> -e IMAGE=<image_name> docker-autobuild-data-container:1.11
```

### From repo:

```bash
docker build --tag=docker-autobuild-data-container .
docker run --rm -v /var/lib/docker:/var/lib/docker -v /var/run/docker.sock:/var/run/docker.sock -e CONTAINER=<run_container_name> -e IMAGE=<image_name> docker-autobuild-data-container
```
