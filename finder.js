(function(root, $) {

    // creating new object
    var Finder = function() {
        return new Finder.init();
    }

    // hidden and inaccessible
    var validUsers = ['sam123', 'john86', 'max007'];

    // directory of usernames and corresponding fullnames
    var directory = {
        sam123: 'Samantha Peters',
        john86: 'Johnson Wells',
        max007: 'Maximoff Summers'
    };


    // methods under prototype
    Finder.prototype = {


        validate: function() {
            // check for valid users
             if (validUsers.indexOf(this.userName)  === -1) {
                return;
             }
              return true;
        },

        // retrieve full name corresponding to the user
        retriever: function() {
            return 'Full Name : ' + directory[this.userName];
        },

        // setting the User
        setUser: function(user) {

            // set the user
            this.userName = user;

            // validate
            if(this.validate()) {
              return this;
            }
            else {
              return;
            }
        },

        // getting User details
        userDetails: function(selector) {
            // jQuery Check
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // inject the message in DOM
            $(selector).html(this.retriever());

            return this;
        }

    };

    // creating the object to avoide use of new keyword
    Finder.init = function() {

        var self = this;
        self.userName= '';

    }

    Finder.init.prototype = Finder.prototype;

    // providing 'AJ$' for ease of typing and attaching object to root
    root.Finder = root.AJ$ = Finder;

}(window, jQuery));
