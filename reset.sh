# for turning this sucker back into an empty template
# you may need to chmod +x this file

rm -rf node_modules
rm -rf docs
rm -rf dist
rm -rf .git
rm -rf .parcel-cache
rm -rf bun.lock
rm -rf package-lock.json
rm -rf www

echo - package.json -- check name, description, keywords, dependencies, keywords, and github url
echo - /src -- remove unused
echo - /demo -- remove unused
echo - /demo/index.html -- change \<title\> and remove unused
echo - 1 install / upgrade bun and npm if needed
echo - 2 bun update
echo - 3 bun test
echo - 4 pick a PORT for bun start, then bun start
echo - git init
echo - publish to git
echo - setup pages, and set pages directory to docs
