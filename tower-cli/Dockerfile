FROM python:3.6.4-alpine3.7

# Input arguments (some with default values)
ARG HTTP_PROXY
ARG HTTPS_PROXY
ARG VERSION=latest
ARG VCS_URL=Unknown
ARG VCS_REF=Unknown
ARG BUILD_DATE=Unknown

# Environment set to allow external applications installation
RUN export https_proxy=$HTTPS_PROXY
RUN export http_proxy=$HTTP_PROXY
ENV http_proxy $HTTP_PROXY
ENV https_proxy $HTTPS_PROXY

# Installation
RUN pip install ansible-tower-cli

# Cleaning environment
ENV http_proxy ''
ENV https_proxy ''

#COPY assets/tower_cli.cfg /root/.tower_cli.cfg

# Apply metadata
LABEL org.label-schema.vendor="EUIPO" \
      org.label-schema.url="https://euipo.europa.eu/" \
      org.label-schema.name="Tower CLI" \
      org.label-schema.description="Tower CLI is used to work with Ansible Tower/AWX products using the API REST interface" \
      org.label-schema.version=$VERSION \
      org.label-schema.vcs-url=$VCS_URL \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.docker.schema-version="1.0" \
      org.label-schema.docker.cmd="docker run --rm euipo/devops/ansible/tower-cli:$VERSION tower-cli [TOWER_CLI_COMMAND]" \
      org.label-schema.docker.params=""
