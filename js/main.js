jQuery.fn.extend({
    skills: function(skill, sorted) {
        contentElement = this;
        if (sorted) {
            skill.sort(function(a,b){return b[1] - a[1]});
        }

        $(skill).each(function(id, el){
            var ratingElement = $('<div class="skillItem span5"><span class="star"></span><span class="skill">'+el[0]+'</span></div>');
            $(contentElement).append(ratingElement);
            $('.star', ratingElement).raty({ precision: true, half: true, size: 24, path: 'img', score: parseFloat(el[1]), readOnly: true });
        });
        return this.each(function() { this.checked = true; });
    }
});

var skills = [
    [ 'Software architecture', 4.5],
    [ 'PHP 5', 5 ],
    [ 'PHPUnit', 4 ],
    [ 'Symfony2', 3.5 ],
    [ 'Nette', 4 ],
    [ 'HTML', 5 ],
    [ 'HTML 5', 4.2],
    [ 'CSS', 4],
    [ 'Javascript', 4.5 ],
    [ 'Coffee Script', 5 ],
    [ 'Google Closure', 5 ],
    [ 'jQuery', 3.5 ],
    [ 'Mocha', 4 ],
    [ 'Chai', 4 ],
    [ 'Robohydra', 5],
    [ 'NodeJS', 4 ],
    [ 'Grunt', 4 ],
    [ 'MySQL', 4.5 ],
    [ 'MS-SQL', 4 ],
    [ 'Redis', 3.8 ],
    [ 'Memcached', 5 ],
    [ 'MongoDB', 4 ],
    [ 'GIT', 5 ],
    [ 'Debian', 5 ],
    [ 'CentOS', 4 ],
    [ 'Apache / Nginx', 4.5 ],
    [ 'ANT', 4 ],
    [ 'Python', 2.4 ],
    [ 'BASH', 4 ],
    [ 'PERL', 2 ]
];

$('#skills').skills(skills, false);

var langs = [
    [ 'Czech', 5],
    [ 'English', 4.5 ],
    [ 'Dutch', 4.5 ],
    [ 'German', 3.5 ]
];

$().ready($('#langs').skills(langs, true));
