# Creating a page from saved blocks

The `create-from-blocks.ts` script will create a page from saved blocks specified in the configs.

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
The output for the script command is a JSON representation of the created project. It's the same as in the project creation from template [example](../01-create-from-template/README.md).


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
  blocks: [
    "oqa9EsmipR_T5hayLiaKKkRIJGjb6A",
    "oqa9ErfvpR_T5hayscdKK1234GjbGH"
  ],
  name: "New page from the template"
});

response.data // contains json representation of created project
```

### Substitutions
In case you're using custom tokens on your template, you can use the `substitutions` field to send an array of tokens to be replaced.

Sample API call:
```typescript
const response = await httpClient.post("/v1/projects", {
  blocks: [
  "oqa9EsmipR_T5hayLiaKKkRIJGjb6A",
  "oqa9ErfvpR_T5hayscdKK1234GjbGH"
],
  name: "New page with custom tokens",
  substitutions: {
    sampleToken: "Sample Replaced Text",
  }
});

response.data // contains json representation of created project
```

[qwilr-docs-find-saved-block-id]: https://docs.qwilr.com
[qwilr-docs-saved-block]: https://docs.qwilr.com
