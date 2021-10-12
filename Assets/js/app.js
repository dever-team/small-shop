const headerHeight = $('header').outerHeight();
const shopDropdown = $('.shop-dropdown').outerHeight();
const contactDropdown = $('.contact-dropdown').outerHeight();
currentDropdown = '';
dropdownOpen = 0;

$('header').css('height', headerHeight);

function openNav(page) {
    if (!dropdownOpen) {
        switch (page) {
            case 'shop':
                targetHeight = headerHeight + shopDropdown;
                break;
            case 'contact':
                targetHeight = headerHeight + contactDropdown;
                break;
        }

        $('.mydropdown').css('display', 'none');
        $('.' + page + '-dropdown').css('display', 'grid');

        tl = gsap.timeline({ paused: true, reversed: true });
        tl.to('nav', 1, { height: targetHeight });

        currentDropdown = page;
        dropdownOpen = 1;

        tl.reversed() ? tl.play() : console.log();
    } else {
        closeNav(page);
    }
}

function closeNav(page) {
    tl.reverse();
    setTimeout(function () {
        dropdownOpen = 0;
        if (currentDropdown != page) {

            switch (page) {
                case 'shop':
                    targetHeight = headerHeight + shopDropdown;
                    break;
                case 'contact':
                    targetHeight = headerHeight + contactDropdown;
                    break;
            }

            $('.mydropdown').css('display', 'none');
            $('.' + page + '-dropdown').css('display', 'grid');

            tl = gsap.timeline({ paused: true, reversed: true });
            tl.to('nav', 1, { height: targetHeight });

            currentDropdown = page;
            dropdownOpen = 1;

            tl.reversed() ? tl.play() : console.log();
        }
    }, tl.time() * 1000);
}