---
layout: default
title: Blog Posts
description: "Personal Blog along with Research notes and updates on Ultrafast Spectroscopy, Python for Physics, and Condensed Matter experiments by Abhay Saxena."
hide_title: false
---
Hi there, welcome to my portfolio!
I'm currently in the process of migrating my site to Jekyll for better content management, so some blog posts and sections are temporarily unavailable.

I’m working on restoring everything soon (as time permits!). Until then, feel free to check out my resume on the [About Me page](https://saxenabhay.github.io/about/).


<div style="margin-bottom: 2rem;">
    <input type="text" id="search-box" placeholder="Search notes (e.g., 'terahertz', 'python')..." 
    style="width: 100%; padding: 0.8rem; font-family: inherit; background: var(--bg); color: var(--text); border: 1px solid var(--border); border-radius: 4px; box-sizing: border-box;">
</div>

<hr style="margin-bottom: 2rem; opacity: 0.2;">

<ul id="search-results" style="display: none; padding-left: 0;"></ul>

<ul id="default-list" style="padding-left: 0;">
  {% for post in site.posts %}
    <li style="margin-bottom: 2rem; list-style: none;">
      <span style="font-family: 'Courier New'; opacity: 0.6; font-size: 0.9rem;">{{ post.date | date: "%B %d, %Y" }}</span>
      <br>
      <a href="{{ post.url }}" style="font-size: 1.4rem; font-weight: bold; text-decoration: none;">{{ post.title }}</a>
      <p style="margin-top: 0.5rem;">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
    </li>
  {% endfor %}
</ul>

<script src="/assets/js/search.js"></script>