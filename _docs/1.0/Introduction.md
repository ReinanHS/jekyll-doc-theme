---
layout: docs
title:  "Introduction"
date:   2020-03-24 14:55:43 -0300
---
This project aims to help document and create help systems. Jekyll doc theme was developed with Jekyll and is hosted on Github. However, as we use plugins that are not trusted by Github, it is necessary to use Travis to compile and install the site.

## Installation

You need Ruby and gem before starting, then:
1. Install Jekyll and Bundle: `gem install jekyll bundle`
1. Fork and clone the [jekyll-doc-theme](https://github.com/ReinanHS/jekyll-doc-theme): 
```bach
# clone the project
git clone https://github.com/ReinanHS/jekyll-doc-theme.git
cd jekyll-doc-theme
```
3. Install dependencies: `bundle install`
4. Run jekyll with dependencies `bundle exec jekyll serve`

## Project files

```bash
├── _draft # To store your drafts, they will not be published on your website
├── _data # Settings files that can be accessed anywhere on the site
├── _docs # Files and publications about your documentation
|  ├── 1.0 # Version name folder with documentation
|  ├── 1.5 # Version name folder with documentation
|  └── 2.0 # Version name folder with documentation
├── _includes # Templates that can be included in the project
├── _layouts # layouts de temas (veja abaixo para detalhes)
├── _posts # Blog posts
├── _sass # Sass parciais 
├── assets
|  ├── js # Files javascript, Katex, jquery, bootstrap, jekyll search, 
|  ├── css # Files CSS, Bootstrap, font-awesome, katex and main css
|  ├── fonts # Font-Awesome, and other sources
|  └── img # Images used for templates
├── pages
|   ├── 404.md # Page that is displayed when the URL is wrong
|   ├── search.html # Search page
├── _config.yml # General site configuration
└── index.html # sample home page
└── .travis # Travis configuration file
```
## Project settings
The site settings are in the [_config.yml](_config.yml) file. Use a text editor to change most settings.
## How to create a version for your documentation?
To create a version for your documentation you can use the command:
```bach
bundle exec jekyll vdoc <VERSION>
```
## How to add a publication?
To create a file for your documentation use this command
```bach
bundle exec jekyll vmake <FILE NAME>
```
## Comments
The comments we use in the blog posts on the site are managed by [Disqus](http://disqus.com/), which is a platform to increase engagement on your sites and allows people to comment on your blog.

In addition to offering superior performance when compared to other systems, [Disqus](http://disqus.com/) guarantees other advantages for our readers. One is the possibility of registering through social networks, such as Facebook and Twitter. However, those who prefer can also register directly through the [Disqus](http://disqus.com/) website.

To activate the functionality, create an account and place your identifier in [_config.yml](_config.yml):
```yml
disqus_shortname: '<APP KEY>'
```
## Configuring Travis CI to create and deploy the site
We must create an account on [Travis CI](https://travis-ci.com/) to synchronize our GitHub repository with Travis, so we have to search for the repository on Travis and then right click to activate this repository.

<img src="https://miro.medium.com/max/1675/1*BwypOVhSR_DcGHRjrZI7BA.png" class="img-fluid" alt="Responsive image">

After that we need to add a * token * from GitHub to Travis CI in order to publish the generated site. Go to [Github Token](https://github.com/settings/tokens) and create a personal access token.

<img src="https://miro.medium.com/max/2815/1*5fOAumDl3XCWD0h-Vhtfcw.png" class="img-fluid" alt="Responsive image">

After generating your * token *, copy it immediately, as it will only be available when it is created. Take this copied * token * back to the settings page in Travis CI, create an environment variable called `GITHUB_TOKEN`, paste the * token * in the value field, make sure “Display value in creation log” is not checked and click Add.

## Links and considerations

- [Supercharge GitHub Pages with Jekyll and Travis CI](https://medium.com/@mcred/supercharge-github-pages-with-jekyll-and-travis-ci-699bc0bde075)
- [Colocando um site no ar com Jekyll: usando o terminal](https://jtemporal.com/do-tema-ao-ar/)
- [Tecmundo: Explicando um pouco sobre o disqus](https://www.tecmundo.com.br/institucional/104360-novidade-comentarios-tecmundo-testando-o-disqus.htm)
- [Github Pages](https://pages.github.com/)
- [Jekyll](https://jekyllrb.com/)
- [Travis](https://travis-ci.com/)
- [Disqus](http://disqus.com/)

## License

Released under [the MIT license](LICENSE).

[Installation]: #installation
[Project files]: #project-files
[Project settings]: #project-settings
[How to create a version for your documentation?]: #how-to-create-a-version-for-your-documentation
[How to add a publication?]: #how-to-add-a-publication
[Comments]: #comments
[Configuring Travis CI to create and deploy the site]: #configuring-travis-ci-to-create-and-deploy-the-site
[Links and considerations]: #links-and-considerations
[License]: #license 