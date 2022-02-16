# cloudevents-ambient-const-enums

This is a reproduction of an issue encountered in the following issues:
- https://github.com/GoogleCloudPlatform/functions-framework-nodejs/issues/425
- https://github.com/cloudevents/sdk-javascript/issues/456

Basically, trying to use the `functions-framework-nodejs` package for its types when creating a
Cloud Function that responds to PubSub messages / CloudEvents.

## Reproduce

### Steps

```shell
npm install
```

```shell
npm test
```

### Expected

Returns without error.

### Reality

Returns with error:

```shell
> cloudevents-ambient-consts@1.0.0 test
> tsc --noEmit

node_modules/cloudevents/dist/index.d.ts(7,22): error TS2748: Cannot access ambient const enums when the '--isolatedModules' flag is provided.
```

This happens when importing either [Context](https://github.com/GoogleCloudPlatform/functions-framework-nodejs/blob/198faee40c361d345063f03b0acb31eb45b92f83/src/functions.ts#L139) from `functions-framework` or [CloudEventV1](https://github.com/cloudevents/sdk-javascript/blob/b13bde9b4967f5c8b02b788a40a89dd4cec5b78a/src/index.ts#L34) from `cloudevents`.
