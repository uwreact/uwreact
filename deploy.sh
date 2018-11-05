#!/bin/bash

set -euo pipefail

echo HELLO
echo "HELLO"
echo "$TRAVIS_BRANCH"

yarn deploy
