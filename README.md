<details>
  <summary>Configure webhooks</summary>

You'll want to configure the endpoint for webhooks. This webhook will be triggered throughout various stages of the pre, and post purchase stages.

For example, when a customer places a successful order, this webhook will be triggered, and it will call a function to add the order to Printful.

**The webhook URL you provide here will be your domain appended by `/api/snipcart/webhook`.**

</details>

<details>
  <summary>Enable shipping</summary>

Unless you want to cover the cost of all shipping, you should enable Shipping. Below the heading **Custom Shipping**, select **Webhooks**, and **Configure** it.

\*\*The endpoint URL you provide here will be your domain appended by `/api/snipcart/shipping`.

</details>

<details>
  <summary>Enable taxes (optional)</summary>

Similar to shipping, you can enable custom taxes via a webhook. **You should only enable this if you are VAT registered**. Make sure to inform Printful of your VAT ID.

You will want to turn on webhooks, and click **Configure**.

\*\*The endpoint URL you provide here will be your domain appended by `/api/snipcart/tax`.

The taxes you must collect are then calculated by Printful.

</details>

<details>
  <summary>Configure your payment gateway</summary>

You should enable **SCA** (Strong Customer Authentication) for purchases.

To connect a payment gateway, click on **Connect** next to the gateway, such as Stripe.

</details>

<details>
  <summary>Configure regional settings</summary>

You'll want to configure your [regional settings](https://app.snipcart.com/dashboard/settings/regional) for Snipcart. I would match the currency you buy with Printful with what you show on the store here. Printful will return a currency with your variants, this is what is added to the cart. It's important Snipcart knows about this currency, and how to format it in the cart/checkout.

</details>

<details>
  <summary>Create a recovery campaign</summary>

You should [create a new recovery campaign](https://app.snipcart.com/dashboard/campaigns/create) for abandoned carts. You can specify when this should be invoked (on orders above a certain amount), and what email is sent.

You can include a custom discount to the campaign so you can try to recover lost sales.

</details>

<details>
  <summary>Add a credit card</summary>

See [Snipcart pricing](https://snipcart.com/pricing) and add a credit card to your account. Snipcart has a monthly fee if you are below a certain sales amount.

</details>

With Snipcart you can invite multiple users to your account, configure your invoice templates, email templates, and much more. You should do all of this to ensure a great end to end experience for your customers.
