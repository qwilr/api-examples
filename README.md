[![OpenAPI](https://img.shields.io/static/v1?label=&message=OpenAPI&color=fff&logo=openapi-initiative)][qwilr-openapi]
[![Awesome](https://img.shields.io/static/v1?label=&message=Awesome%20Docs&color=fff&logo=awesome-lists)][qwilr-documentation]
[![License](https://img.shields.io/static/v1?label=License&message=Qwilr&color=ef445a)](https://qwilr.com/license)

# Qwilr Examples

Welcome to the Qwilr API examples. With our examples you'll be able to learn how create Qwilr Pages programmatically. This means you can generate custom quotes, create pages when someone fills out a form, or anything else. The sky is the limit.

If you're looking for help with the Qwilr app you can find that in our [help documentation][qwilr-documentation].

If you have any questions about our API, please get in touch at [help@qwilr.com][qwilr-help-email].

## Getting started with Qwilr

If you are not familiar with Qwilr product yet, we highly recommend doing so.

Manuals to start with:
* [Getting started with Qwilr][qwilr-docs-getting-started]
* [Create a page][qwilr-docs-create-page]
* [Create a template][qwilr-docs-create-template]
* [Create an API access tokens][qwilr-docs-create-access-token]
* [Custom Tokens][qwilr-docs-custom-tokens]

## API Documentation

Qwilr API Documentation can be found [here][qwilr-documentation].

[OpenAPI description][qwilr-openapi] for the API is provided to improve development experience. 

### What's OpenAPI?
OpenAPI Specification (formerly Swagger Specification) is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API, including:

* Available endpoints (/users) and operations on each endpoint (GET /users, POST /users)
* Operation parameters Input and output for each operation
* Authentication methods
* Contact information, license, terms of use and other information.

API's specifications can be represented in YAML or JSON. The format is easy to learn and readable to both humans and machines. The complete OpenAPI Specification can be found on GitHub: [OpenAPI 3.0 Specification][openapi]

### Why OpenAPI?
First, Qwilr OpenAPI description is a contract between Qwilr and their clients.

Secondly, OpenAPI can be used to generate types, use them for request, response validation, mock servers and improve overall development experience.

## Prerequisites for running the scripts
You should have:
* [nodejs 12+](https://nodejs.org/en/download/package-manager/)
* [yarn](https://yarnpkg.com/getting-started/install)
* Create a [sandbox account][qwilr-sandbox-account] if you don't have one
* Fill the [config.ts](src/config.ts) file with your [API access token][qwilr-docs-create-access-token]

## Examples

1. [Creating a page from a template](src/01-create-from-template)
2. [Creating a page from blocks](src/02-create-from-blocks)
3. Webhooks _(coming soon)_

## Error handling
Qwilr uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.), and codes in the 5xx range indicate an error with Qwilr's servers.

We mention only base HTTP response codes here. You can find the full list at our [documentation][qwilr-documentation].

| HTTP Code | HTTP   | Description |
| --------- | ------ | ----------- |
| 200 | OK           | The request has been handled properly or resource updated |
| 201 | Success      | The resource has been created |
| 400 | Bad Request  | Check the “message” field that is returned with this error |
| 401 | Unauthorized | Please check that your Authorization header is present and that the value is “Bearer yourSecretApiKey” |
| 403 | Forbidden    | No permission to access a resource |
| 500 | Internal Server Error | Something erroneous has occurred on our end! Please send details of the API request to [help@qwilr.com][qwilr-help-email] and we will work to unblock you and fix the issue. |

## Pull requests welcome!

Spotted an error? Something doesn't make sense? 
Send us [a pull request](https://github.com/qwilr/api-examples/pulls)! 
Please avoid making stylistic changes though — 
they are unlikely to be accepted. 
Thanks!

## License
[Qwilr License][qwilr-license]

[openapi]: https://www.openapis.org/
[qwilr-license]: https://qwilr.com/license
[qwilr-openapi]: https://github.com/qwilr/openapi
[qwilr-help-email]: help@qwilr.com
[qwilr-sandbox-account]: https://support-docs.qwilr.com/qwilr-sandbox-account
[qwilr-sandbox-template]: https://app-sandbox.qwilr.com/#/page/5f98bb7acf3b110006a05e81
[qwilr-documentation]: https://docs.qwilr.com
[qwilr-docs-getting-started]: https://docs.qwilr.com
[qwilr-docs-create-page]: https://docs.qwilr.com
[qwilr-docs-create-template]: https://docs.qwilr.com
[qwilr-docs-create-access-token]: https://docs.qwilr.com
[qwilr-docs-custom-tokens]: https://docs.qwilr.com
