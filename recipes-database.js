// Recipes Database - Comprehensive collection of recipes across all categories
const recipesDatabase = {
  breakfast: [
    {
      id: 'pancakes',
      title: 'Fluffy Blueberry Pancakes',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1200',
      prepTime: '15 min',
      cookTime: '15 min',
      serves: 4,
      quickMethod: [
        'Whisk 1 1/2 cups flour, 3 1/2 tsp baking powder, 1 tbsp sugar and 1 tsp salt.',
        'Whisk 1 1/4 cups milk, 1 egg, 3 tbsp melted butter and 1 tsp vanilla.',
        'Combine wet into dry until just mixed; fold in 1 cup blueberries.',
        'Cook 1/4 cup batter per pancake on a greased skillet until bubbles form (2–3 min); flip and cook 1–2 min more.'
      ],
      recipeFile: 'recipies/pancake.html'
    },
    {
      id: 'wrap',
      title: 'Chicken Avocado Wrap',
      image: 'https://images.unsplash.com/photo-1626707595320-19e921fc4c27?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 2,
      quickMethod: [
        'Warm 2 tortillas briefly to make them pliable.',
        'Mash 1 avocado with 1 tsp lemon juice, salt & pepper.',
        'Spread 1 tbsp mayo or yogurt on each tortilla; layer avocado, ~200 g shredded chicken, salad greens and halved cherry tomatoes.',
        'Fold sides in and roll tightly. Slice and serve.'
      ],
      recipeFile: 'recipies/wrap.html'
    },
    {
      id: 'scrambled-eggs',
      title: 'Fluffy Scrambled Eggs',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=1200',
      prepTime: '5 min',
      cookTime: '10 min',
      serves: 2,
      quickMethod: [
        'Whisk 4 eggs with 2 tbsp milk, salt, and pepper.',
        'Melt 2 tbsp butter in a non-stick pan over medium heat.',
        'Pour in eggs and stir gently every 20 seconds.',
        'Remove from heat when still slightly creamy (about 3-4 minutes). Serve immediately.'
      ],
      recipeFile: 'recipies/scrambled-eggs.html'
    },
    {
      id: 'french-toast',
      title: 'Classic French Toast',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=1200',
      prepTime: '10 min',
      cookTime: '10 min',
      serves: 4,
      quickMethod: [
        'Whisk together 3 eggs, 1 cup milk, 1 tsp vanilla, and 1 tsp cinnamon.',
        'Heat 2 tbsp butter in a skillet over medium heat.',
        'Dip 8 slices of bread into mixture, coating both sides.',
        'Cook 2-3 minutes per side until golden brown. Serve with maple syrup and berries.'
      ],
      recipeFile: 'recipies/french-toast.html'
    },
    {
      id: 'oatmeal',
      title: 'Overnight Oats',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 2,
      quickMethod: [
        'Mix 1 cup rolled oats, 1 cup milk, 1/2 cup yogurt, and 1 tbsp honey in a jar.',
        'Add 1 mashed banana, berries, and nuts.',
        'Stir well and refrigerate overnight.',
        'Serve cold or heat in microwave for 2 minutes.'
      ],
      recipeFile: 'recipies/overnight-oats.html'
    },
    {
      id: 'omelette',
      title: 'Three-Cheese Omelette',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=1200',
      prepTime: '5 min',
      cookTime: '10 min',
      serves: 1,
      quickMethod: [
        'Whisk 3 eggs with salt and pepper.',
        'Heat 1 tbsp butter in an 8-inch non-stick pan.',
        'Pour in eggs and let set for 10 seconds, then push cooked egg to the center.',
        'When mostly set, add mixed cheeses and fold. Cook 30 more seconds.'
      ],
      recipeFile: 'recipies/omelette.html'
    },
    {
      id: 'granola',
      title: 'Homemade Granola with Honey',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=1200',
      prepTime: '10 min',
      cookTime: '25 min',
      serves: 8,
      quickMethod: [
        'Mix 3 cups oats, 1 cup almonds, 1/2 cup coconut oil, 1/2 cup honey.',
        'Spread on baking sheet and bake at 325°F for 20-25 minutes, stirring halfway.',
        'Cool completely, then add dried cranberries and raisins.',
        'Store in an airtight container for up to 2 weeks.'
      ],
      recipeFile: 'recipies/granola.html'
    },
    {
      id: 'smoothie-bowl',
      title: 'Acai Smoothie Bowl',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 2,
      quickMethod: [
        'Blend 2 cups frozen berries, 1/2 cup yogurt, 1/4 cup milk until thick.',
        'Pour into bowls and top with granola, coconut flakes, and fresh berries.',
        'Drizzle with honey and serve immediately with a spoon.'
      ],
      recipeFile: 'recipies/smoothie-bowl.html'
    },
    {
      id: 'waffles',
      title: 'Crispy Belgian Waffles',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=1200',
      prepTime: '15 min',
      cookTime: '20 min',
      serves: 4,
      quickMethod: [
        'Mix 2 cups flour, 2 tsp baking powder, 1/2 tsp salt, and 2 tbsp sugar.',
        'Whisk 1 3/4 cups milk, 2 eggs, and 1/2 cup melted butter.',
        'Combine wet and dry ingredients gently.',
        'Cook in a preheated waffle iron until golden and crispy. Serve with syrup.'
      ],
      recipeFile: 'recipies/waffles.html'
    }
  ],

  lunch: [
    {
      id: 'caesar-salad',
      title: 'Classic Caesar Salad',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200',
      prepTime: '15 min',
      cookTime: '0 min',
      serves: 4,
      quickMethod: [
        'Toss 8 cups romaine lettuce with homemade or store-bought Caesar dressing.',
        'Top with croutons, Parmesan shavings, and optional grilled chicken.',
        'Season with salt, pepper, and lemon juice to taste.',
        'Serve immediately while greens are crisp.'
      ],
      recipeFile: 'recipies/caesar-salad.html'
    },
    {
      id: 'caprese-sandwich',
      title: 'Caprese Sandwich',
      image: 'https://images.unsplash.com/photo-1609007153563-68c44c60bdf0?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 2,
      quickMethod: [
        'Slice fresh mozzarella, ripe tomatoes, and fresh basil.',
        'Spread pesto or mayo on toasted ciabatta or focaccia.',
        'Layer cheese, tomatoes, basil, and balsamic glaze.',
        'Cut and serve immediately with olive oil drizzle.'
      ],
      recipeFile: 'recipies/caprese-sandwich.html'
    },
    {
      id: 'quinoa-bowl',
      title: 'Mediterranean Quinoa Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200',
      prepTime: '15 min',
      cookTime: '15 min',
      serves: 4,
      quickMethod: [
        'Cook 1 cup quinoa in 2 cups vegetable broth.',
        'Mix with diced cucumber, cherry tomatoes, red onion, and kalamata olives.',
        'Toss with olive oil, lemon juice, garlic, and oregano dressing.',
        'Top with crumbled feta cheese and fresh parsley.'
      ],
      recipeFile: 'recipies/quinoa-bowl.html'
    },
    {
      id: 'grilled-chicken-salad',
      title: 'Grilled Chicken Power Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200',
      prepTime: '20 min',
      cookTime: '15 min',
      serves: 2,
      quickMethod: [
        'Season 2 chicken breasts with olive oil, garlic, salt, and pepper; grill 6-7 min per side.',
        'Rest for 5 minutes, then slice.',
        'Toss mixed greens with beets, goat cheese, walnuts, and lemon vinaigrette.',
        'Top with sliced chicken and serve.'
      ],
      recipeFile: 'recipies/grilled-chicken-salad.html'
    },
    {
      id: 'tuna-salad',
      title: 'Classic Tuna Salad Sandwich',
      image: 'https://images.unsplash.com/photo-1609007153563-68c44c60bdf0?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 2,
      quickMethod: [
        'Mix 2 cans drained tuna, 1/4 cup mayo, diced celery, and diced red onion.',
        'Season with salt, pepper, and lemon juice.',
        'Serve on toasted bread with lettuce and tomato.',
        'Optional: add avocado or hard-boiled eggs.'
      ],
      recipeFile: 'recipies/tuna-salad.html'
    },
    {
      id: 'buddha-bowl',
      title: 'Buddha Bowl with Tahini Dressing',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200',
      prepTime: '20 min',
      cookTime: '15 min',
      serves: 2,
      quickMethod: [
        'Roast chickpeas, sweet potato cubes, and broccoli at 400°F for 15 min.',
        'Arrange with cooked grains, avocado, and raw veggies in a bowl.',
        'Whisk tahini, lemon juice, garlic, and water for dressing.',
        'Drizzle and sprinkle with seeds.'
      ],
      recipeFile: 'recipies/buddha-bowl.html'
    },
    {
      id: 'pita-wrap',
      title: 'Greek Pita Wrap',
      image: 'https://images.unsplash.com/photo-1626707595320-19e921fc4c27?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 2,
      quickMethod: [
        'Warm 2 pita breads.',
        'Spread hummus and tzatziki sauce inside.',
        'Layer grilled chicken or falafel, cucumber, tomato, red onion, and spinach.',
        'Add kalamata olives and crumbled feta. Wrap and serve.'
      ],
      recipeFile: 'recipies/pita-wrap.html'
    },
    {
      id: 'egg-salad',
      title: 'Creamy Egg Salad',
      image: 'https://images.unsplash.com/photo-1609007153563-68c44c60bdf0?w=1200',
      prepTime: '15 min',
      cookTime: '10 min',
      serves: 4,
      quickMethod: [
        'Boil 6 eggs for 10 minutes, cool, and peel.',
        'Chop eggs and mix with mayo, Dijon mustard, diced celery, and chives.',
        'Season with salt and pepper.',
        'Serve on bread, crackers, or mixed greens.'
      ],
      recipeFile: 'recipies/egg-salad.html'
    }
  ],

  dinner: [
    {
      id: 'risotto',
      title: 'Creamy Mushroom Risotto',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200',
      prepTime: '10 min',
      cookTime: '35 min',
      serves: 4,
      quickMethod: [
        'Keep 6 cups stock simmering. Sauté 200 g mushrooms in 1 tbsp oil, set aside.',
        'Softly cook 1 chopped onion in remaining oil; add 2 minced garlic cloves briefly.',
        'Stir in 300 g Arborio rice, toast 1–2 min; add 1/2 cup wine (optional) until absorbed.',
        'Add warm stock ladle by ladle, stirring often, for ~18–22 min until creamy & al dente. Stir mushrooms back in near the end, finish with butter & Parmesan.'
      ],
      recipeFile: 'recipies/risotto.html'
    },
    {
      id: 'spaghetti-carbonara',
      title: 'Spaghetti Carbonara',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200',
      prepTime: '10 min',
      cookTime: '15 min',
      serves: 4,
      quickMethod: [
        'Cook 1 lb spaghetti al dente; reserve 1 cup pasta water.',
        'Fry 6 oz pancetta or bacon until crispy; set aside.',
        'Whisk 4 egg yolks, 1 cup Parmesan, and black pepper together.',
        'Toss hot pasta with pancetta and fat, remove from heat, add egg mixture quickly while tossing, add pasta water as needed.'
      ],
      recipeFile: 'recipies/carbonara.html'
    },
    {
      id: 'beef-stew',
      title: 'Classic Beef Stew',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=1200',
      prepTime: '20 min',
      cookTime: '2 hours',
      serves: 6,
      quickMethod: [
        'Brown 2 lbs beef chuck in a pot; remove and set aside.',
        'Sauté onions, carrots, and celery; add tomato paste and cook 2 minutes.',
        'Return beef, add 4 cups beef broth, 1 cup red wine, herbs, and bring to simmer.',
        'Cover and cook 1.5-2 hours until beef is tender; add potatoes last 30 minutes.'
      ],
      recipeFile: 'recipies/beef-stew.html'
    },
    {
      id: 'grilled-salmon',
      title: 'Herb-Crusted Grilled Salmon',
      image: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=1200',
      prepTime: '10 min',
      cookTime: '12 min',
      serves: 4,
      quickMethod: [
        'Mix fresh herbs, lemon zest, garlic, olive oil, salt, and pepper.',
        'Coat 4 salmon fillets with herb mixture.',
        'Grill over medium-high heat for 5-6 minutes per side.',
        'Serve with roasted vegetables and lemon wedges.'
      ],
      recipeFile: 'recipies/grilled-salmon.html'
    },
    {
      id: 'chicken-parmesan',
      title: 'Chicken Parmesan',
      image: 'https://images.unsplash.com/photo-1606787620284-3ed48ce4a5d0?w=1200',
      prepTime: '15 min',
      cookTime: '25 min',
      serves: 4,
      quickMethod: [
        'Pound 4 chicken breasts thin, dip in egg, then coat with breadcrumbs mixed with Parmesan.',
        'Fry in olive oil until golden on both sides.',
        'Top each with marinara sauce and mozzarella; bake at 400°F for 10 minutes.',
        'Serve over pasta with fresh basil.'
      ],
      recipeFile: 'recipies/chicken-parmesan.html'
    },
    {
      id: 'beef-tacos',
      title: 'Seasoned Beef Tacos',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200',
      prepTime: '10 min',
      cookTime: '15 min',
      serves: 4,
      quickMethod: [
        'Brown 1.5 lbs ground beef with onion.',
        'Add taco seasoning and 1/4 cup water; simmer 5 minutes.',
        'Warm taco shells or tortillas.',
        'Serve with lettuce, tomato, cheese, sour cream, and salsa.'
      ],
      recipeFile: 'recipies/beef-tacos.html'
    },
    {
      id: 'vegetable-stir-fry',
      title: 'Asian Vegetable Stir-Fry',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=1200',
      prepTime: '15 min',
      cookTime: '10 min',
      serves: 4,
      quickMethod: [
        'Heat 2 tbsp oil in a wok or large skillet over high heat.',
        'Stir-fry garlic and ginger for 30 seconds; add broccoli, peppers, snap peas.',
        'Cook 5 minutes; add soy sauce, sesame oil, and cooked rice or noodles.',
        'Toss and serve with sesame seeds and green onions.'
      ],
      recipeFile: 'recipies/vegetable-stir-fry.html'
    },
    {
      id: 'shrimp-pasta',
      title: 'Garlic Butter Shrimp Pasta',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200',
      prepTime: '10 min',
      cookTime: '15 min',
      serves: 4,
      quickMethod: [
        'Cook 1 lb linguine al dente; drain.',
        'In the same pot, melt 4 tbsp butter and sauté 4 minced garlic cloves.',
        'Add 1 lb shrimp and cook until pink (3-4 min); add pasta, lemon juice, red pepper flakes.',
        'Toss with fresh parsley and serve immediately.'
      ],
      recipeFile: 'recipies/shrimp-pasta.html'
    },
    {
      id: 'roast-chicken',
      title: 'Whole Roasted Chicken',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=1200',
      prepTime: '15 min',
      cookTime: '1.5 hours',
      serves: 4,
      quickMethod: [
        'Pat a 4-5 lb chicken dry; season inside and out with salt, pepper, and herbs.',
        'Place on a roasting pan with lemon halves and aromatics inside.',
        'Roast at 425°F for 1.5 hours, basting every 30 minutes.',
        'Rest 10 minutes before carving. Check internal temp reaches 165°F.'
      ],
      recipeFile: 'recipies/roast-chicken.html'
    }
  ],

  desserts: [
    {
      id: 'lava-cake',
      title: 'Chocolate Lava Cake',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a3cbbb49?w=1200',
      prepTime: '15 min',
      cookTime: '12 min',
      serves: 4,
      quickMethod: [
        'Preheat oven to 425°F (220°C). Butter and dust four ramekins.',
        'Melt 115 g dark chocolate with 115 g butter; cool slightly.',
        'Whisk 2 eggs + 2 yolks with 1/2 cup sugar; fold in chocolate and 2 tbsp flour.',
        'Divide batter into ramekins; bake 10–13 min until edges set and centers jiggle. Invert and serve immediately.'
      ],
      recipeFile: 'recipies/lavacake.html'
    },
    {
      id: 'cheesecake',
      title: 'Classic New York Cheesecake',
      image: 'https://images.unsplash.com/photo-1610707267537-b85fab00c77b?w=1200',
      prepTime: '20 min',
      cookTime: '60 min',
      serves: 12,
      quickMethod: [
        'Mix 2 cups graham cracker crumbs with 6 tbsp melted butter; press into springform pan.',
        'Beat 32 oz cream cheese until smooth; add 1 cup sugar, then 4 eggs one at a time.',
        'Add 2 tsp vanilla; pour over crust.',
        'Bake at 325°F for 55-60 minutes (top may still jiggle slightly). Cool completely, then refrigerate overnight.'
      ],
      recipeFile: 'recipies/cheesecake.html'
    },
    {
      id: 'chocolate-chip-cookies',
      title: 'Classic Chocolate Chip Cookies',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200',
      prepTime: '15 min',
      cookTime: '12 min',
      serves: 24,
      quickMethod: [
        'Cream 1 cup butter with 3/4 cup white sugar and 3/4 cup brown sugar.',
        'Beat in 2 eggs and 2 tsp vanilla.',
        'Mix 2 1/4 cups flour, 1 tsp baking soda, and 1 tsp salt; combine with butter mixture.',
        'Fold in 2 cups chocolate chips. Bake at 375°F for 10-12 minutes. Cool on baking sheet.'
      ],
      recipeFile: 'recipies/chocolate-chip-cookies.html'
    },
    {
      id: 'tiramisu',
      title: 'Classic Tiramisu',
      image: 'https://images.unsplash.com/photo-1571115176098-24ec42ed204d?w=1200',
      prepTime: '30 min',
      cookTime: '0 min',
      serves: 8,
      quickMethod: [
        'Beat 6 egg yolks with 3/4 cup sugar until pale and thick.',
        'Fold in 1 lb mascarpone cheese until smooth.',
        'Whip 1 cup heavy cream to stiff peaks; fold into mascarpone mixture.',
        'Dip 40 ladyfinger cookies in strong coffee mixed with 3 tbsp liqueur; layer with cream. Dust with cocoa. Refrigerate 4 hours.'
      ],
      recipeFile: 'recipies/tiramisu.html'
    },
    {
      id: 'brownies',
      title: 'Fudgy Chocolate Brownies',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200',
      prepTime: '15 min',
      cookTime: '25 min',
      serves: 16,
      quickMethod: [
        'Melt 8 oz dark chocolate with 1/2 cup butter.',
        'Whisk 3/4 cup sugar with 2 eggs and 1 tsp vanilla; stir in chocolate.',
        'Mix 3/4 cup flour with 1/4 cup cocoa powder and 1/2 tsp salt; fold into chocolate mixture.',
        'Bake at 350°F for 20-25 minutes. Cool completely before cutting.'
      ],
      recipeFile: 'recipies/brownies.html'
    },
    {
      id: 'strawberry-shortcake',
      title: 'Strawberry Shortcake',
      image: 'https://images.unsplash.com/photo-1585721694220-67825ba17e74?w=1200',
      prepTime: '20 min',
      cookTime: '20 min',
      serves: 8,
      quickMethod: [
        'Bake 2 round sponge cakes and let cool.',
        'Whip 2 cups heavy cream with 3 tbsp sugar until stiff peaks form.',
        'Toss 2 lbs sliced strawberries with 1/4 cup sugar; let sit 15 minutes.',
        'Layer cakes with whipped cream and strawberries; top with whole berries.'
      ],
      recipeFile: 'recipies/strawberry-shortcake.html'
    },
    {
      id: 'apple-pie',
      title: 'Traditional Apple Pie',
      image: 'https://images.unsplash.com/photo-1568571933382-74d440642117?w=1200',
      prepTime: '30 min',
      cookTime: '45 min',
      serves: 8,
      quickMethod: [
        'Peel, core, and slice 8 apples; toss with 1/2 cup sugar, 1 tbsp flour, and cinnamon.',
        'Fill unbaked pie crust with apple mixture.',
        'Add top crust, seal edges, and cut vents.',
        'Bake at 350°F for 45 minutes until golden. Cool before serving.'
      ],
      recipeFile: 'recipies/apple-pie.html'
    },
    {
      id: 'vanilla-ice-cream',
      title: 'Homemade Vanilla Ice Cream',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e157?w=1200',
      prepTime: '20 min',
      cookTime: '0 min',
      serves: 8,
      quickMethod: [
        'Heat 2 cups heavy cream with 1 cup whole milk (do not boil).',
        'Whisk 6 egg yolks with 3/4 cup sugar until pale; slowly add hot cream while whisking.',
        'Pour through a strainer; chill completely (4 hours).',
        'Churn in ice cream maker according to manufacturer instructions; freeze until firm.'
      ],
      recipeFile: 'recipies/vanilla-ice-cream.html'
    },
    {
      id: 'lemon-bars',
      title: 'Zesty Lemon Bars',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200',
      prepTime: '15 min',
      cookTime: '30 min',
      serves: 16,
      quickMethod: [
        'Press 2 cups flour, 1/2 cup powdered sugar, and 1 cup softened butter into a 9x13 pan.',
        'Bake at 350°F for 12 minutes.',
        'Whisk 4 eggs, 2 cups sugar, 1/3 cup lemon juice, and 3 tbsp flour; pour over crust.',
        'Bake 15-18 minutes. Cool and dust with powdered sugar before serving.'
      ],
      recipeFile: 'recipies/lemon-bars.html'
    }
  ],

  snacks: [
    {
      id: 'hummus',
      title: 'Homemade Chickpea Hummus',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd37b10?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 8,
      quickMethod: [
        'Drain 2 cans chickpeas, reserving 1/4 cup liquid.',
        'Blend chickpeas with 4 tbsp tahini, 3 tbsp lemon juice, 2 minced garlic cloves, and salt.',
        'Add reserved liquid gradually until desired consistency.',
        'Drizzle with olive oil and sprinkle with paprika. Serve with pita and vegetables.'
      ],
      recipeFile: 'recipies/hummus.html'
    },
    {
      id: 'guacamole',
      title: 'Fresh Guacamole',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd37b10?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 4,
      quickMethod: [
        'Cut 3 ripe avocados in half, scoop into a bowl.',
        'Add 1/2 diced red onion, 2 diced tomatoes, cilantro, and lime juice.',
        'Mash to desired consistency; season with salt and pepper.',
        'Serve immediately with tortilla chips.'
      ],
      recipeFile: 'recipies/guacamole.html'
    },
    {
      id: 'trail-mix',
      title: 'Custom Trail Mix',
      image: 'https://images.unsplash.com/photo-1585518419759-1b4e9e9b6d8e?w=1200',
      prepTime: '10 min',
      cookTime: '0 min',
      serves: 10,
      quickMethod: [
        'Mix 1 cup almonds, 1 cup cashews, 1 cup raisins, and 1 cup dark chocolate chips.',
        'Add 1/2 cup dried cranberries and 1/2 cup coconut flakes.',
        'Store in airtight containers.',
        'Perfect for snacking on the go!'
      ],
      recipeFile: 'recipies/trail-mix.html'
    },
    {
      id: 'popcorn',
      title: 'Homemade Buttered Popcorn',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd37b10?w=1200',
      prepTime: '5 min',
      cookTime: '10 min',
      serves: 4,
      quickMethod: [
        'Heat 3 tbsp oil in a large pot with a lid over medium-high heat.',
        'Add 1/2 cup popcorn kernels and cover.',
        'Shake occasionally until popping slows down (about 5 minutes).',
        'Drizzle with melted butter and season with salt and nutritional yeast.'
      ],
      recipeFile: 'recipies/popcorn.html'
    },
    {
      id: 'energy-balls',
      title: 'No-Bake Energy Balls',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd37b10?w=1200',
      prepTime: '15 min',
      cookTime: '0 min',
      serves: 12,
      quickMethod: [
        'Mix 1 cup peanut butter, 2 cups powdered sugar, and 1 cup graham cracker crumbs.',
        'Roll into 1-inch balls and chill for 30 minutes.',
        'Dip in melted chocolate and return to fridge.',
        'Store in an airtight container for up to 1 week.'
      ],
      recipeFile: 'recipies/energy-balls.html'
    },
    {
      id: 'cheese-board',
      title: 'Elegant Cheese Board',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd37b10?w=1200',
      prepTime: '15 min',
      cookTime: '0 min',
      serves: 8,
      quickMethod: [
        'Select 4-5 cheeses of varying types (hard, soft, blue).',
        'Add cured meats, nuts, dried fruits, and fresh fruits.',
        'Include crackers, bread, and olives.',
        'Arrange on a wooden board and serve at room temperature.'
      ],
      recipeFile: 'recipies/cheese-board.html'
    }
  ]
};

// Function to get all recipes
function getAllRecipes() {
  return recipesDatabase;
}

// Function to get recipes by category
function getRecipesByCategory(category) {
  return recipesDatabase[category] || [];
}

// Function to search recipes by title
function searchRecipes(query) {
  const searchTerm = query.toLowerCase();
  const results = [];
  
  for (const category in recipesDatabase) {
    recipesDatabase[category].forEach(recipe => {
      if (recipe.title.toLowerCase().includes(searchTerm)) {
        results.push({ ...recipe, category });
      }
    });
  }
  
  return results;
}

// Function to get a single recipe by ID and category
function getRecipeById(category, id) {
  const recipes = recipesDatabase[category] || [];
  return recipes.find(recipe => recipe.id === id);
}

// Export for use in Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    recipesDatabase,
    getAllRecipes,
    getRecipesByCategory,
    searchRecipes,
    getRecipeById
  };
}
