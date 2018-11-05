#!/bin/bash

set -euo pipefail

if [ $TRAVIS_BRANCH == "master" ]
then
  yarn deploy:production
elif [ $TRAVIS_BRANCH == "staging" ]
then
  yarn deploy:staging
fi
