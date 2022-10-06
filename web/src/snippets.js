const spacer = '\n\n\n\n\n';

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

const amplify = `\
# schema.graphql
type ForecastResult {
  adgroupType: String
  reach: Int
  salary: BigInt
}

type Forecast @aws_cognito_user_pools {
  requestedAt: AWSTimestamp
  createdAt: AWSTimestamp
  impressions: Int
  results: [ForecastResult]
}
${spacer}`;

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
    runtime: "nodejs14.x"
    region: "us-east-1"
    stage: test
${spacer}`;

export const snippets = {
  react,
  serverless,
  amplify,
};
