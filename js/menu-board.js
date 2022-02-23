const mesureWidth = item => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".menu-board__list");
    const titlesBlocks = container.find(".menu-board__item-title");
    const titleWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".menu-board__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if(isMobile) {
        reqItemWidth = screenWidth - titleWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }
};

const closeEveryItemInContainer = container => {
    const items = container.find(".menu-board__item");
    const content = container.find(".menu-board__content");

    items.removeClass("active");
    content.width(0);
};

const openItem = item => {
    const hiddenContent = item.find(".menu-board__content");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".menu-board__container");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
};

$(".menu-board__item-title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".menu-board__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".menu-board__list");

    if (itemOpened) {
        closeEveryItemInContainer(container)
    } else {
        closeEveryItemInContainer(container)
        openItem(item);
    }  
});

$(".menu-board__close").on("click", e => {
    e.preventDefault();

    closeEveryItemInContainer($('.menu-board__list'));
})