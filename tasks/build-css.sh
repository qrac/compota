#!/bin/sh

# ----------------------------------------------------
# Build CSS
# ----------------------------------------------------

# Concat

concatFiles=(
  "./src/assets/css/variable.css"
  "./src/assets/css/theme-light.css"
  "./src/assets/css/theme-dark.css"
  "./src/assets/css/reset.css"
  "./src/assets/css/html.css"
)

concat -o './dist/compota.css' ${concatFiles[*]}