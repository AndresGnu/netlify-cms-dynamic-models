#!/bin/bash          

# unzip generator
tar xvf generator.tar.xz

# unziy functions
tar xvf lambda.tar.xz

# unzip assets
mkdir ../.flow
unzip -o assets.zip -d ../.flow

# unzip images
unzip -o images.zip -d ../static 

# permissions to execute
chmod 777 ./generator