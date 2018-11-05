#!/bin/bash

set -euo pipefail

if [ $TRAVIS_BRANCH == "master" ]
then
  echo "master"
  yarn deploy:production
elif [ $TRAVIS_BRANCH == "set-up-travis" ]
then
  echo "set-up"
  yarn deploy
fi
