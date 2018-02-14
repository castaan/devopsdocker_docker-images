FROM cypress/browsers:chrome63-ff57

ARG HTTP_PROXY
ARG HTTPS_PROXY

RUN export https_proxy=$HTTPS_PROXY
RUN export http_proxy=$HTTP_PROXY

ENV http_proxy $HTTP_PROXY
ENV https_proxy $HTTPS_PROXY

RUN npm config set proxy $HTTP_PROXY
RUN npm config set https-proxy $HTTPS_PROXY
RUN npm install cypress

ENV http_proxy ''
ENV https_proxy ''

RUN firefox --version

# Metadata params
ARG VERSION=latest
ARG VCS_URL=Unknown
ARG VCS_REF=Unknown
ARG BUILD_DATE=Unknown

# Metadata
LABEL org.label-schema.vendor="EUIPO" \
      org.label-schema.url="https://euipo.europa.eu/" \
      org.label-schema.name="Cypress.io with Browsers" \
      org.label-schema.description="Cypress.io Framework Docker image to automate integration and functional tests" \
      org.label-schema.version="$VERSION" \
      org.label-schema.vcs-url=$VCS_URL \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.docker.schema-version="1.0" \
      org.label-schema.docker.cmd="docker run --volume [CYPRESS_PATH_CODE]:/testing --workdir /testing --rm --shm-size=512m euipo/devops/cypress/browsers:$VERSION /node_modules/cypress/bin/cypress run --browser chrome" \
      org.label-schema.docker.params=""