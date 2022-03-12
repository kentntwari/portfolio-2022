export function homeDemo() {
  return `*[_type=='demo']{
    'snippet_1':{
      'context':snippet_1.context,
      'snippet':snippet_1.snippet.asset->url,
      'title':snippet_1.title  
    },
    'snippet_2':{
      'context':snippet_2.context,
      'snippet':snippet_2.snippet.asset->url,
      'title':snippet_2.title  
    },
    'snippet_3':{
      'context':snippet_3.context,
      'snippet':snippet_3.snippet.asset->url,
      'title':snippet_3.title  
    },
  }[0]`;
}
