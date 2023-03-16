# Abandoned Checkouts

## About

This app displays data about checkouts that for some reason haven't been turned into orders.

## Development

`pnpm dev`

To embed it in your Dashboard hosted on Saleor Cloud, you need to make your environment public.

`saleor app tunnel 3000`

Your local application should be available now to the outside world (Saleor instance) for accepting all the events via webhooks.

## Test

```graphql
mutation CheckoutCreate {
  checkoutCreate(
    input: {
      channel: "default-channel"
      email: "myname@example.com"
      lines: []
    }
  ) {
    checkout {
      token
    }
    errors {
      field
      code
    }
  }
}
```
