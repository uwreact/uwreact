#!/bin/bash

set -euo pipefail

echo HELLO
echo "HELLO"
echo "$TRAVIS_BRANCH"

openssl aes-256-cbc -K $encrypted_5880cf525281_key -iv $encrypted_5880cf525281_iv -in secrets.zip.enc -out secrets.zip -d

yarn deploy
