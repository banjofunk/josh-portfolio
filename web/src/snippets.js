const react = `const App = props => {
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
`;

const amplify = `$util.defaultIfNull($ctx.args.input, {})
$util.defaultIfNull($ctx.stash.defaultValues, {})

#set( $createdAt = $util.time.nowISO8601() )
#set( $id = $util.defaultIfNull($ctx.args.input.get("id"), $util.autoId()) )
#set( $orgId = $ctx.args.input.get("organizationId") )
#set( $teamId = $ctx.args.input.get("teamId") )
`;

const serverless = `test:
  service: notifications
  variablesResolutionMode: 20210326
  projectDir: ../
  package:
    individually: true
  plugins:
    - serverless-webpack
  provider:
    name: aws
    runtime: nodejs14.x
    region: "us-east-1"
    stage: test

`;

export const snippets = {
  react,
  serverless,
  amplify,
};
