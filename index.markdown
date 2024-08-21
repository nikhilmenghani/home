---
layout: home
title: Home
---

<div class="home">
    <div class="first__container">
        <div class="ui text container">
            <h1 class="ui header">
            Imagine-a-Company
            </h1>
            <h2>Do whatever you want when you want to.</h2>
            <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
        </div>
    </div>
    <div class="ui container">

        <h1>Cards</h1>

        <div class="cards-container">
            {% for card in site.data.cards.cards %}
            {% include card.html
                title=card.title
                content=card.content
                download_link=card.download_link
                accordion_enabled=card.accordion_enabled
                accordion_content=card.accordion_content
            %}
            {% endfor %}
        </div>
    </div>
</div>