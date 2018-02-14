# What is this?

This repository contains the Docker image's code developed by DevOps.

# How do I add a new image's code

-	create a folder for my image: `mkdir myimage`
-	create a `README.md` file (required, 100 char max)
-	create a `Dockerfile` file (required)
-	create an `assets` folder (not required)

## folder `<image name>`

This is where all the partial and generated files for a given image reside, (ex: `cypress/`).

## `<image name>/README.md`

This file contains a brief explanation of the image purpose and the following information:

-	Instructions to build the image
-	Instructions to run a container from the buildt image

## `<image name>/Dockerfile`

This file should add labels following the [Label Schema Convention][label-schema].

[label-schema]: http://label-schema.org/rc1/