export const order = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "orderNumber",
            title: "Order Number",
            type: "string",
            validation: (rule) => rule.required(),
            description: "Unique order identifier"
        },
        {
            name: "customerName",
            title: "Customer Name",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "customerEmail",
            title: "Customer Email",
            type: "string",
            validation: (rule) => rule.required().email()
        },
        {
            name: "shippingAddress",
            title: "Shipping Address",
            type: "text",
            validation: (rule) => rule.required()
        },
        {
            name: "products",
            title: "Products",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "product",
                            title: "Product",
                            type: "reference",
                            to: [{ type: "product" }],
                            validation: (rule) => rule.required()
                        },
                        {
                            name: "quantity",
                            title: "Quantity",
                            type: "number",
                            validation: (rule) => rule.required()
                        },
                        {
                            name: "price",
                            title: "Price",
                            type: "number",
                            validation: (rule) => rule.required()
                        }
                    ]
                }
            ]
        },
        {
            name: "totalAmount",
            title: "Total Amount",
            type: "number",
            validation: (rule) => rule.required(),
            description: "Total price of all the products in the order"
        },
        {
            name: "orderStatus",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Shipped", value: "shipped" },
                    { title: "Delivered", value: "delivered" },
                    { title: "Cancelled", value: "cancelled" }
                ]
            },
            validation: (rule) => rule.required()
        },
        {
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
            validation: (rule) => rule.required()
        }
    ]
}
