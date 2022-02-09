#!/bin/sh

JOB_NAME=$1

cat github.secrets
cat event.json

act -j $JOB_NAME --secret-file github.secrets -e event.json
