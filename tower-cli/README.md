# docker-tower-cli

This image has installed [Ansible Tower CLI][tower-cli] configured to be able to work againt [AWX][ansible-awx] server using the API REST interface.

## Why?

Currently, to execute [Ansible][ansible] code we need to run every playbook from the Ansible Jumper server, with this implementations, we are going to be able to execute playbook using [AWX][ansible-awx].     

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
$ docker build -t euipo/devops/ansible/tower-cli:[IMAGE_TAG] --build-arg VERSION=[IMAGE_TAG] --build-arg VCS_URL=http://[GIT_REPOSITORY_URL] --build-arg VCS_REF=0000000000000000 --build-arg BUILD_DATE=[date] --build-arg HTTP_PROXY=[HTTP_PROXY] --build-arg HTTPS_PROXY=[HTTPS_PROXY] .
```

There are a couple of extra vars that can be used to set proxy configuration.

```
ARG HTTP_PROXY
ARG HTTPS_PROXY
```

### Run Container

To run a container from this image:

```console
docker run --rm euipo/devops/ansible/tower-cli:$VERSION tower-cli [TOWER_CLI_COMMAND]
```

### Debug

In case we need to debug some issues related with a container, we can collect evidence based on the VCS variables filled at **build time**:


```console
docker inspect [TOWER_CLI_CONTAINER_NAME]
```

```console
...
  Config: {
  ..
      "Labels": {
            "org.label-schema.vendor": "EUIPO",
            "org.label-schema.url": "https://euipo.europa.eu/",
            "org.label-schema.name": "Tower CLI",
            "org.label-schema.description": "Tower CLI is used to work with Ansible Tower/AWX products using the API REST interface",
            "org.label-schema.version": $VERSION,
            "org.label-schema.vcs-url": $VCS_URL,
            "org.label-schema.vcs-ref": $VCS_REF,
            "org.label-schema.build-date": $BUILD_DATE,
            "org.label-schema.docker.schema-version": "1.0",
            "org.label-schema.docker.cmd": "docker run --rm euipo/devops/ansible/tower-cli:$VERSION tower-cli [TOWER_CLI_COMMAND]",
            "org.label-schema.docker.params": ""
        }
    }
}
```

We should search the commit defined in: **org.label-schema.vcs-ref** in VCS REPO **org.label-schema.vcs-url** 

[tower-cli]: https://github.com/ansible/tower-cli
[ansible-awx]: https://github.com/ansible/awx
[ansible]: https://www.ansible.com/
[label-schema]: http://label-schema.org/rc1/
[vcs_url]: https://git.euipo.europa.eu/projects/DEVOPSDOCKER/repos/docker-images/browse