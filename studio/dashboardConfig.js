export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6156d0f0e27ee9a3ea658a86',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7s7bg4kv',
                  apiId: '327e9b3e-5bce-4675-aa30-e7c447a13f1d'
                },
                {
                  buildHookId: '6156d0ef11b54ac5b0078946',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tvv5rk6j',
                  apiId: '77ad6b53-da28-420a-83d4-dd8f1f09641d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MartinaT85/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tvv5rk6j.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
