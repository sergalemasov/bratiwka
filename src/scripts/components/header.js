(function (app) {
    function Header() {
        this.isBurgerExpanded = false;
    }

    Header.prototype.init = function () {
        this.storeDomElements();
        this.addListeners();
    }

    Header.prototype.storeDomElements = function () {
        this.burgerNode = document.getElementById('header-burger');
        this.dropdownNode = document.getElementById('header-dropdown');
    }

    Header.prototype.addListeners = function () {
        this.burgerNode.addEventListener('click', () => {
            if (this.isBurgerExpanded) {
                this.burgerNode.classList.remove('header-burger_expanded');
                this.dropdownNode.classList.remove('header-dropdown_visible');
            } else {
                this.burgerNode.classList.add('header-burger_expanded');
                this.dropdownNode.classList.add('header-dropdown_visible');
            }

            this.isBurgerExpanded = !this.isBurgerExpanded;
        });
    }

    app.header = new Header();
})(app);
