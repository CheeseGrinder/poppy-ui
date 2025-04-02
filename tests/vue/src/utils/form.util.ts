import { type ComputedRef, type Reactive, type Ref, computed, reactive, ref } from 'vue';

type SubmitUrl = string | (() => string);
export interface UseForm<Fields extends object> {
  isSubmiting: Ref<boolean>;
  isFinished: Ref<boolean>;
  hasError: ComputedRef<boolean>;
  fields: Reactive<{ [K in keyof Fields]: Fields[K] }>;
  response: Ref<unknown | null>;
  reset(): void;
  submit(url: string, init?: RequestInit): Promise<unknown>;
}

export function useForm<F extends object>(values?: F): UseForm<F> {
  const isSubmiting = ref(false);
  const isFinished = ref(false);

  const fields = reactive({} as {
    [K in keyof F]: F[K];
  });
  for (const key in values) {
    // @ts-ignore
    fields[key] = values[key];
  }

  const response = ref<unknown>(null);
  const errors = ref<Error | null>(null);
  const hasError = computed(() => errors.value !== null);

  async function submit<R = unknown>(url: SubmitUrl, init?: RequestInit): Promise<R> {
    isFinished.value = false;
    isSubmiting.value = true;

    const body = createBody({ ...fields });
    const headers: HeadersInit = body instanceof FormData ? {} : { 'Content-Type': 'application/json;charset=utf-8' };
    const endpoint = typeof url === 'string' ? url : url();

    return fetch(endpoint, {
      method: 'POST',
      ...init,
      headers: {
        ...init?.headers,
        ...headers,
      },
      body,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response.json();
      })
      .then(json => {
        response.value = json;
        return json;
      })
      .catch(cause => {
        errors.value = cause;
        console.error(cause);
      })
      .finally(() => {
        isSubmiting.value = false;
        isFinished.value = true;
      });
  }

  function reset(): void {
    for (const key in values) {
      // @ts-ignore
      fields[key] = values[key];
    }
    response.value = null;
    errors.value = null;
    isSubmiting.value = false;
    isFinished.value = false;
  }

  return {
    isSubmiting,
    isFinished,
    fields,
    hasError,
    response,
    submit,
    reset,
  };
}

export function createBody(data: object): FormData | string {
  if (data instanceof FormData) {
    return data;
  }

  const hasFile = Object.values(data).some(value => {
    return value instanceof File;
  });
  if (!hasFile) {
    // @ts-ignore
    data.id = undefined;
    // @ts-ignore
    data.slug = undefined;
    // @ts-ignore
    data.createdAt = undefined;
    // @ts-ignore
    data.updatedAt = undefined;

    return JSON.stringify(data);
  }

  const form = new FormData();
  const flat = flatten(data);
  for (const [key, value] of flat) {
    form.set(key, value);
  }

  form.delete('id');
  form.delete('slug');
  form.delete('createdAt');
  form.delete('updatedAt');
  return form;
}

function* flatten<T extends object>(
  data: T,
  prefix = '',
  result: Record<string, unknown> = {},
): Generator<[string, any]> {
  if (data instanceof File) {
    yield [prefix, data];
  }

  for (const key in data) {
    if (!(key in data)) {
      continue;
    }
    const newKey = prefix ? `${prefix}.${key}` : key;
    const value = data[key];

    if (typeof value === 'object' && value !== null && !(value instanceof File)) {
      flatten(value, newKey, result);
    } else {
      yield [newKey, value];
    }
  }
}
