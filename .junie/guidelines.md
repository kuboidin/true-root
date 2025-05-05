# True Root Development Guidelines

## About TrueRoot.in
TrueRoot.in is a platform for home or small gardeners to help them grow anything from vegetables to herbs, fruits, spices, herbs, and more. It's a hub for gardening knowledge, tips, and resources.

## Project Structure

### Key Directories

- `/src/app`: Next.js app router pages and API routes
- `/src/components`: React components organized by type
  - `/comp`: Composite components
  - `/layout`: Layout components
  - `/pages`: Page-specific components
  - `/ui`: Reusable UI components based on Radix UI primitives
- `/src/lib`: Utility libraries and integrations
  - `/supabase`: Supabase client configurations
- `/src/service`: Service layer for business logic
- `/public`: Static assets

## UI Component System

The project uses a custom UI component system built on:

1. **Radix UI Primitives**: For accessible, unstyled components
2. **Tailwind CSS**: For styling with a custom theme
3. **Custom Components**: In `/src/components/ui`

### Theming

The project uses CSS variables for theming, defined in Tailwind configuration:
- Custom color scheme with primary, secondary colors
- Various green shades (lightGreen, fadeGreen, darkGreen, lemonGreen)
- Support for dark mode

# Article Writing Tips

## Vegetables
When creating an article about perform a thorough research on how to grow a vegetable, consider the following:
1. Target:
   1. The target audience is home gardeners in India.
   2. Climate conditions are for the Indian region.
   3. Soil conditions are for the Indian region.
2. Hero Section:
   1. Plant scientific name, family, and common name.
   2. Name in Hindi, and other local names.
   3. Difficulty of growing—easy, medium, hard.
   4. Major nutrients
   5. Average harvest duration
   6. Is suitable for hydroponic cultivation?
   7. Impact on environment.
      - Fully Eco-Friendly
      - Non Eco-Friendly
      - Partially Eco-Friendly
      - Moderately Eco-Friendly
      - Mostly Eco-Friendly
   8. Quick introduction details about cron, nutritional value, health benefits, etc.
   9. Growing conditions (any three):
      - Temperature requirement
      - Moisture requirement
      - pH requirement
      - Harvest duration
   10. Soil conditions.
3. "Good to Know: Section:
   1. Health benefits: Provide at least 5 health benefits and cite trusted sources.
   2. Risks and Things to Consider. cite trusted sources.
   3. Ayurvedic/Medicinal Information.
   4. Nutritional Value (any 5): 
      - Calories
      - Proteins
      - Fats
      - Carbohydrates
      - Fiber
      - Vitamins
      - Minerals, etc.
   5. Ecological Effects: Provide at least 5 ecological effects.
      - Biodiversity Support
      - Soil Health
      - Water Usage
      - Natural pesticides
      - Sustainable Farming
      - Pollution Prevention
      - Pollution Mitigation
      - Carbon Sequestration
4. "How to grow" Section:
   1. Step by step instructions on how to grow the vegetable at home or home garden. Provide instructions for each day, from sawing seeds to harvesting.
   2. Provide tips for watering, fertilizing, pruning, etc.
   3. Provide tips for soil preparation, composting, etc.
   4. Provide tips for pest control, weed control, etc.
   5. Provide tips for disease control, etc.
   6. Provide tips for storage, preservation, etc.
5. "Growing process and schedule" section:
   1. Provide a timeline of when to sow, when to transplant, when to harvest, etc.
   2. Provide a schedule of when to water, fertilize, prune, etc.
   3. Provide a schedule of when to apply pesticides, fertilizers, etc.
   4. Provide a schedule of when to apply fertilizers, etc.
   5. What nutrients are required by plant, for what purpose, how much to use, etc.
   6. Best Soil mix information.
   7. Germination Stages and Conditions
   8. What Affects Taste and Quality of Fruit
   9. Fertilizer Requirements (organic or chemical)
   10. How to fertilize
   11. Watering Schedule
   12. Diseases - Know & Treat
   13. When to Know it’s Good for Cultivation
   14. Important Reminders/Tips at Each Stage to grow Vegetables

Provide as much details in a digestible manner, Take inspiration form existing crop articles.