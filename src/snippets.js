/**
 * Code snippets used in the CodePanel components
 * These are displayed with scroll-based reveal animations
 */

// Spacer to add vertical padding to code snippets
const spacer = '\n\n\n\n\n';

// React/TailwindCSS example snippet
const react = `\
// App.js
const App = props => {
  return (
    <div>
      <h1>Josh & React JS</h1>
      <div>
        <h2>Tailwind CSS</h2>
        <h2>react-spring</h2>
        <h2>lottie</h2>
      </div>
    </div>
  );
};
${spacer}`;

// GraphQL/Amplify schema example snippet
const amplify = `\
# schema.graphql
type Employee {
  salary: BigInt
  status: String
  reach: Int
}

type Employer @aws_cognito_user_pools {
  offerAt: AWSTimestamp
  impressions: [String]
  results: String
}
${spacer}`;

// Serverless YAML configuration example snippet
const serverless = `\
# serverless.yml
test:
  service: notifications
  variablesResolutionMode: 20210326
  projectDir: ../
  package:
    individually: true
  plugins:
    - serverless-webpack
  provider:
    name: aws
    stage: !Ref uponRequest
    runtime: "nodejs14.x"
    region: "us-east-1"
${spacer}`;

// Markdown example snippet for ai-markdown project
const markdown = `\
# AI Markdown Notes

## Features
- **AI-Powered Analysis**: Get insights from your notes
- **Clean Interface**: Simple, distraction-free writing
- **Responsive Design**: Works on all devices

\`\`\`javascript
// Example usage
const note = analyzeNote(content);
console.log(note.insights);
\`\`\`
${spacer}`;

export const snippets = {
  react,
  serverless,
  amplify,
  markdown,
};
