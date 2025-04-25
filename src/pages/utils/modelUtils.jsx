import * as tf from "@tensorflow/tfjs"

// Function to convert and save Keras models to TensorFlow.js format
// This would typically be done in a Python environment before deploying
export const convertKerasModels = async () => {
  // This is a placeholder function to document the process
  // In reality, you would use the tensorflowjs_converter in Python:
  //
  // !pip install tensorflowjs
  // !tensorflowjs_converter --input_format keras /path/to/model.keras /path/to/output_folder

  console.log("Model conversion should be done in Python environment before deployment")
}

// Function to load a model from a URL
export const loadModel = async (modelUrl) => {
  try {
    const model = await tf.loadLayersModel(modelUrl)
    return model
  } catch (error) {
    console.error(`Error loading model from ${modelUrl}:`, error)
    throw error
  }
}

// Function to preprocess an image for model input
export const preprocessImage = async (imageElement, targetSize = [224, 224]) => {
  return tf.tidy(() => {
    // Read the image data
    const img = tf.browser.fromPixels(imageElement)

    // Resize the image
    const resized = tf.image.resizeBilinear(img, targetSize)

    // Expand dimensions to create a batch
    const expanded = resized.expandDims(0)

    // Normalize pixel values to [0, 1]
    const normalized = expanded.div(tf.scalar(255))

    return normalized
  })
}

// Function to make predictions with an ensemble of models
export const ensemblePrediction = async (image, models, classNames) => {
  const predictions = await Promise.all(
    models.map(async (model) => {
      const prediction = await model.predict(image).data()
      return Array.from(prediction)
    }),
  )

  // Average the predictions
  const numClasses = predictions[0].length
  const ensemblePreds = new Array(numClasses).fill(0)

  for (let i = 0; i < numClasses; i++) {
    for (let j = 0; j < predictions.length; j++) {
      ensemblePreds[i] += predictions[j][i]
    }
    ensemblePreds[i] /= predictions.length
  }

  // Get the predicted class
  const maxIndex = ensemblePreds.indexOf(Math.max(...ensemblePreds))
  const predictedClass = classNames[maxIndex]

  return {
    class: predictedClass,
    confidence: ensemblePreds[maxIndex],
    probabilities: ensemblePreds,
  }
}

// Function to clean up models and tensors
export const cleanupModels = (models) => {
  models.forEach((model) => {
    if (model) {
      model.dispose()
    }
  })
}
