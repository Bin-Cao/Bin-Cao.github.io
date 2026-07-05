// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    $('[data-publication-toggle]').each(function () {
        var $toggle = $(this);
        var $abstract = $toggle.prev('.publication-abstract');

        if (!$abstract.length || $abstract[0].scrollHeight <= $abstract[0].clientHeight + 1) {
            $toggle.addClass('is-hidden');
            return;
        }

        $toggle.on('click', function () {
            var expanded = $abstract.toggleClass('is-expanded').hasClass('is-expanded');
            var getI18nText = window.siteI18nText || function (key) {
                return key === 'publication.show_less' ? 'Show less' : 'Show more';
            };
            $toggle.text(getI18nText(expanded ? 'publication.show_less' : 'publication.show_more'));
        });
    });

    var $publicationLightbox = $('<div class="publication-image-lightbox" aria-hidden="true"><img alt=""></div>');
    $('body').append($publicationLightbox);

    var closePublicationLightbox = function () {
        $publicationLightbox.removeClass('is-visible').attr('aria-hidden', 'true');
        $publicationLightbox.find('img').attr('src', '').attr('alt', '');
    };

    $('img.publication-cover').on('dblclick', function (event) {
        event.preventDefault();

        var $image = $(this);
        var imageSrc = $image.attr('data-src') || $image.attr('src');
        if (!imageSrc) {
            return;
        }

        $publicationLightbox.find('img').attr('src', imageSrc).attr('alt', $image.attr('alt') || '');
        $publicationLightbox.addClass('is-visible').attr('aria-hidden', 'false');
    });

    $publicationLightbox.on('click', closePublicationLightbox);

    $(document).on('keydown', function (event) {
        if (event.key === 'Escape') {
            closePublicationLightbox();
        }
    });
})
