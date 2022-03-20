module.exports = {
    extends: 'airbnb-base',
    env: {
      browser: true,
      node: true
    },
    'parserOptions': {                                               
      // 'ecmaVersion': 6,                                              
      'sourceType': 'script',                                        
      // 'ecmaFeatures': {                                              
      //  'modules': false                                             
      // }                                                              
    },                      
    rules:{
      'linebreak-style': 0,
      'no-console': 0,
      'no-param-reassign': 0,
      'strict': [2, 'global']
    }
  };