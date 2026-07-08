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

    $('.publication-filter-scope').each(function () {
        var $scope = $(this);
        var $input = $scope.find('[data-publication-search-input]').first();
        var $entries = $scope.find('[data-publication-entry]');
        var $noResults = $scope.find('[data-publication-no-results]').first();

        if (!$input.length || !$entries.length) {
            return;
        }

        var normalize = function (value) {
            return (value || '').toString().toLowerCase().replace(/\s+/g, ' ').trim();
        };

        var filterPublications = function () {
            var query = normalize($input.val());
            var visibleCount = 0;

            $entries.each(function () {
                var $entry = $(this);
                var searchText = normalize($entry.attr('data-publication-search') + ' ' + $entry.text());
                var isVisible = !query || searchText.indexOf(query) !== -1;

                $entry.toggle(isVisible);
                if (isVisible && !$entry.hasClass('d-md-none')) {
                    visibleCount += 1;
                }
            });

            $scope.find('[data-publication-year-group]').each(function () {
                var $group = $(this);
                var hasVisiblePapers = $group.find('[data-publication-entry]:visible').length > 0;
                $group.toggle(hasVisiblePapers);
            });

            $noResults.toggle(visibleCount === 0);
        };

        $noResults.hide();
        $input.on('input', filterPublications);
        filterPublications();
    });

    var $publicationLightbox = $('<div class="publication-image-lightbox image-lightbox" aria-hidden="true"><img alt=""></div>');
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

    $('img.profile-portrait').on('dblclick', function (event) {
        event.preventDefault();

        var $image = $(this);
        var imageSrc = $image.attr('data-src') || $image.attr('src');
        if (!imageSrc) {
            return;
        }

        $publicationLightbox.find('img').attr('src', imageSrc).attr('alt', $image.attr('alt') || 'Portrait');
        $publicationLightbox.addClass('is-visible').attr('aria-hidden', 'false');
    });

    $publicationLightbox.on('click', closePublicationLightbox);

    $(document).on('keydown', function (event) {
        if (event.key === 'Escape') {
            closePublicationLightbox();
        }
    });
})
