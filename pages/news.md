---
layout: post
title:  "News and announcements"
permalink: /news/
---

{% for post in site.posts limit:1 %}
{{ post.content}}
{% endfor %}
