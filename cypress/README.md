# docker-cypress

A Docker image based on [Cypress.io][cypress]. This image has installed [Cypress Framework][cypress] on one side and [Google Chrome Web Browser][chrome] and [Firefox Web Browser][firefox] on the other.

## Why?

Currently, there are a bunch of daily/morning checks performed manually from DevOps side... with Cypress we can automate those who are related with a web interface.     

## Usage

### Build Image

To build this image we should define some variables in order to provide enough information to debug errors and version tracking.

```
ARG VERSION -- TAG VERSION OF THE DOCKER IMAGE
ARG VCS_URL -- GIT REPOSITORY URL
ARG VCS_REF -- HASH COMMIT
ARG BUILD_DATE -- DATE WHEN THE IMAGES IS BUILT
```

```console
$ docker build -t euipo/devops/cypress/browsers:[IMAGE_TAG] --build-arg VERSION=[IMAGE_TAG] --build-arg VCS_URL=http://[GIT_REPOSITORY_URL] --build-arg VCS_REF=0000000000000000 --build-arg BUILD_DATE=[date] --build-arg HTTP_PROXY=[HTTP_PROXY] --build-arg HTTPS_PROXY=[HTTPS_PROXY] .
```

There are a couple of extra vars that can be used to set proxy configuration.

```
ARG HTTP_PROXY
ARG HTTPS_PROXY
```

### Run Container

To run a container from this image:

```console
docker run --volume [CYPRESS_PATH_CODE]:/testing --workdir /testing --rm --shm-size=512m euipo/devops/cypress/browsers:$VERSION /node_modules/cypress/bin/cypress run --browser chrome
```

### Debug

In case we need to debug some issues related with a container, we can collect evidence based on the VCS variables filled at **build time**:


```console
docker inspect [CYPRESS_CONTAINER_NAME]
```

```console
...
  Config: {
  ..
      "Labels": {
            "org.label-schema.vendor": "EUIPO",
            "org.label-schema.url": "https://euipo.europa.eu/",
            "org.label-schema.name": "Cypress.io with Browsers",
            "org.label-schema.description": "Cypress.io Framework Docker image to automate integration and functional tests",
            "org.label-schema.version": $VERSION,
            "org.label-schema.vcs-url": $VCS_URL,
            "org.label-schema.vcs-ref": $VCS_REF,
            "org.label-schema.build-date": $BUILD_DATE,
            "org.label-schema.docker.schema-version": "1.0",
            "org.label-schema.docker.cmd": "docker run --volume [CYPRESS_PATH_CODE]:/testing --workdir /testing --rm --shm-size=512m euipo/devops/cypress/browsers:$VERSION /node_modules/cypress/bin/cypress run --browser chrome",
            "org.label-schema.docker.params": ""
        }
    }
}
```

We should search the commit defined in: **org.label-schema.vcs-ref** in VCS REPO **org.label-schema.vcs-url** 

[cypress]: https://www.cypress.io/
[chrome]: https://www.google.es/chrome/
[firefox]: https://www.mozilla.org/
[vcs_url]: https://git.euipo.europa.eu/projects/DEVOPSDOCKER/repos/docker-images/browse