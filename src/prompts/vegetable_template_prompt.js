/**
 * Prompt template for generating plant information for TrueRoot.in
 * This prompt guides an LLM to create detailed content about a specific plant
 * following the structure defined in src/json/vegetable/template.js
 */

const vegetableTemplatePrompt = `
# Prompt for Generating Plant Information Following TrueRoot.in Template

## Task Description
You are tasked with creating comprehensive, accurate, and detailed information about [PLANT_NAME] for TrueRoot.in, a platform for home gardeners in India. Your response must strictly follow the JSON structure defined in the template and should be inspired by the example of tomatoes.js.

## Target Audience
Home gardeners in India looking for detailed guidance on growing [PLANT_NAME] in Indian climate conditions and soil types.

## Output Format
Generate a complete JavaScript object following the exact structure of the template.js file. The output should be ready to use as a drop-in replacement in the TrueRoot.in codebase.

## Required Sections
Your response must include ALL of the following sections with detailed, accurate information specific to [PLANT_NAME]:

1. **Basic Plant Information**
   - Name (plural and singular forms)
   - Alternative names (including Hindi and regional Indian names)
   - URL path
   - Publication dates
   - Search keywords

2. **SEO Information**
   - Title (compelling, under 60 characters)
   - Meta description (150-160 characters)
   - Keywords (at least 10-15 relevant terms)

3. **Hero Section**
   - Heading with English and Hindi names
   - Scientific name and classification
   - Eco-friendliness score (1-5) with justification
   - 3 key points about the plant
   - Brief description (5-6 lines covering growing difficulty, nutritional benefits, culinary uses, Ayurvedic properties)
   - Growing conditions (temperature, pH, harvest time)
   - Soil requirements

4. **Social Sharing Information**
   - Sharing text (under 100 characters)
   - Email subject (40-60 characters)
   - Hashtags (4-6 relevant tags)

5. **Good to Know Section**
   - Health benefits (at least 5 with scientific sources)
   - Risks and precautions
   - Nutritional information (at least 5 nutrients with values)
   - Ecological effects (at least 5 distinct environmental impacts)

6. **How to Grow Section**
   - Detailed day-by-day or stage-by-stage growing instructions
   - At least 8-10 steps from seed to harvest
   - Include specific details for Indian growing conditions
   - Cover seeding, transplanting, care, and harvesting

7. **Process Section**
   - Growing overview
   - Key points about plant lifecycle
   - Nutritional requirements
   - Seeding process details
   - Germination stages
   - Factors affecting quality
   - Fertilizer requirements (organic and chemical)
   - Watering schedule
   - Common diseases and treatments
   - Weeding and caring instructions
   - Harvest readiness indicators
   - General growing tips

## Guidelines for Quality Content
1. Be specific and detailed - avoid vague or general statements
2. Include precise measurements, timings, and quantities
3. Provide plant-specific information based on scientific research
4. Adapt all growing instructions for Indian climate conditions
5. Include citations for health benefits and nutritional information
6. Focus on organic and sustainable growing practices when possible
7. Address common problems and solutions specific to [PLANT_NAME]
8. Use clear, actionable language that home gardeners can easily follow

## Example Structure Reference
Use the structure from tomatoes.js as a reference, but create unique content specific to [PLANT_NAME]. Do not copy content from the tomato example - the growing requirements, benefits, and care instructions for [PLANT_NAME] will be different.

## Important Notes
- The content must be factually accurate and based on horticultural best practices
- All growing instructions must be tailored to Indian climate conditions
- Include both traditional knowledge and modern scientific information
- Provide comprehensive information that covers the entire growing cycle
- Ensure all health claims are supported by credible sources
- The final output should be complete and ready to use without further editing

Please generate a comprehensive, accurate, and detailed JavaScript object for [PLANT_NAME] following all the requirements above.
`;

module.exports = vegetableTemplatePrompt;