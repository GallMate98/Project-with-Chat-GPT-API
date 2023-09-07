const recipesData = {
  "text": "[\n\t{\n\t\t\"name\": \"Apple Banana Smoothie\",\n\t\t\"preparationTime\": \"5 minutes\",\n\t\t\"ingredients\": [\"apple\", \"banana\"],\n\t\t\"preparationDetails\": \"In a blender, combine 1 apple, 1 banana, and 1 cup of ice. Blend until smooth. Serve immediately.\"\n\t},\n\t{\n\t\t\"name\": \"Apple Banana Salad\",\n\t\t\"preparationTime\": \"10 minutes\",\n\t\t\"ingredients\": [\"apple\",\"banana\",\"letuce\"],\n\t\t\"preparationDetails\": \"In a bowl, combine 1 apple, 1 banana, and 1 cup of lettuce. Toss to combine. Serve immediately.\"\n\t},\n\t{\n\t\t\"name\": \"Apple Banana Bread\",\n\t\t\"preparationTime\": \"1 hour\",\n\t\t\"ingredients\": [\"apple\", \"banana\", \"flour\", \"sugar\", \"baking powder\"],\n\t\t\"preparationDetails\": \"In a bowl, combine 1 cup of flour, 1/2 cup of sugar, 1 teaspoon of baking powder, 1 apple, and 1 banana. Mix until combined. Pour into a greased loaf pan and bake at 350 degrees for 45 minutes. Serve warm.\"\n\t}\n]"
  };

export default (req, res) => {
  res.status(200).json(recipesData);
};