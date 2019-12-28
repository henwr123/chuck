# Chuck Norris API FAAS
The Chick Norris FAAS is a wrapper for the Chuck Norris API to provide facts. 

## Usage
```shell

#install dependenciess

#build the service
faas-cli build -f chuck.yml

#deploy to FAAS
faas-cli deploy -f chuck.yml


```

## Notes
The idea was inspired by Alex Ellis' [openFAAS quickstart guide](https://blog.alexellis.io/quickstart-openfaas-cli/).

All content is provide by the [Chuck Norris API](https://api.chucknorris.io/) service.

This project uses the [Chuck Norris Client for API](https://www.npmjs.com/package/chucknorris-io) to make calls to the API.  This is used to make the coding easier.

The FAAS function needs the template [Node10-Express](https://github.com/openfaas-incubator/node10-express-template) to function properly.


Git Ignore Generator !!!
https://www.gitignore.io/

