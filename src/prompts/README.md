# Plant Information Generator for TrueRoot.in

This directory contains tools for generating comprehensive plant information for the TrueRoot.in platform using Large Language Models (LLMs).

## Files

- `vegetable_template_prompt.js` - Contains a detailed prompt template for generating plant information following the structure defined in `src/json/vegetable/template.js`
- `usage_example.js` - Demonstrates how to use the prompt template to generate content for specific plants

## How to Use

1. Import the `generatePlantPrompt` function from `usage_example.js`:

```javascript
const { generatePlantPrompt } = require('./prompts/usage_example');
```

2. Generate a prompt for your desired plant:

```javascript
const plantName = 'brinjal'; // or any other plant
const prompt = generatePlantPrompt(plantName);
```

3. Send this prompt to your preferred LLM (e.g., GPT-4, Claude, etc.) through their API

4. The LLM will generate a complete JavaScript object following the template structure

5. Review the generated content for accuracy and completeness

6. Save the LLM's response to a new file in `src/json/vegetable/[plant-name].js`

## Example

```javascript
// Generate a prompt for brinjal
const brinjalPrompt = generatePlantPrompt('brinjal');

// Send to LLM API (implementation depends on the specific LLM service you're using)
const llmResponse = await sendToLLM(brinjalPrompt);

// Save the response to a file
const fs = require('fs');
fs.writeFileSync('src/json/vegetable/brinjal.js', llmResponse);
```

## Prompt Structure

The prompt guides the LLM to generate content that includes:

1. Basic plant information (name, alternative names, etc.)
2. SEO information (title, description, keywords)
3. Hero section content (heading, scientific name, growing conditions, etc.)
4. Social sharing information
5. Detailed "Good to Know" section (health benefits, risks, nutrition)
6. Comprehensive "How to Grow" instructions
7. Detailed "Process" section (nutritional requirements, diseases, tips, etc.)

The prompt emphasizes the need for:
- Factual accuracy based on horticultural best practices
- Adaptation to Indian climate conditions
- Inclusion of both traditional knowledge and modern scientific information
- Comprehensive coverage of the entire growing cycle
- Credible sources for health claims

## Customization

You can modify the prompt template in `vegetable_template_prompt.js` to adjust the requirements or add additional sections as needed.