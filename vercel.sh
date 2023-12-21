#!/bin/bash

$BRANCH = $VERCEL_GIT_COMMIT_REF

if [[ $BRANCH != "master" && $BRANCH != "homolog" ]]; then
  echo "🛑 - Build cancelled"
  exit 0;
else
    echo "✅ $BRANCH - Build allowed"
    exit 1;
fi