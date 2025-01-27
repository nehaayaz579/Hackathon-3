export const category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (rule) => rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "string",
            validation: (rule) => rule.required(),
            description: "A unique URL-friendly identifier for this category"
        },
        {
            name: "image",
            title: "Category Image",
            type: "image",
            description: "An image representing the category"
        },
        {
            name: "parentCategory",
            title: "Parent Category",
            type: "reference",
            to: [{ type: "category" }],
            description: "If this category is a subcategory, select its parent category"
        }
    ]
}
