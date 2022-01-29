#!/bin/sh

gpg --batch --yes --decrypt --passphrase="$SERVICE_ACCOUNT_ENCRYPT_PASSWORD" --output ./android/app/google-private-key.json ./android/app/google-private-key.json.gpg

if [ $1 = "staging" ]; then
	gpg --batch --yes --decrypt --passphrase="$KEYSTORE_ENCRYPT_PASSWORD" --output ./android/app/staging.keystore ./android/app/staging.keystore.gpg
else
	gpg --batch --yes --decrypt --passphrase="$KEYSTORE_ENCRYPT_PASSWORD" --output ./android/app/release.keystore ./android/app/release.keystore.gpg
fi
