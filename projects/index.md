---
layout: projects
title: Projects
permalink: /projects/
---

{% for project in site.data.projects %}

{% if project.link %}
#### [ {{ project.name }}]({{ project.link }})
{% endif %}
{% if project.description %}
{{ project.description }}
{% endif %}

{% endfor %}