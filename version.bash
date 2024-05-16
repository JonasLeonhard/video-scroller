#!/bin/bash
set -e # stop on error

echo "Please enter a version number: "
read version

echo -e "\nCreating version $version\n"
echo -e "Start build..."
pnpm build

for dir in dist dist-demo dist-js
do
  destination="versions/$version"
  mkdir -p $destination
  echo "Moving $dir to $destination"
  mv $dir $destination
done

echo -e "\nDone!"
