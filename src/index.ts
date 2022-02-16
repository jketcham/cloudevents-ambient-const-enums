import type { CloudEventV1 } from 'cloudevents';
import type { Context } from '@google-cloud/functions-framework';

export function handleWithCloudEvent(context: CloudEventV1<unknown>) {
  console.log({ context });
}

export function handleWithContext(context: Context) {
  console.log({ context });
}
