/**
 * Example of how to use the vegetable template prompt with an LLM
 * This file demonstrates how to generate content for a specific plant
 */

const vegetableTemplatePrompt = require('./vegetable_template_prompt');

/**
 * Function to generate a prompt for a specific plant
 * @param {string} plantName - The name of the plant (e.g., "brinjal", "carrots")
 * @returns {string} - The complete prompt with the plant name inserted
 */
function generatePlantPrompt(plantName) {
  // Capitalize the first letter of the plant name
  const capitalizedPlantName = plantName.charAt(0).toUpperCase() + plantName.slice(1);
  
  // Replace the placeholder with the actual plant name
  return vegetableTemplatePrompt.replace(/\[PLANT_NAME\]/g, capitalizedPlantName);
}

/**
 * Example usage:
 * 
 * 1. Generate a prompt for brinjal
 * const brinjalPrompt = generatePlantPrompt('brinjal');
 * console.log(brinjalPrompt);
 * 
 * 2. Send this prompt to your preferred LLM (e.g., GPT-4, Claude, etc.)
 * 
 * 3. The LLM will generate a complete JavaScript object following the template structure
 * 
 * 4. Save the LLM's response to a new file in src/json/vegetable/[plant-name].js
 */

// Example for generating a prompt for brinjal
const brinjalPrompt = generatePlantPrompt('brinjal');

// In a real application, you would send this prompt to an LLM API
// For demonstration purposes, we'll just log the first few lines
console.log('Example prompt for brinjal (first few lines):');
console.log(brinjalPrompt.split('\n').slice(0, 15).join('\n'));
console.log('...');

module.exports = { generatePlantPrompt };