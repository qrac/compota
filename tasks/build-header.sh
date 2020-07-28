#!/bin/sh

# ----------------------------------------------------
# Build Header
# ----------------------------------------------------

# Template

PROJECT_NAME=$(node -p -e "require('./project.json').name")
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
PACKAGE_LICENSE=$(node -p -e "require('./package.json').license")
PACKAGE_AUTHOR=$(node -p -e "require('./package.json').author.name")

PACKAGE_HEADER="/*! $PROJECT_NAME v$PACKAGE_VERSION $PACKAGE_LICENSE by $PACKAGE_AUTHOR*/"

tempPath='./.temp'

mkdir -p "$tempPath"

echo $PACKAGE_HEADER > "$tempPath/compota-header.css"

# Replace

replace '\*\/' ' */' "$tempPath/compota-header.css"

# Concat

concat -o './dist/compota.css' "$tempPath/compota-header.css" './dist/compota.css'