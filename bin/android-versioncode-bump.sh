#!/bin/sh
set -e

sedi () {
  if [ "$(uname)" == "Linux" ]; then
    sed -i "$@"
  else
    sed -i "" "$@"
  fi
}

echo "Bumping versionCode"

# If versionCode is set with = (ex. versionCode = X) change {print $2} to {print $3}
currentVersionCode=`awk '/versionCode/ {print $2}' ./android/app/build.gradle`

echo "Current versionCode is: $currentVersionCode"

echo "Incrementing versionCode by 1 ..."

# If versionCode is set with = (ex. versionCode = X) change {print $2} to {print $3}
for entry in `awk '/versionCode/ {print $2}' ./android/app/build.gradle`; do
    index=`echo ${entry}`

    regex='^[0-9]+$'
    if [[ $index =~ $regex ]] ; then
        new_value=`echo "$(($index + 1))"`
        sedi 's/versionCode [0-9a-zA-Z -_]*/versionCode '$new_value'/' ./android/app/build.gradle
    fi

done

# If versionCode is set with = (ex. versionCode = X) change {print $2} to {print $3}
newVersionCode=`awk '/versionCode/ {print $2}' ./android/app/build.gradle`

echo "New versionCode is: $newVersionCode"


