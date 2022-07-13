//nReplacer
(function ($) {

    var self = $.nReplacer = new function () { };

    $.extend(self, {

        nBackgrounds: [
            'https://www.significadofacil.com/wp-content/uploads/2015/07/navegadores-apps-for-work-Google.png'
        ],

		nImgs: [
            'https://iili.io/jal5pn.png',
			'https://iili.io/jalYIs.png',
			'https://iili.io/jalRkX.png',
			'https://iili.io/jalA7t.png',
			'https://iili.io/jalahG.png',
			'https://iili.io/jalcQf.png',
			'https://iili.io/jal0B4.png',
			'https://iili.io/jal1El.png',
			'https://iili.io/jalE42.png',
			'https://iili.io/jalM2S.png',
			'https://iili.io/jalVY7.png',
			'https://iili.io/jalWv9.png',
			'https://iili.io/jaljTu.png',
			'https://iili.io/jalXpe.png',
			'https://iili.io/jalwhb.png',
			'https://iili.io/jalNQj.png',
			'https://iili.io/jalryF.png',
			'https://iili.io/jalkEQ.png',
			'https://iili.io/jaleCx.png',
			'https://iili.io/jalLCv.png',
			'https://iili.io/jalv4V.jpg',
			'https://iili.io/jalS3B.jpg',
			'https://iili.io/jalUYP.jpg',
			'https://iili.io/jalgv1.jpg',
			'https://iili.io/jal6Tg.jpg',
			'https://iili.io/jalPja.jpg',
			'https://iili.io/jaliZJ.jpg',
			'https://iili.io/jalQGR.png',
			'https://iili.io/jalD3N.png',
			'https://iili.io/jalmvt.png',
			'https://iili.io/ja09un.png',
			'https://iili.io/jalbaI.png',
			'https://iili.io/jalpyX.png',
			'https://iili.io/ja0Hjs.png',
			'https://iili.io/ja0JZG.png',
			'https://iili.io/ja02nf.png'
        ],


        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nImgs, 3000);
        self.handleLogo(self.nBackgrounds, 3000);
    });
})(jQuery);
