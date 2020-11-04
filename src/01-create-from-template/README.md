# Creating a page from a template

The `create-from-template.ts` script will create a page from a [template][qwilr-sandbox-template].

---
Running the script:
```shell
$ yarn create-from-template
```
---
The output for the script above is a JSON representation of the created project.
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
  templateId: "5f89619f457c29e007503d61",
  name: "New page from the template"
});

response.data // contains json representation of created project
```

It is worth noting that the resulting schema of endpoint `/v1/projects` matches the API description defined [here][qwilr-openapi].

## Substitutions
In case you're using custom tokens on your template, you can use the `substitutions` field to send an array of tokens to be replaced.

If you don't know how to work with custom tokens, you can find more at:
* [Using Custom Tokens][qwilr-docs-custom-tokens]

Sample API call:
```typescript
const response = await httpClient.post("/v1/projects", {
  templateId: "5f89619f457c29e007503d61",
  name: "New page with custom tokens",
  substitutions: {
    sampleToken: "Sample Replaced Text",
  }
});

response.data // contains json representation of created project
```

[qwilr-openapi]: https://github.com/qwilr/openapi
[qwilr-sandbox-template]: https://app-sandbox.qwilr.com/#/page/5f98bb7acf3b110006a05e81
[qwilr-docs-custom-tokens]: https://docs.qwilr.com
