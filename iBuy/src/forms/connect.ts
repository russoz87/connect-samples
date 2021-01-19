import {FormDefinition} from '@shipengine/connect';

const connectionForm: FormDefinition = {
  dataSchema: {
    title: 'Login Form Example',
    description: 'Connect to your account.',
    type: 'object',
  },
  uiSchema: {},
};

export default connectionForm;