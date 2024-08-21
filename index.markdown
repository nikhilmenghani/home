---
layout: home
title: Home
---

<div class="home">
    <div class="first__container">
        <div class="ui text container">
            <h1 class="ui header">
            NikGapps
            </h1>
            <h4>A Custom Google Apps Package that Suits Everyone Needs!
Supports Android 14(U), 13 (T) with regular updates and Android 12L (SL), 12 (S), 11 (R), 10 (Q) on need basis</h4>
            <div class="ui huge primary button">Download <i class="right arrow icon"></i></div>
        </div>
    </div>
    <div class="ui container">

        <h1>NikGapps Variants</h1>

        <div class="cards-container">
            {% for card in site.data.cards.cards %}
            {% include card.html
                title=card.title
                content=card.content
                download_link=card.download_link
                is_accordion=card.is_accordion
            %}
            {% endfor %}
        </div>
    </div>
</div>