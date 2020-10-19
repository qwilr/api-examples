[![Awesome](https://img.shields.io/static/v1?label=&message=Luã&color=000&logo=lua)](https://qwilr.com)
[![OpenAPI](https://img.shields.io/static/v1?label=&message=OpenAPI&color=fff&logo=openapi-initiative)][qwilr-openapi]
[![Awesome](https://img.shields.io/static/v1?label=&message=Awesome%20Docs&color=fff&logo=awesome-lists)][qwilr-documentation]
[![License](https://img.shields.io/static/v1?label=License&message=Qwilr&color=ef445a)](https://qwilr.com/license)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

# Qwilr Examples

Welcome to the Qwilr API examples. With our examples you'll be able to learn how create Qwilr Pages programmatically. This means you can generate custom quotes, create pages when someone fills out a form, or anything else. The sky is the limit.

If you're looking for help with the Qwilr app you can find that in our [help documentation][qwilr-documentation].

If you have any questions about our API, please get in touch at [help@qwilr.com][qwilr-help-email].

# Getting started with Qwilr

If you are not familiar with Qwilr product yet, we highly recommend doing so.

Manuals to start with:
* [Getting started with Qwilr][qwilr-docs-getting-started]
* [Create a page][qwilr-docs-create-page]
* [Create a template][qwilr-docs-create-template]
* [Create an API access tokens][qwilr-docs-create-access-token]
* [Custom Tokens][qwilr-docs-custom-tokens]

# API Documentation

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

# Examples

### Prerequisites
You should have:
* [nodejs 12+](https://nodejs.org/en/download/package-manager/)
* [yarn](https://yarnpkg.com/getting-started/install)
* Created a [sandbox account][qwilr-sandbox-account] if you don't have one
* having [Sandbox Template][qwilr-sandbox-template] under your sandbox account


## Create a page from a template

`1-create-from-template.ts` script will create a page from [a template][qwilr-sandbox-template]

---
Running the script:
```shell
$ yarn create-from-template
```
---
The output for the script above is json representation of created project.
```json
{
  "id": "5f8c08f81fd8b9815081b361",
  "name": "New page from blocks",
  "userId": "5eccccf10f9b15ba5b5ca0aa",
  "accountId": "5eccccf10f9b15ba5b5ca091",
  "createdAt": "2020-10-18T09:20:56.902Z",
  "lastEditedAt": "2020-10-18T09:20:57.641Z",
  "updatedAt": "2020-10-18T09:20:56.902Z",
  "publishedAt": "2020-10-18T09:20:56.902Z",
  "status": "",
  "currencies": [],
  "acceptanceData": null,
  "allowIndexing": false,
  "enableSocialBadge": false,
  "quoteBlockCount": 0,
  "settings": {
    "navigation": { "widgets": ["Object"], "enabled": "" },
    "localisation": { "direction": "ltr", "language": "English" }
  },
  "tags": [],
  "blocks": [ { "id": "5f8c08f91fd8b9815081b363", "name": "", "type": "Text" } ]
}
```

Now you can find a new project created from the template by logging to your sandbox account. 

### Using `POST /v1/projects` with template id
To create a page from a template you need to make a POST request to `/v1/projects` endpoint with a template id.

Check out snippet below:
```typescript
const response = await httpClient.post("/v1/projects", {
  "templateId": "5f89619f457c29e007503d61",
  "name": "New page from the template"
});

response.data // contains json representation of created project
```

It is worth nothing that resulting schema of endpoint `/v1/projects` matches API description [here][qwilr-openapi]. 

You can find full sample at `src/1-create-from-template.ts`.

## Create a page from blocks

`1-create-from-blocks.ts` script will create a page from saved blocks specified in configuration.

_config.json_
```json
{
  "sample2": {
    "blocks": [
      "oqa9EsmipR_T5hayLiaKKkRIJGjb6A",
      "oqa9ErfvpR_T5hayscdKK1234GjbGH"
    ]
  }
}
```

---
Running the script:
```shell
$ yarn create-from-blocks
```
---
The output for the script command is json representation of created project. It's the same as in [first sample](#create-a-page-from-a-template).


### Using `POST /v1/projects` with saved blocks
You need to make a POST request to `/v1/projects` endpoint with list of saved blocks to create a project from saved blocks.
A new project will be created and saved blocks copied to the project.
If you specify substitutions you will be get custom tokens replaced.

If you don't know how to create saved blocks:
* [How to create saved block][qwilr-docs-saved-block]
* [How to find a saved block id][qwilr-docs-find-saved-block-id]

See sample below:
```typescript
const response = await httpClient.post("/v1/projects", {
  "blocks": [
    "oqa9EsmipR_T5hayLiaKKkRIJGjb6A",
    "oqa9ErfvpR_T5hayscdKK1234GjbGH"
  ],
  "name": "New page from the template"
});

response.data // contains json representation of created project
```

You can find full sample at `src/2-create-from-blocks.ts`.

## Substitutions
`1-substiutions.ts` script will create a page from a template and runs replacement for custom tokens.

---
Running the script:
```shell
$ yarn substitutions
```
---
The output for the script command is json representation of created project. It's the same as in [first sample](#create-a-page-from-a-template).

### Using `POST /v1/projects` with substitutions
To create a page from a template you need to make a POST request to `/v1/projects` endpoint with template id and list of substitutions.

If you don't know how to work with custom tokens, read:
* [Using Custom Tokens][qwilr-docs-custom-tokens]

See sample below:
```typescript
const response = await httpClient.post("/v1/projects", {
  "templateId": "5f89619f457c29e007503d61",
  "name": "New page with custom tokens",
  "substitutions": {
    "sampleToken": "Sample Replaced Text"
  }
});

response.data // contains json representation of created project
```

You can find full sample at `src/3-substitutions.ts`.

## Webhooks
TBD

## Error handling
Qwilr uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.), and codes in the 5xx range indicate an error with Qwilr's servers.

We mention only base HTTP response codes here.
Full documentation can be found [here][qwilr-documentation].

| HTTP Code | HTTP   | Description |
| --------- | ------ | ----------- |
| 200 | OK           | The request has been handled properly or resource updated |
| 201 | Success      | The resource has been created |
| 400 | Bad Request  | Check the “message” field that is returned with this error |
| 401 | Unauthorized | Please check that your Authorization header is present and that the value is “Bearer yourSecretApiKey” |
| 403 | Forbidden    | No permission to access a resource |
| 500 | Internal Server Error | Something erroneous has occurred on our end! Please send details of the API request to [help@qwilr.com][qwilr-help-email] and we will work to unblock you and fix the issue. |

#Further Reading
* [Link1][qwilr-further-reading-1]
* [Link2][qwilr-further-reading-2]
* [Link3][qwilr-further-reading-3]

# Pull requests welcome!

Spotted an error? Something doesn't make sense? 
Send us [a pull request](https://github.com/qwilr/api-examples/pulls)! 
Please avoid making stylistic changes though -- 
they are unlikely to be accepted. 
Thanks!

# License
[Qwilr License][qwilr-license]

[openapi]: https://www.openapis.org/
[qwilr-license]: https://qwilr.com/license
[qwilr-openapi]: https://github.com/qwilr/openapi
[qwilr-help-email]: help@qwilr.com
[qwilr-sandbox-template]: https://app-sandbox.qwilr.com/pages/id
[qwilr-sandbox-account]: https://support-docs.qwilr.com/qwilr-sandbox-account
[qwilr-sandbox-template]: https://app-sandbox.qwilr.com/#/page/5f98bb7acf3b110006a05e81
[qwilr-documentation]: https://docs.qwilr.com
[qwilr-docs-getting-started]: https://docs.qwilr.com
[qwilr-docs-create-page]: https://docs.qwilr.com
[qwilr-docs-create-template]: https://docs.qwilr.com
[qwilr-docs-create-access-token]: https://docs.qwilr.com
[qwilr-docs-custom-tokens]: https://docs.qwilr.com
[qwilr-docs-find-saved-block-id]: https://docs.qwilr.com
[qwilr-docs-saved-block]: https://docs.qwilr.com
[qwilr-further-reading-1]: https://docs.qwilr.com
[qwilr-further-reading-2]: https://docs.qwilr.com
[qwilr-further-reading-3]: https://docs.qwilr.com
