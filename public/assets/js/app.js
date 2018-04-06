$(document).ready(() => {
    const articleContainer = $('.container__article');
    // $(document).on('click', '.button__save', handleArticleSave);
    $(document).on('click', '.scrape__new', handleArticleScrape);

    initPage();

    var initPage = () => {
        articleContainer.empty();
        $.get('/api/title?saved=false').then((date) => {
            if (data && data.length) {
                renderArticles(data);
            } else {
                renderEmpty();
            }
        });
    }

    var renderArticles = (articles) => {
        const articleCards = [];

        for (let i = 0; i < articles.length; i++) {
            articleCards.push(createCard(articles[i]));
        }

        articleContainer.append(articleCards);
    }

    var createCard = (article) => {
        const card = $(
            [
                '<div class="box">',
                '<div class="content">',
                '<h3 class="title">' + article.title + '</h3>',
                '<p>' + article.summary + '</p>',
                '<div class="columns level">',
                '<div class="column is-three-quarters">',
                '<a href=' + article.url + '>' + article.url + '</a>',
                '</div>',
                '<div class="column">',
                '<a class="button is-primary is-medium is-pulled-right">Save</a>',
                '</div>',
                '</div>',
                '</div>',
                '</div>',
                '<br>'
            ].join('')
        );

        card.data('_id', article._id);
        return card;
    }

    var renderEmpty = () => {
        const emptyAlert = $(
            [
                '<div class="box has-text-centered">',
                '<div class="content">',
                "<h2 class='title'>Whoops! Looks like we don't have any new articles.</h2>",
                '<hr>',
                '<h3>What would you like to do?</h3>',
                '<div>',
                '<h4>',
                '<a class="scrape__new">Scrape new articles</a>',
                '</h4>',
                '</div>',
                '<div>',
                '<h4>',
                '<a href="/saved">Go to saved articles</a>',
                '</h4>',
                '</div>',
                '</div>',
                '</div>'
            ].join('')
        );
        
        articleContainer.append(emptyAler);
    }

    var handleArticleSave = () => {
        const articleToSave = $(this)
            .parents('.box')
            .data();

        articleToSave.saved = true;

        $.ajax({
            method: 'PUT',
            url: '/api/titles/' + articleToSave._id,
            data: articleToSave
        }).then((data) => {
            if (data.saved) {
                initPage()
            }
        });
    }

    var handleArticleScrape = () => {
        $.get('/api/fetch').then((data) => {
            initPage();
            bootbox.alert('<h3 class="has-text-centerd">' + data.message + '</h3>');
        });
    }
});